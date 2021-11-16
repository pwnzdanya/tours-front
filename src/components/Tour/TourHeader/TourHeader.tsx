import React from 'react';

import styled from 'styled-components';

import sprite from '../../../icons.svg';
import { Flex } from '../../../styled/Flex';
import { Svg } from '../../../styled/Svg';
import { Overlay, TourPicture } from '../../styled/TourPicture';
import { CardItem, CardList } from '../../TourCard/TourCardBody/TourCardBody';

const PictureTour = styled.div`
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  height: 100%;
`;

const TitleInfo = styled(Flex)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  color: #fff;
  font-weight: 600;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 38px;
`;

export const TourHeader = () => (
  <TourPicture height="500px">
    <Overlay />
    <PictureTour
      style={{
        backgroundImage: `url("https://s3.envato.com/files/243884909/preview.jpg")`,
      }}
    />
    <TitleInfo justify="center" align="center" direction="column">
      <Title>The Forest Hiker</Title>
      <CardList width="300px">
        <CardItem>
          <Svg>
            <use href={`${sprite}#icon-clock`} />
          </Svg>
          10 days
        </CardItem>
        <CardItem>
          <Svg>
            <use href={`${sprite}#icon-map-pin`} />
          </Svg>
          Lviv, Ukraine
        </CardItem>
      </CardList>
    </TitleInfo>
  </TourPicture>
);
