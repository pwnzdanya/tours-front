import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';

import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { Loader } from '../../components/UI/Loader';
import { useAppDispatch } from '../../hooks/appDispatch';
import { useAppSelector } from '../../hooks/appSelector';
import { fetchReset } from '../../store/auth/actions';
import { LoadingStatus } from '../../store/types';
import { Button } from '../../styled/Button';
import { Flex } from '../../styled/Flex';
import { Overlay } from '../../styled/Overlay';
import { AuthBox, ErrorText, Form, FormItem } from '../Auth/AuthBox';
import { StyledText, StyledTitle } from '../Auth/AuthForgot';

const Wrapper = styled(Flex)`
  min-height: 450px;
`;

const StyledButton = styled(Button)`
  padding: 15px 120px;
  margin: 0 auto;
  margin-top: auto;
  margin-bottom: 30px;
`;

export const AuthNewPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loadingStatus = useAppSelector(state => state.auth.loadingAuthStatus);
  const { token } = useParams();
  const resetPassSchema = yup
    .object({
      password: yup.string().min(6).max(40).required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPassSchema),
  });
  const onSubmit = (data: { password: string }) => {
    const resetData = { ...data, token, navigate };
    dispatch(fetchReset(resetData));
  };

  return (
    <>
      {loadingStatus === LoadingStatus.LOADING && (
        <Overlay>
          <Loader />
        </Overlay>
      )}
      <AuthBox>
        <Wrapper direction="column">
          <StyledTitle margin="0 0 35px 0">Create new password</StyledTitle>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormItem>
              <PasswordInput name="password" label="password" register={register} />
              <ErrorText> {errors.password?.message}</ErrorText>
            </FormItem>
            <StyledText margin="-30px 0 0 0 ">Please enter your new password</StyledText>
            <StyledButton>Create new password</StyledButton>
          </Form>
        </Wrapper>
      </AuthBox>
    </>
  );
};

export default AuthNewPassword;
