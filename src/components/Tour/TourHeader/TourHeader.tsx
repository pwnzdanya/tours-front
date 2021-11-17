import React from 'react';

import styled from 'styled-components';

import sprite from '../../../icons.svg';
import { Flex } from '../../../styled/Flex';
import { Overlay } from '../../../styled/Overlay';
import { Svg } from '../../../styled/Svg';
import { TourPicture } from '../../styled/TourPicture';
import { CardItem, CardList } from '../../TourCard/TourCardBody/TourCardBody';

const Wrapper = styled.section``;

const PictureTour = styled.div`
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  height: 100%;
`;

const Info = styled(Flex)`
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
  <Wrapper>
    <TourPicture height="500px">
      <PictureTour
        style={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp8910482.jpg")`,
        }}
      />
      <Overlay />
      <Info justify="center" align="center" direction="column">
        <Title>The Forest Hiker</Title>
        <CardList width="300px">
          <CardItem>
            <Svg fill="white">
              <use href={`${sprite}#icon-clock`} />
            </Svg>
            10 days
          </CardItem>
          <CardItem>
            <Svg fill="white">
              <use href={`${sprite}#icon-map-pin`} />
            </Svg>
            Lviv, Ukraine
          </CardItem>
        </CardList>
      </Info>
    </TourPicture>
  </Wrapper>
);
