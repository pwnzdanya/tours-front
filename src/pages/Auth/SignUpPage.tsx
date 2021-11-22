import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { CustomInput } from '../../components/UI';
import { Loader } from '../../components/UI/Loader';
import { useAppDispatch } from '../../hooks/appDispatch';
import { useAppSelector } from '../../hooks/appSelector';
import { fetchRegister } from '../../store/auth/actions';
import { IRegisterData } from '../../store/auth/types';
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
  Title,
} from './AuthBox';

const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(state => state.auth.loadingAuthStatus);

  const SignUpSchema = yup
    .object({
      email: yup.string().email().min(6).max(40).required(),
      name: yup.string().min(2).max(25).required(),
      password: yup.string().min(6).max(40).required(),
      confirmPassword: yup.string().oneOf([yup.ref('password')], `passwords don't match`),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });
  const onSubmit = (data: IRegisterData) => {
    dispatch(fetchRegister(data));
  };

  return (
    <AuthBox>
      <>
        {loadingStatus === LoadingStatus.LOADING && (
          <Overlay>
            <Loader />
          </Overlay>
        )}
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormItem>
            <CustomInput name="email" label="email" register={register} required />
            <ErrorText> {errors.email?.message}</ErrorText>
          </FormItem>
          <FormItem>
            <CustomInput name="name" label="name" register={register} required />
            <ErrorText> {errors.name?.message}</ErrorText>
          </FormItem>
          <FormItem>
            <PasswordInput name="password" label="password" register={register} />
            <ErrorText>{errors.password?.message}</ErrorText>
          </FormItem>

          <FormItem>
            <PasswordInput
              name="confirmPassword"
              label="confirm password"
              register={register}
            />
            <ErrorText>{errors.confirmPassword?.message}</ErrorText>
          </FormItem>

          <StyledButton>Register</StyledButton>
        </Form>
        <StyledText>Already have an account?</StyledText>
        <ButtonWrapper>
          <StyledNavLink to="/auth/signIn">Sign In</StyledNavLink>
        </ButtonWrapper>
      </>
    </AuthBox>
  );
};

export default SignUpPage;
