import React from 'react';

import styled from 'styled-components';

import { Flex } from '../../../../styled/Flex';
import { SubTitle } from '../styled/SubTitle';

const AboutWrapper = styled(Flex)`
  padding: 50px 55px 0;
  width: 50%;
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: #c0c0c0;
`;

export const About = () => (
  <AboutWrapper align="center" justify="center" direction="column">
    <SubTitle marginBottom="30px">About the park camper tour</SubTitle>
    <Text>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
        incidunt ipsam nam reprehenderit veritatis. Cumque incidunt magnam quasi
        reprehenderit soluta. Aperiam dolores esse et eum facilis fugit hic illum incidunt
        inventore ipsa labore libero magni maxime minima natus, nostrum odio omnis
        perferendis quod repellat, reprehenderit sapiente unde voluptatum. Accusantium
        animi delectus deserunt distinctio officiis, optio reiciendis temporibus tenetur.
      </p>
    </Text>
  </AboutWrapper>
);
