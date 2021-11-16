import React from 'react';

import styled from 'styled-components';

import { About } from './About';
import { ShortDescription } from './ShortDescription';

import { Flex } from 'styled/Flex';

const TourDetailsWrapper = styled(Flex)`
  margin-top: -40px;
`;

export const TourDetails = () => (
  <TourDetailsWrapper>
    <ShortDescription />
    <About />
  </TourDetailsWrapper>
);
