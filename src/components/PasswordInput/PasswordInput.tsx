import React, { useState } from 'react';

import styled from 'styled-components';

import sprite from '../../icons.svg';
import { ButtonReset } from '../../styled/ButtonReset';
import { Svg } from '../../styled/Svg';
import { CustomInput } from '../UI';

interface IPasswordInput {
  name: string;
  label: string;
  register: any;
}

interface IStyledButtonProps {
  isActive: boolean;
}

const Wrapper = styled.div`
  position: relative;
`;

const StyledButton = styled(ButtonReset)<IStyledButtonProps>`
  position: absolute;
  top: 15px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ isActive, theme }) =>
      isActive ? theme.colors.main : theme.colors.secondaryDark};
  }
`;

const PasswordInput: React.FC<IPasswordInput> = ({ name, label, register }) => {
  const [isPassHidden, setIsPassHidden] = useState(true);

  const onButtonClick = () => setIsPassHidden(!isPassHidden);

  return (
    <Wrapper>
      <CustomInput
        register={register}
        required
        name={name}
        label={label}
        type={isPassHidden ? 'password' : 'text'}
      />
      <StyledButton type="button" onClick={onButtonClick} isActive={isPassHidden}>
        <Svg>
          <use href={`${sprite}#icon-eye`} />
        </Svg>
      </StyledButton>
    </Wrapper>
  );
};

export default PasswordInput;
