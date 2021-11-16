import React from 'react';

import styled from 'styled-components';

import { Cta } from './Cta';
import { TourDetails } from './TourDetails';
import { TourHeader } from './TourHeader';
import { TourPictures } from './TourPictures';
import { TourReviews } from './TourReviews';

const TourStyled = styled.section``;

export const Tour = () => (
  <TourStyled>
    <TourHeader />
    <TourDetails />
    <TourPictures />
    <TourReviews />
    <Cta />
  </TourStyled>
);
