import React, { useState } from 'react';

import styled from 'styled-components';

import { Button } from '../../styled/Button';

import { AuthBox } from './AuthBox';
import { AuthForgot } from './AuthForgot';
import { AuthMain } from './AuthMain';

export const Title = styled.h2`
  margin-bottom: 25px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 30px;
`;

export const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
  padding: 15px 120px;
  margin-bottom: 25px;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const RevealText = styled.span`
  display: block;
  text-align: end;
  font-size: 10px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.mainHover};
  }
`;

export const Auth = () => {
  const [isForgot, setIsForgot] = useState(false);

  const handleSetIsForgotClick = () => setIsForgot(!isForgot);

  return (
    <AuthBox>
      {isForgot ? (
        <AuthForgot onSetIsForgotClick={handleSetIsForgotClick} />
      ) : (
        <AuthMain onSetIsForgotClick={handleSetIsForgotClick} />
      )}
    </AuthBox>
  );
};
