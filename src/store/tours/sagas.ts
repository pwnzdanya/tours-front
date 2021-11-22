import { call, put, takeEvery } from 'redux-saga/effects';

import ToursAPI from '../../API/tours';
import { toggleSnackbarOpen } from '../app/actions';
import { setLoadingStatus } from '../auth/actions';
import { LoadingStatus } from '../types';

import { setTours } from './actions';
import { ITour, ToursType } from './types';

function* fetchTours() {
  try {
    yield put(setLoadingStatus(LoadingStatus.LOADING));
    const tours: ITour[] = yield call(ToursAPI.getAll);
    yield put(setTours(tours));
  } catch (err: any) {
    yield put(setLoadingStatus(LoadingStatus.ERROR));
    yield put(toggleSnackbarOpen(err.response.data.message));
  }
}

export function* toursSaga() {
  yield takeEvery(ToursType.FETCH_TOURS, fetchTours);
}
