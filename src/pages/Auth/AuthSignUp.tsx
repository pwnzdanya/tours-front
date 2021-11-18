import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CustomInput } from '../../components/UI';

import { RevealText, StyledButton } from './Auth';
import { ErrorText, Form, FormItem } from './AuthMain';

export const AuthSignUp = () => {
  const [isPassHiddenFirstField, setIsPassHiddenFirstField] = useState(true);
  const [isPassHiddenSecondField, setIsPassHiddenSecondField] = useState(true);
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
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onRevealTextFirstFieldClick = () =>
    setIsPassHiddenFirstField(!isPassHiddenFirstField);
  const onRevealTextSecondFieldClick = () =>
    setIsPassHiddenSecondField(!isPassHiddenSecondField);

  return (
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
        <CustomInput
          name="password"
          label="password"
          type={isPassHiddenFirstField ? 'password' : 'text'}
          register={register}
          required
        />
        <RevealText onClick={onRevealTextFirstFieldClick}>
          {isPassHiddenFirstField ? 'Reveal password' : 'Hide password'}
        </RevealText>
        <ErrorText>{errors.password?.message}</ErrorText>
      </FormItem>

      <FormItem>
        <CustomInput
          name="confirmPassword"
          label="confirm password"
          type={isPassHiddenSecondField ? 'password' : 'text'}
          register={register}
          required
        />
        <RevealText onClick={onRevealTextSecondFieldClick}>
          {isPassHiddenSecondField ? 'Reveal password' : 'Hide password'}
        </RevealText>
        <ErrorText>{errors.confirmPassword?.message}</ErrorText>
      </FormItem>

      <StyledButton>Register</StyledButton>
    </Form>
  );
};
