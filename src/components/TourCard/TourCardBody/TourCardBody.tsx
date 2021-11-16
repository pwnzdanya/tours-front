import React from 'react';

import styled from 'styled-components';

import sprite from '../../../icons.svg';

import { Svg } from 'styled/Svg';

interface ICardListProps {
  width?: string;
}

const CardBody = styled.div`
  padding: 15px 30px;
`;

const CardSubtitle = styled.h5`
  margin-bottom: 10px;
  font-weight: 700;
`;

const CardDescription = styled.div`
  margin-bottom: 15px;
  font-style: italic;
  color: #949494;
`;

export const CardList = styled.ul<ICardListProps>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ width }) => width || '100%'};
`;

export const CardItem = styled.li`
  width: 50%;
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const TourCardBody = () => (
  <CardBody>
    <CardSubtitle>7-day tour</CardSubtitle>
    <CardDescription>
      <p>Exploring the jaw-dropping US east coast by foot and by boad</p>
    </CardDescription>
    <CardList>
      <CardItem>
        <Svg>
          <use href={`${sprite}#icon-map-pin`} />
        </Svg>
        Lviv, Ukraine
      </CardItem>
      <CardItem>
        <Svg>
          <use href={`${sprite}#icon-calendar`} />
        </Svg>
        June 2021
      </CardItem>
      <CardItem>
        <Svg>
          <use href={`${sprite}#icon-flag`} />
        </Svg>
        4 stops
      </CardItem>
      <CardItem>
        <Svg>
          <use href={`${sprite}#icon-user`} />
        </Svg>
        15 people
      </CardItem>
    </CardList>
  </CardBody>
);
