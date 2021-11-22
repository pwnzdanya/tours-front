import { call, put, takeEvery } from 'redux-saga/effects';

import AuthAPI from '../../API/auth';
import { forwardTo } from '../../utils/forwardTo';
import { setIsInitializedApp, toggleSnackbarOpen } from '../app/actions';
import { LoadingStatus } from '../types';

import {
  ForgotType,
  LoginType,
  RegisterType,
  ResetType,
  setLoadingStatus,
  setLoggedUserOut,
  setUser,
} from './actions';
import { AuthType, IUserData } from './types';

function* register({ payload }: RegisterType) {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    const user: IUserData = yield call(AuthAPI.register, payload);
    yield put(setUser(user));
  } catch (err: any) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
    yield put(toggleSnackbarOpen(err.response.data.message));
  }
}

function* login({ payload }: LoginType) {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    const user: IUserData = yield call(AuthAPI.login, payload);
    yield put(setUser(user));
  } catch (err: any) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
    yield put(toggleSnackbarOpen(err.response.data.message));
  }
}

function* forgot({ payload }: ForgotType) {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    yield call(AuthAPI.forgot, payload);
    yield call(forwardTo, {
      linkTo: '/email',
      state: payload.email,
      navigate: payload.navigate,
    });
    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (err: any) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
    yield put(toggleSnackbarOpen(err.response.data.message));
  }
}

function* reset({ payload }: ResetType) {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    yield call(AuthAPI.reset, payload);
    yield call(forwardTo, {
      linkTo: '/',
      navigate: payload.navigate,
    });
    yield put(setLoadingStatus(LoadingStatus.SUCCESS));
  } catch (err: any) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
    yield put(toggleSnackbarOpen(err.response.data.message));
  }
}

function* me() {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    const user: IUserData = yield call(AuthAPI.me);
    yield put(setUser(user));
    yield put(setIsInitializedApp());
  } catch (err: any) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
    yield put(setIsInitializedApp());
    // yield put(toggleSnackbarOpen(err.response.data.message));
  }
}

function* loggedOut() {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    yield call(AuthAPI.loggedOut);
    yield put(setLoggedUserOut());
  } catch (err: any) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* authSaga() {
  yield takeEvery(AuthType.REGISTER, register);
  yield takeEvery(AuthType.LOGIN, login);
  yield takeEvery(AuthType.FORGOT, forgot);
  yield takeEvery(AuthType.RESET, reset);
  yield takeEvery(AuthType.ME, me);
  yield takeEvery(AuthType.LOGGED_OUT, loggedOut);
}
