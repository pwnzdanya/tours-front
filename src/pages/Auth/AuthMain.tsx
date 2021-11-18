import React, { useState } from 'react';

import styled from 'styled-components';

import { Button } from '../../styled/Button';
import { Flex } from '../../styled/Flex';
import { Text } from '../../styled/Text';

import { ButtonWrapper, Title } from './Auth';
import AuthSignIn from './AuthSignIn';
import { AuthSignUp } from './AuthSignUp';

interface IAuthMain {
  onSetIsForgotClick: () => void;
}

export const StyledText = styled(Text)`
  display: block;
  margin-bottom: 15px;
  text-align: center;
  color: #c4c4c4;
`;

export const TextWrapper = styled(Flex)`
  margin-bottom: 55px;
`;

export const Form = styled.form``;
export const FormItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

export const AuthMain: React.FC<IAuthMain> = ({ onSetIsForgotClick }) => {
  const [isRegistered, setIsRegistered] = useState(true);

  const onSignButtonClick = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <>
      <Title>{isRegistered ? 'Sign In' : 'Sign Up'}</Title>
      {isRegistered ? (
        <AuthSignIn onSetIsForgotClick={onSetIsForgotClick} />
      ) : (
        <AuthSignUp />
      )}
      <StyledText>
        {isRegistered ? `Don't have an account?` : 'Already have an account?'}
      </StyledText>
      <ButtonWrapper>
        <Button transp onClick={onSignButtonClick}>
          {isRegistered ? 'Sign Up' : 'Sign In'}
        </Button>
      </ButtonWrapper>
    </>
  );
};
