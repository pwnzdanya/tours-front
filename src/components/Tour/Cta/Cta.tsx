import React from 'react';

import styled from 'styled-components';

import { Button } from '../../../styled/Button';
import { Flex } from '../../../styled/Flex';

const CtaStyled = styled(Flex)``;

const CtaWrapper = styled(Flex)`
  padding: 45px 25px;
  width: 100%;
  max-width: 800px;
  border-radius: 6px;
  background-color: pink;
  font-weight: 500;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Text = styled.div``;

const Logo = styled.div``;
const Description = styled.div``;

export const Cta = () => (
  <CtaStyled justify="center">
    <CtaWrapper justify="space-between" align="center">
      <Logo>LOGO V KRUGE</Logo>
      <Description>
        <Title>What are you waiting for?</Title>
        <Text>
          <p>14 days. 1 adventure. Infinite memories. Make it your today!</p>
        </Text>
      </Description>
      <Button>Book tour now</Button>
    </CtaWrapper>
  </CtaStyled>
);
