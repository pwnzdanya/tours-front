import styled from 'styled-components';

export const Svg = styled.svg`
  width: ${props => props.width || '20px'};
  height: ${props => props.height || '20px'};
  fill: ${props => props.fill || '#c4c4c4'};
  margin-right: 7px;
`;
