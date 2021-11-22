import produce from 'immer';

import { AppActionType } from './actions';
import { AppType, IAppState } from './types';

export const initialAppState: IAppState = {
  isInitializedApp: false,
  isErrorSnackbar: false,
  snackbarMessage: null,
};

export const appReducer = produce((draft, action: AppActionType) => {
  switch (action.type) {
    case AppType.IS_INITIALIZED:
      draft.isInitializedApp = true;
      break;

    case AppType.TOGGLE_SNACKBAR_OPEN:
      draft.isErrorSnackbar = true;
      draft.snackbarMessage = action.payload;
      break;

    case AppType.TOGGLE_SNACKBAR_CLOSE:
      draft.isErrorSnackbar = false;
      draft.snackbarMessage = null;
      break;
    default:
      break;
  }
}, initialAppState);
