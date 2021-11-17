import React from 'react';

import Slider from 'react-slick';
import styled from 'styled-components';

import sprite from '../../../icons.svg';
import { Svg } from '../../../styled/Svg';

import { Review } from './Review';

import { Flex } from 'styled/Flex';

const TourReviewsStyled = styled.section`
  position: relative;
  margin-top: calc(0px - 9vw);
  margin-bottom: 60px;
  padding-top: calc(65px + 9vw);
  padding-bottom: calc(40px + 9vw);
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.secondary};

  clip-path: polygon(0 9vw, 100% 0, 100% calc(100% - 9vw), 0 100%);
`;

const SliderStyled = styled(Slider)`
  width: 75%;
  .slick-next {
    right: -38px;
  }

  .slick-prev {
    left: -35px;
  }
`;

export const TourReviews = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: (
      <Svg>
        <use href={`${sprite}#icon-arrow-left`} />
      </Svg>
    ),
    nextArrow: (
      <Svg>
        <use href={`${sprite}#icon-arrow-right`} />
      </Svg>
    ),
  };

  return (
    <TourReviewsStyled>
      <Flex justify="center">
        <SliderStyled {...settings}>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </SliderStyled>
      </Flex>
    </TourReviewsStyled>
  );
};
