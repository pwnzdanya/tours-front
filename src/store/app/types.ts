export enum AppType {
  IS_INITIALIZED = 'app/IS-INITIALIZED-APP',
  TOGGLE_SNACKBAR_OPEN = 'app/TOGGLE-SNACKBAR-OPEN',
  TOGGLE_SNACKBAR_CLOSE = 'app/TOGGLE_SNACKBAR_CLOSE',
}

export interface IAppState {
  isInitializedApp: boolean;
  isErrorSnackbar: boolean;
  snackbarMessage: string | null;
}
