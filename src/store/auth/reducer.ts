import produce from 'immer';

import { LoadingStatus } from '../types';

import { AuthActionType } from './actions';
import { AuthType, IAuthState } from './types';

const initialAuthState: IAuthState = {
  user: {
    name: '',
    photo: null,
    email: '',
  },
  isAuth: false,
  loadingAuthStatus: LoadingStatus.IDLE,
};

export const authReducer = produce((draft, action: AuthActionType) => {
  switch (action.type) {
    case AuthType.SET_USER:
      draft.user = action.payload;
      draft.isAuth = true;
      draft.loadingAuthStatus = LoadingStatus.SUCCESS;
      break;

    case AuthType.SET_LOGGED_USER_OUT:
      draft.user = {
        name: '',
        photo: null,
        email: '',
      };
      draft.isAuth = false;
      draft.loadingAuthStatus = LoadingStatus.SUCCESS;
      break;

    case AuthType.SET_LOADING_STATUS:
      draft.loadingAuthStatus = action.payload;
      break;

    default:
      break;
  }
}, initialAuthState);
