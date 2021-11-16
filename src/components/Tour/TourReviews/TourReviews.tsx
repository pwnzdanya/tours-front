import React from 'react';

import styled from 'styled-components';

import { Review } from './Review';

const TourReviewsStyled = styled.section`
  position: relative;
  margin-top: calc(0px - 9vw);
  margin-bottom: 100px;
  padding: calc(50px + 9vw) 0;
  position: relative;
  z-index: 1000;
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );

  clip-path: polygon(0 9vw, 100% 0, 100% calc(100% - 9vw), 0 100%);
`;

const Test = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(to right bottom, #1833a3, #99a306);
  opacity: 0.7;
  z-index: -1;
`;

const ReviewsWrapper = styled.div`
  padding: 20px 25px;
  display: grid;
  grid-column-gap: 20px;
  grid-auto-flow: column;
  overflow-x: scroll; 
   
    ::-webkit-scrollbar {
      width: 22px;
   }
  
    ::-webkit-scrollbar-track {
      background: transparent
    }

    ::-webkit-scrollbar-thumb {
      background-color: #fafafa;    
      border-radius: 6px;      
      border: 3px solid c4c4c4;  
    }
  }
`;

export const TourReviews = () => (
  <TourReviewsStyled>
    <Test />
    <ReviewsWrapper>
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
    </ReviewsWrapper>
  </TourReviewsStyled>
);
