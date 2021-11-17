import React from 'react';

import styled from 'styled-components';

import { Flex } from '../../../../styled/Flex';
import { SubTitle } from '../styled/SubTitle';

const Wrapper = styled(Flex)`
  width: 50%;
  padding-top: calc(9vw + 50px);
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: #2a364e;
  font-weight: 300;
`;

const Container = styled.div`
  max-width: 480px;
`;

export const About = () => (
  <Wrapper align="center" justify="center" direction="column">
    <Container>
      <SubTitle marginBottom="30px">About the park camper tour</SubTitle>
      <Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
          incidunt ipsam nam reprehenderit veritatis. Cumque incidunt magnam quasi
          reprehenderit soluta. Aperiam dolores esse et eum facilis fugit hic illum
          incidunt inventore ipsa labore libero magni maxime minima natus, nostrum odio
          omnis perferendis quod repellat, reprehenderit sapiente unde voluptatum.
          Accusantium animi delectus deserunt distinctio officiis, optio reiciendis
          temporibus tenetur.
        </p>
      </Text>
    </Container>
  </Wrapper>
);
