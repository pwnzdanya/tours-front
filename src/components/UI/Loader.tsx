import React from 'react';

import styled, { keyframes } from 'styled-components';

import { Logo } from '../Logo';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  position: relative;
  z-index: 999;
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  pointer-events: all;
`;

export const Loader = () => (
  <Rotate>
    <Logo width="85px" height="85px" />
  </Rotate>
);
