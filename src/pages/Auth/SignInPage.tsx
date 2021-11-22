import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { CustomInput } from '../../components/UI';
import { Loader } from '../../components/UI/Loader';
import { useAppDispatch } from '../../hooks/appDispatch';
import { useAppSelector } from '../../hooks/appSelector';
import { fetchLogin } from '../../store/auth/actions';
import { ILoginData } from '../../store/auth/types';
import { LoadingStatus } from '../../store/types';
import { Overlay } from '../../styled/Overlay';
import { StyledNavLink } from '../../styled/StyledNavLink';

import {
  AuthBox,
  ButtonWrapper,
  ErrorText,
  Form,
  FormItem,
  StyledButton,
  StyledText,
  TextWrapper,
  Title,
} from './AuthBox';

const SignInPage = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(state => state.auth.loadingAuthStatus);
  const schema = yup
    .object({
      email: yup.string().email().min(6).max(40).required(),
      password: yup.string().min(6).max(40).required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ILoginData) => {
    dispatch(fetchLogin(data));
  };

  return (
    <AuthBox>
      <>
        <Title>Sign In</Title>
        <>
          {loadingStatus === LoadingStatus.LOADING && (
            <Overlay>
              <Loader />
            </Overlay>
          )}
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormItem>
              <CustomInput name="email" label="email" register={register} required />
              <ErrorText> {errors.email?.message}</ErrorText>
            </FormItem>
            <FormItem>
              <PasswordInput register={register} label="password" name="password" />
              <ErrorText>{errors.password?.message}</ErrorText>
            </FormItem>

            <TextWrapper>
              <StyledNavLink to="/auth/forgotPassword">Forgot password?</StyledNavLink>
            </TextWrapper>

            <StyledButton>Login</StyledButton>
          </Form>
        </>
        <StyledText>Do not have an account?</StyledText>
        <ButtonWrapper>
          <StyledNavLink to="/auth/signUp">Sign Up</StyledNavLink>
        </ButtonWrapper>
      </>
    </AuthBox>
  );
};

export default SignInPage;
