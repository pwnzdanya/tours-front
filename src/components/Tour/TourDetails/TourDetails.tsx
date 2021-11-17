import React from 'react';

import styled from 'styled-components';

import { About } from './About';
import { Overview } from './Overview';

import { Flex } from 'styled/Flex';

const Wrapper = styled.section`
  margin-top: -9vw;
`;

const Container = styled(Flex)``;

export const TourDetails = () => (
  <Wrapper>
    <Container>
      <Overview />
      <About />
    </Container>
  </Wrapper>
);
