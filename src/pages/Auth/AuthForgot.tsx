import React, { ChangeEvent, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { CustomInput } from '../../components/UI';
import sprite from '../../icons.svg';
import { Button } from '../../styled/Button';
import { Flex } from '../../styled/Flex';
import { Svg } from '../../styled/Svg';
import { Text } from '../../styled/Text';

import { ButtonWrapper, StyledButton } from './Auth';
import { ErrorText, Form, FormItem } from './AuthMain';

interface IAuthForgot {
  onSetIsForgotClick: () => void;
}

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
  color: #c4c4c4;
`;

export const StyledTitle = styled.h2<IStyledTitleProps>`
  width: 100%;
  margin: ${({ margin }) => margin || '0'};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 30px;
`;
// razobrat'sa, pochemy krivo rabotaet pri importe

const Circle = styled(Flex)`
  width: 140px;
  height: 140px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
`;

const Wrapper = styled(Flex)`
  padding-top: 35px;
`;

export const AuthForgot: React.FC<IAuthForgot> = ({ onSetIsForgotClick }) => {
  const [isMessageSend, setIsMessageSend] = useState(true);
  const [q, setQ] = useState('');

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
  const onSubmit = (data: any) => {
    console.log(data);
    setIsMessageSend(!isMessageSend);
  };

  return isMessageSend ? (
    <>
      <StyledTitle margin="0 0 55px 0">Forgot your password?</StyledTitle>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormItem>
          <CustomInput
            name="email"
            label="email"
            register={register}
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => setQ(e.currentTarget.value)}
          />
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
        <Button transp onClick={onSetIsForgotClick}>
          Try logging in
        </Button>
      </ButtonWrapper>
    </>
  ) : (
    <Wrapper justify="center" direction="column" align="center">
      <Circle justify="center" align="center">
        <Svg width="100%" height="50%">
          <use href={`${sprite}#icon-message`} />
        </Svg>
      </Circle>
      <StyledTitle margin="0 0 20px 0">Check Email</StyledTitle>
      <StyledText textAlign="center">
        We have sent message with instructions to {q}
      </StyledText>
    </Wrapper>
  );
};
