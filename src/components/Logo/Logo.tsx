import React from 'react';

import styled from 'styled-components';

import img from './logofull.png';

const Wrapper = styled.div`
  width: 120px;
  height: 100px;
  margin-right: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const Logo = () => (
  <Wrapper>
    <Img src={img} alt="logo" />
  </Wrapper>
);
