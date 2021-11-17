import React from 'react';

import styled from 'styled-components';

import sprite from '../../../../icons.svg';
import { Flex } from '../../../../styled/Flex';
import { Svg } from '../../../../styled/Svg';
import { Text } from '../../../../styled/Text';
import { Avatar } from '../../../styled/Avatar';
import { SubTitle } from '../styled/SubTitle';

const Wrapper = styled(Flex)`
  width: 50%;
  padding-top: calc(9vw + 50px);
  padding-bottom: 9vw;
  background-color: #ecebeb;
`;

const Container = styled.div`
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

export const BoldText = styled(Text)`
  margin-right: 12px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const TextStyled = styled(Text)`
  color: #0a0a0a;
`;

export const SvgStyled = styled(Svg)`
  margin-right: 7px;
`;

export const Overview = () => (
  <Wrapper justify="center" align="center" direction="column">
    <Container>
      <SubTitle marginBottom="25px">quick facts</SubTitle>
      <List>
        <Item>
          <Flex align="center">
            <SvgStyled>
              <use href={`${sprite}#icon-map-pin`} />
            </SvgStyled>
            <BoldText>next date</BoldText>
            <TextStyled>August 2021</TextStyled>
          </Flex>
        </Item>
        <Item>
          <Flex align="center">
            <SvgStyled>
              <use href={`${sprite}#icon-user`} />
            </SvgStyled>
            <BoldText>participants</BoldText>
            <TextStyled>15 people</TextStyled>
          </Flex>
        </Item>
        <Item>
          <Flex align="center">
            <SvgStyled>
              <use href={`${sprite}#icon-star`} />
            </SvgStyled>
            <BoldText>Rating</BoldText>
            <TextStyled>4.7 / 5</TextStyled>
          </Flex>
        </Item>
        <Item>
          <Flex align="center">
            <SvgStyled>
              <use href={`${sprite}#icon-map-pin`} />
            </SvgStyled>
            <BoldText>next date</BoldText>
            <TextStyled>August 2021</TextStyled>
          </Flex>
        </Item>
      </List>
    </Container>

    <Container>
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
            <TextStyled>Orest</TextStyled>
          </Flex>
        </Item>
        <Item>
          <Flex align="center">
            <Avatar
              src="https://www.thewikifeed.com/wp-content/uploads/2021/07/margot-robbie-1.jpg"
              marginRight="7px"
            />
            <BoldText>Tour guide</BoldText>
            <TextStyled>Andrew</TextStyled>
          </Flex>
        </Item>
        <Item>
          <Flex align="center">
            <Avatar
              src="https://www.thewikifeed.com/wp-content/uploads/2021/07/margot-robbie-1.jpg"
              marginRight="7px"
            />
            <BoldText>Tour guide</BoldText>
            <TextStyled>Kate</TextStyled>
          </Flex>
        </Item>
      </List>
    </Container>
  </Wrapper>
);
