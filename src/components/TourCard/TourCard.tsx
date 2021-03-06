import React, { ReactElement } from 'react';

import styled from 'styled-components';

import { TourCardBody } from './TourCardBody';
import { TourCardFooter } from './TourCardFooter';
import { TourCardHeader } from './TourCardHeader';

export const TourCardStyled = styled.article`
  width: 100%;
  max-width: 365px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  background-color: white;
  transition: 0.3s all;
`;

export const TourCard = (): ReactElement => (
  <TourCardStyled>
    <TourCardHeader />
    <TourCardBody />
    <TourCardFooter />
  </TourCardStyled>
);
