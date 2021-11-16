import React from 'react';

import styled from 'styled-components';

import { Button } from 'styled/Button';
import { Flex } from 'styled/Flex';

const CardFooter = styled.div`
  padding: 15px 30px;
  background-color: #dfdddd;
  border-top: 1px solid #f1f1f1;
`;

const Item = styled.div`
  &:not(:last-child) {
    margin-bottom: 6px;
  }

  span {
    font-weight: 700;
    margin-right: 5px;
  }
`;

export const TourCardFooter = () => (
  <CardFooter>
    <Flex justify="space-between" align="center">
      <div>
        <Item>
          <span>$497</span>
          per person
        </Item>
        <Item>
          <span>4.8</span>
          rating (5)
        </Item>
      </div>
      <Button>Details</Button>
    </Flex>
  </CardFooter>
);
