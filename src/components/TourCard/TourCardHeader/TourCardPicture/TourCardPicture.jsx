import React from 'react';

import styled from 'styled-components';

import { Overlay, TourPicture } from '../../../styled/TourPicture';

export const CardPictureImage = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const CardHeadingText = styled.h3`
  z-index: 10;
  position: absolute;
  bottom: 30%;
  right: 5%;
  font-size: 23px;
  font-weight: 300;
  text-align: right;
  color: #f5f5f5;
  text-transform: uppercase;
`;

export const TourCardPicture = () => (
  <TourPicture height="240px">
    <Overlay />
    <CardPictureImage src="https://s3.envato.com/files/243884909/preview.jpg" />
    <CardHeadingText>The Forest Hiker</CardHeadingText>
  </TourPicture>
);
