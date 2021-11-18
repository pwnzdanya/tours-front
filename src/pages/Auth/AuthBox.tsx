import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { Logo } from '../../components/Logo';
import { Flex } from '../../styled/Flex';

interface IAuthMain {
  children: ReactElement;
}

const Wrapper = styled(Flex)`
  height: 100vh;
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

export const AuthBox: React.FC<IAuthMain> = ({ children }) => (
  <Wrapper justify="center" align="center">
    <Container>
      <StyledLogo width="100%" height="75px" />
      {children}
    </Container>
  </Wrapper>
);
