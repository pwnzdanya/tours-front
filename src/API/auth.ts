import { AxiosResponse } from 'axios';

import { ILoginData, IRegisterData, IUserData } from '../store/auth/types';

import { apiConfig } from './index';

class AuthAPI {
  async register(registerData: IRegisterData): Promise<IUserData> {
    const response = await apiConfig.post<
      IRegisterData,
      AxiosResponse<{ data: IUserData }>
    >('auth/signUp', registerData);
    return response.data.data;
  }

  async login(loginData: ILoginData): Promise<IUserData> {
    const response = await apiConfig.post<ILoginData, AxiosResponse<{ data: IUserData }>>(
      'auth/signIn',
      loginData,
    );
    return response.data.data;
  }

  async forgot(forgotData: { email: string }) {
    await apiConfig.post<string, AxiosResponse<{ message: string }>>(
      'auth/forgotPassword',
      forgotData,
    );
  }

  async reset(resetData: {
    password: string;
    token: string | undefined;
  }): Promise<IUserData> {
    const response = await apiConfig.patch<
      IRegisterData,
      AxiosResponse<{ data: IUserData }>
    >(`auth/resetPassword/${resetData.token}`, { password: resetData.password });
    return response.data.data;
  }

  async me(): Promise<IUserData> {
    const response = await apiConfig.get<{ data: IUserData }>('auth/me');
    return response.data.data;
  }

  async loggedOut() {
    await apiConfig.get('auth/loggedOut');
  }
}

export default new AuthAPI();
