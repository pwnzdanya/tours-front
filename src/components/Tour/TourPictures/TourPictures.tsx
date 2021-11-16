import React from 'react';

import styled from 'styled-components';

interface ITourPicturesImgProps {
  padding?: string;
}

const TourPicturesStyled = styled.div`
  display: flex;
  height: 400px;
  clip-path: polygon(0 9vw, 100% 0, 100% calc(100% - 9vw), 0 100%);
  margin-top: calc(0px - 9vw);
  position: relative;
  z-index: 1000;
`;

const TourPicturesBox = styled.div``;

const TourPicturesImg = styled.img<ITourPicturesImgProps>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: ${({ padding }) => padding || '0'};
`;

export const TourPictures = () => (
  <TourPicturesStyled>
    <TourPicturesBox>
      <TourPicturesImg
        src="https://blog.airbaltic.com/wp-content/uploads/2020/01/Lviv.jpg"
        alt=""
        padding="15% 0 0 0"
      />
    </TourPicturesBox>
    <TourPicturesBox>
      <TourPicturesImg
        src="https://blog.airbaltic.com/wp-content/uploads/2020/01/Lviv.jpg"
        alt=""
        padding="0 0 15% 0"
      />
    </TourPicturesBox>
    <TourPicturesBox>
      <TourPicturesImg
        src="https://blog.airbaltic.com/wp-content/uploads/2020/01/Lviv.jpg"
        alt=""
        padding="0 0 27% 0"
      />
    </TourPicturesBox>
  </TourPicturesStyled>
);
