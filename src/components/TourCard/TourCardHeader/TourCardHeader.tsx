import React from 'react';

import styled from 'styled-components';

import { TourCardPicture } from './TourCardPicture';

export const CardHeader = styled.div`
  position: relative;
`;

export const TourCardHeader = () => (
  <CardHeader>
    <TourCardPicture />
  </CardHeader>
);
