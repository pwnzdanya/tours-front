import React from 'react';

import Rate from 'rc-rate';
import styled from 'styled-components';

import 'rc-rate/assets/index.css';
import { Avatar } from '../../../styled/Avatar';
import { BoldText } from '../../TourDetails/ShortDescription/ShortDescription';

import { Flex } from 'styled/Flex';

interface IRate {
  size: string;
}

const ReviewStyled = styled.article`
  width: 290px;
  padding: 22px 35px;
  border-radius: 4px;
  background-color: pink;
  box-shadow: 3px 8px 8px rgba(0, 0, 0, 0.5);
`;

const ReviewAuthor = styled(Flex)`
  margin-bottom: 10px;
`;

const Text = styled.div`
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.6;
`;

const StyledRate = styled(Rate)<IRate>`
  width: 100%;
  text-align: center;

  &.rc-rate {
    font-size: ${({ size }) => size}px;
  }
`;

const TextPosted = styled.span`
  display: block;
  text-align: end;
  margin-top: 5px;
  font-size: 11px;
  font-style: italic;
  color: #c1c1c1;
`;

export const Review = () => (
  <ReviewStyled>
    <ReviewAuthor align="center" justify="center">
      <Avatar
        src="https://www.thewikifeed.com/wp-content/uploads/2021/07/margot-robbie-1.jpg"
        marginRight="7px"
      />
      <BoldText>Alexey Korzh</BoldText>
    </ReviewAuthor>
    <Text>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur
        culpa ducimus, nisi non quaerat repudiandae soluta tenetur velit voluptates!
      </p>
    </Text>
    <StyledRate size="24" value={4.5} allowHalf />
    <TextPosted>posted 23.10.2020</TextPosted>
  </ReviewStyled>
);
