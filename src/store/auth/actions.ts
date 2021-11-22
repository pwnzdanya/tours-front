import { NavigateFunction } from 'react-router-dom';

import { LoadingStatus } from '../types';

import { AuthType, ILoginData, IRegisterData, IUserData } from './types';

export type RegisterType = ReturnType<typeof fetchRegister>;
export type LoginType = ReturnType<typeof fetchLogin>;
export type ForgotType = ReturnType<typeof fetchForgot>;
export type ResetType = ReturnType<typeof fetchReset>;
export type MeType = ReturnType<typeof me>;
export type LoggedOutType = ReturnType<typeof loggedOut>;

export type SetUserType = ReturnType<typeof setUser>;
export type SetLoadingStatusType = ReturnType<typeof setLoadingStatus>;
export type SetLoggedUserOutType = ReturnType<typeof setLoggedUserOut>;
export type AuthActionType =
  | SetUserType
  | SetLoadingStatusType
  | RegisterType
  | LoginType
  | ForgotType
  | ResetType
  | MeType
  | LoggedOutType
  | SetLoggedUserOutType;

export const fetchRegister = (payload: IRegisterData) =>
  ({
    type: AuthType.REGISTER,
    payload,
  } as const);

export const fetchLogin = (payload: ILoginData) =>
  ({
    type: AuthType.LOGIN,
    payload,
  } as const);

export const fetchForgot = (payload: { email: string; navigate: NavigateFunction }) =>
  ({ type: AuthType.FORGOT, payload } as const);

export const fetchReset = (payload: {
  password: string;
  token: string | undefined;
  navigate: NavigateFunction;
}) => ({ type: AuthType.RESET, payload } as const);

export const me = () => ({ type: AuthType.ME } as const);

export const loggedOut = () => ({ type: AuthType.LOGGED_OUT } as const);

export const setUser = (payload: IUserData) =>
  ({
    type: AuthType.SET_USER,
    payload,
  } as const);

export const setLoggedUserOut = () => ({ type: AuthType.SET_LOGGED_USER_OUT } as const);

export const setLoadingStatus = (payload: LoadingStatus) =>
  ({ type: AuthType.SET_LOADING_STATUS, payload } as const);
