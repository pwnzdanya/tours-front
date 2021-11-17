import React from 'react';

import styled from 'styled-components';

import { Button } from '../../../styled/Button';
import { Flex } from '../../../styled/Flex';
import { Text } from '../../../styled/Text';
import { Logo } from '../../Logo';

const CtaStyled = styled(Flex)``;

const CtaWrapper = styled(Flex)`
  padding: 45px 25px;
  width: 100%;
  max-width: 800px;
  border-radius: 6px;
  background-color: #ecebeb;
  font-weight: 500;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;

const ButtonStyled = styled(Button)`
  padding: 15px 20px;
  margin-top: 13px;
`;

const Description = styled.div``;

export const Cta = () => (
  <CtaStyled justify="center">
    <CtaWrapper justify="space-between" align="center">
      <Logo />
      <Description>
        <Title>What are you waiting for?</Title>
        <Text>
          <p>14 days. 1 adventure. Infinite memories. Make it your today!</p>
        </Text>
      </Description>
      <ButtonStyled>Book tour now</ButtonStyled>
    </CtaWrapper>
  </CtaStyled>
);
