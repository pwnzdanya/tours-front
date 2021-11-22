import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';

import { CustomInput } from '../../components/UI';
import { Loader } from '../../components/UI/Loader';
import { useAppDispatch } from '../../hooks/appDispatch';
import { useAppSelector } from '../../hooks/appSelector';
import { fetchForgot } from '../../store/auth/actions';
import { LoadingStatus } from '../../store/types';
import { Overlay } from '../../styled/Overlay';
import { StyledNavLink } from '../../styled/StyledNavLink';
import { Text } from '../../styled/Text';

import {
  AuthBox,
  ButtonWrapper,
  ErrorText,
  Form,
  FormItem,
  StyledButton,
} from './AuthBox';

interface IStyledTextProps {
  margin?: string;
  textAlign?: 'center' | 'end';
}

interface IStyledTitleProps {
  margin?: string;
}

export const StyledText = styled(Text)<IStyledTextProps>`
  display: block;
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign || 'start'};
  color: ${({ theme }) => theme.colors.secondaryDark};
`;

export const StyledTitle = styled.h2<IStyledTitleProps>`
  width: 100%;
  margin: ${({ margin }) => margin || '0'};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 30px;
`;

export const AuthForgot = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(state => state.auth.loadingAuthStatus);
  const navigate = useNavigate();
  const forgotPassSchema = yup
    .object({
      email: yup.string().email().min(6).max(40).required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPassSchema),
  });
  const onSubmit = (data: { email: string }) => {
    const forgotData = {
      ...data,
      navigate,
    };
    dispatch(fetchForgot(forgotData));
  };

  return (
    <AuthBox>
      <>
        {loadingStatus === LoadingStatus.LOADING && (
          <Overlay>
            <Loader />
          </Overlay>
        )}
        <StyledTitle margin="0 0 55px 0">Forgot your password?</StyledTitle>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormItem>
            <CustomInput name="email" label="email" register={register} required />
            <ErrorText> {errors.email?.message}</ErrorText>
          </FormItem>
          <StyledText margin="-25px 0 45px 0">
            Enter your email address and we will send you further instructions
          </StyledText>
          <StyledButton>Send instructions</StyledButton>
        </Form>
        <StyledText textAlign="center" margin="0 0 10px 0">
          Have you remembered your password?
        </StyledText>
        <ButtonWrapper>
          <StyledNavLink to="/auth/signIn">Try logging in</StyledNavLink>
        </ButtonWrapper>
      </>
    </AuthBox>
  );
};
