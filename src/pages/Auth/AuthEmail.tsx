import React from 'react';

import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import sprite from '../../icons.svg';
import { Flex } from '../../styled/Flex';
import { Svg } from '../../styled/Svg';

import { AuthBox } from './AuthBox';
import { StyledText, StyledTitle } from './AuthForgot';

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

const AuthEmail = () => {
  const { state } = useLocation();

  return (
    <AuthBox>
      <Wrapper justify="center" direction="column" align="center">
        <Circle justify="center" align="center">
          <Svg width="100%" height="50%">
            <use href={`${sprite}#icon-message`} />
          </Svg>
        </Circle>
        <StyledTitle margin="0 0 20px 0">Check Email</StyledTitle>
        <StyledText textAlign="center">
          We have sent message with instructions to {state}
        </StyledText>
      </Wrapper>
    </AuthBox>
  );
};

export default AuthEmail;
