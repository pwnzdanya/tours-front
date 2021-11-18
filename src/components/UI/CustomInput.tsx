import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import styled from 'styled-components';

type CustomInputType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  // eslint-disable-next-line react/require-default-props
  register?: any;
  label: string;
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  background: none;
  font-size: 17px;
  padding: 28px 10px 10px 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.main};

  &:focus {
    outline: transparent;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: 2px;
    font-size: 12px;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 10px;
  top: 17px;
  color: ${({ theme }) => theme.colors.main};
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  transition: 0.2s ease all;
`;

export const CustomInput: React.FC<CustomInputType> = ({
  label,
  name,
  required,
  register,
  ...inputProps
}) => (
  <InputWrapper>
    <Input {...register(name, { required })} {...inputProps} required />
    <Label>{label}</Label>
  </InputWrapper>
);
