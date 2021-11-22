import { AppType } from './types';

export type ToggleSnackBarOpenType = ReturnType<typeof toggleSnackbarOpen>;
export type ToggleSnackBarCloseType = ReturnType<typeof toggleSnackbarClose>;
export type SetIsInitializedAppType = ReturnType<typeof setIsInitializedApp>;

export type AppActionType =
  | ToggleSnackBarCloseType
  | ToggleSnackBarOpenType
  | SetIsInitializedAppType;

export const toggleSnackbarOpen = (payload: string) =>
  ({
    type: AppType.TOGGLE_SNACKBAR_OPEN,
    payload,
  } as const);

export const toggleSnackbarClose = () =>
  ({
    type: AppType.TOGGLE_SNACKBAR_CLOSE,
  } as const);

export const setIsInitializedApp = () => ({ type: AppType.IS_INITIALIZED } as const);
