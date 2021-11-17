import React from 'react';

import styled from 'styled-components';

import sprite from '../../../icons.svg';
import { Text } from '../../../styled/Text';

import { Svg } from 'styled/Svg';

interface ICardListProps {
  width?: string;
}

const CardBody = styled.div`
  padding: 15px 30px;
`;

const Subtitle = styled.h5`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const CardList = styled.ul<ICardListProps>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ width }) => width || '100%'};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const CardItem = styled.li`
  width: 50%;
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

const TextStyled = styled(Text)`
  margin-bottom: 15px;
  font-style: italic;
  color: #c7c7c7;
`;

const StyledSvg = styled(Svg)`
  margin-right: 7px;
  margin-top: -2px;
`;

export const TourCardBody = () => (
  <CardBody>
    <Subtitle>7-day tour</Subtitle>
    <TextStyled>
      <p>Exploring the jaw-dropping US east coast by foot and by boad</p>
    </TextStyled>
    <CardList>
      <CardItem>
        <StyledSvg>
          <use href={`${sprite}#icon-map-pin`} />
        </StyledSvg>
        Lviv, Ukraine
      </CardItem>
      <CardItem>
        <StyledSvg>
          <use href={`${sprite}#icon-calendar`} />
        </StyledSvg>
        June 2021
      </CardItem>
      <CardItem>
        <StyledSvg>
          <use href={`${sprite}#icon-flag`} />
        </StyledSvg>
        4 stops
      </CardItem>
      <CardItem>
        <StyledSvg>
          <use href={`${sprite}#icon-user`} />
        </StyledSvg>
        15 people
      </CardItem>
    </CardList>
  </CardBody>
);
