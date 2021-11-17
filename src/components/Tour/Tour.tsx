import React from 'react';

import styled from 'styled-components';

import { Cta } from './Cta';
import { TourDetails } from './TourDetails';
import { TourHeader } from './TourHeader';
import { TourPictures } from './TourPictures';
import { TourReviews } from './TourReviews';

const Wrapper = styled.section``;

export const Tour = () => (
  <Wrapper>
    <TourHeader />
    <TourDetails />
    <TourPictures />
    <TourReviews />
    <Cta />
  </Wrapper>
);
