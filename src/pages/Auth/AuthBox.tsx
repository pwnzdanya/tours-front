import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { Logo } from '../../components/Logo';
import { Button } from '../../styled/Button';
import { Flex } from '../../styled/Flex';
import { Text } from '../../styled/Text';

interface IAuthBox {
  children: ReactElement;
}

const Wrapper = styled(Flex)`
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 600px;
  min-height: 60vh;
  width: 100%;
  padding: 40px 25px;
  background-color: #fff;
  border-radius: 10px;
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 25px;
  margin-top: -10px;
`;

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

export const StyledText = styled(Text)`
  display: block;
  margin-bottom: 15px;
  text-align: center;
  color: #c4c4c4;
`;

export const TextWrapper = styled.div`
  margin-bottom: 55px;
  text-align: end;
`;

export const Form = styled.form``;
export const FormItem = styled.div`
  position: relative;
  margin-bottom: 30px;
`;
export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

export const AuthBox: React.FC<IAuthBox> = ({ children }) => (
  <Wrapper justify="center" align="center">
    <Container>
      <StyledLogo width="100%" height="75px" />
      {children}
    </Container>
  </Wrapper>
);
