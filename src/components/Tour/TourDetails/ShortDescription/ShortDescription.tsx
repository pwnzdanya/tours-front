import React from 'react';

import styled from 'styled-components';

import sprite from '../../../../icons.svg';
import { Flex } from '../../../../styled/Flex';
import { Svg } from '../../../../styled/Svg';
import { Avatar } from '../../../styled/Avatar';
import { SubTitle } from '../styled/SubTitle';

const ShortDescriptionWrapper = styled(Flex)`
  width: 50%;
  padding-top: 100px;
  margin-top: -50px;
  padding-bottom: 60px;
  background-color: #f1f1f1;
`;

const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 55px;
  }
`;

const List = styled.ul``;
const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const BoldText = styled.span`
  margin-right: 12px;
  text-transform: uppercase;
  font-weight: 600;
`;

const Text = styled.span`
  color: #949494;
  font-size: 14px;
  font-weight: 300;
`;

export const ShortDescription = () => (
  <ShortDescriptionWrapper justify="center" align="center" direction="column">
    <Wrapper>
      <SubTitle marginBottom="25px">quick facts</SubTitle>
      <List>
        <Item>
          <Flex align="center">
            <Svg>
              <use href={`${sprite}#icon-map-pin`} />
            </Svg>
            <BoldText>next date</BoldText>
            <Text>August 2021</Text>
          </Flex>
        </Item>
        <Item>
          <Flex align="center">
            <Svg>
              <use href={`${sprite}#icon-user`} />
            </Svg>
            <BoldText>participants</BoldText>
            <Text>15 people</Text>
          </Flex>
        </Item>
        <Item>
          <Flex align="center">
            <Svg>
              <use href={`${sprite}#icon-star`} />
            </Svg>
            <BoldText>Rating</BoldText>
            <Text>4.7 / 5</Text>
          </Flex>
        </Item>
        <Item>
          <Flex align="center">
            <Svg>
              <use href={`${sprite}#icon-map-pin`} />
            </Svg>
            <BoldText>next date</BoldText>
            <Text>August 2021</Text>
          </Flex>
        </Item>
      </List>
    </Wrapper>

    <Wrapper>
      <SubTitle marginBottom="25px">Your tour guides</SubTitle>
      <List>
        {/* map */}
        <Item>
          <Flex align="center">
            <Avatar
              src="https://www.thewikifeed.com/wp-content/uploads/2021/07/margot-robbie-1.jpg"
              marginRight="7px"
            />
            <BoldText>Lead guide</BoldText>
            <Text>Orest</Text>
          </Flex>
        </Item>
        <Item>
          <Flex align="center">
            <Avatar
              src="https://www.thewikifeed.com/wp-content/uploads/2021/07/margot-robbie-1.jpg"
              marginRight="7px"
            />
            <BoldText>Tour guide</BoldText>
            <Text>Andrew</Text>
          </Flex>
        </Item>
        <Item>
          <Flex align="center">
            <Avatar
              src="https://www.thewikifeed.com/wp-content/uploads/2021/07/margot-robbie-1.jpg"
              marginRight="7px"
            />
            <BoldText>Tour guide</BoldText>
            <Text>Kate</Text>
          </Flex>
        </Item>
      </List>
    </Wrapper>
  </ShortDescriptionWrapper>
);
