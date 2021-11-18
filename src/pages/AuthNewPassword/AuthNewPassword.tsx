import React, { useState } from 'react';

import styled from 'styled-components';

import { CustomInput } from '../../components/UI';
import { Button } from '../../styled/Button';
import { Flex } from '../../styled/Flex';
import { RevealText } from '../Auth/Auth';
import { AuthBox } from '../Auth/AuthBox';
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
  const [isPassHidden, setIsPassHidden] = useState(true);

  const onRevealTextClick = () => setIsPassHidden(!isPassHidden);

  return (
    <AuthBox>
      <Wrapper direction="column">
        <StyledTitle margin="0 0 35px 0">Create new password</StyledTitle>
        <CustomInput name="password" label="password" />
        <RevealText onClick={onRevealTextClick}>
          {isPassHidden ? 'Reveal password' : 'Hide password'}
        </RevealText>
        <StyledText margin="-30px 0 0 0 ">Please enter your new password</StyledText>
        <StyledButton>Create new password</StyledButton>
      </Wrapper>
    </AuthBox>
  );
};

export default AuthNewPassword;
