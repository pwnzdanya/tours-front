import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { CustomInput } from '../../components/UI';
import { Text } from '../../styled/Text';

import { RevealText, StyledButton } from './Auth';
import { ErrorText, Form, FormItem, TextWrapper } from './AuthMain';

interface IAuthSignInProps {
  onSetIsForgotClick: () => void;
}

const TextRight = styled(Text)`
  text-align: end;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.2s ease;
  cursor: pointer;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.main};
  }
`;

const AuthSignIn: React.FC<IAuthSignInProps> = ({ onSetIsForgotClick }) => {
  const [isPassHidden, setIsPassHidden] = useState(true);

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
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onRevealTextClick = () => setIsPassHidden(!isPassHidden);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormItem>
        <CustomInput name="email" label="email" register={register} required />
        <ErrorText> {errors.email?.message}</ErrorText>
      </FormItem>
      <FormItem>
        <CustomInput
          name="password"
          label="password"
          type={isPassHidden ? 'password' : 'text'}
          register={register}
          required
        />
        <RevealText onClick={onRevealTextClick}>
          {isPassHidden ? 'Reveal password' : 'Hide password'}
        </RevealText>
        <ErrorText>{errors.password?.message}</ErrorText>
      </FormItem>

      <TextWrapper justify="flex-end">
        <TextRight onClick={onSetIsForgotClick}>Forgot password?</TextRight>
      </TextWrapper>

      <StyledButton>Login</StyledButton>
    </Form>
  );
};

export default AuthSignIn;
