import React from 'react';

import styled from 'styled-components';

import { Overlay } from '../../../../styled/Overlay';
import { TourPicture } from '../../../styled/TourPicture';

export const CardPictureImage = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h3`
  z-index: 10;
  position: absolute;
  bottom: 30%;
  text-align: right;
  right: 5%;
  font-size: 23px;
  color: #fff;
  text-transform: uppercase;
`;

export const TourCardPicture = () => (
  <TourPicture cardEagle height="240px">
    <Overlay />
    <CardPictureImage src="https://s3.envato.com/files/243884909/preview.jpg" />
    <Title>The Forest Hiker</Title>
  </TourPicture>
);
