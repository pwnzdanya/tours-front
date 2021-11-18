import React from 'react';

import sprite from '../../icons.svg';

import { Svg } from 'styled/Svg';

interface ILogoProps {
  width: string;
  height: string;
}

export const Logo: React.FC<ILogoProps> = ({ width, height, ...props }) => (
  <Svg width={width} height={height} {...props}>
    <use href={`${sprite}#icon-logo`} />
  </Svg>
);
