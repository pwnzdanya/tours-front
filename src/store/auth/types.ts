import { LoadingStatus } from '../types';

export enum AuthType {
  REGISTER = 'auth/REGISTER',
  LOGIN = 'auth/LOGIN',
  FORGOT = 'auth/FORGOT',
  RESET = 'auth/RESET',
  ME = 'auth/ME',
  LOGGED_OUT = 'auth/LOGGED-OUT',

  SET_USER = 'auth/SET-USER',
  SET_LOGGED_USER_OUT = 'auth/SET-LOGGED-USER-OUT',
  SET_LOADING_STATUS = 'auth/SET-LOADING-STATUS',
  SET_ERROR_STATUS = 'auth/SET-ERROR-STATUS',
  SET_AUTH = 'auth/SET-IS-AUTH',
}

export interface IRegisterData extends ILoginData {
  name: string;
  confirmPassword: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserData {
  name: string;
  photo: string | null;
  email: string;
}

export interface IAuthState {
  user: IUserData;
  isAuth: boolean;
  loadingAuthStatus: LoadingStatus;
}
