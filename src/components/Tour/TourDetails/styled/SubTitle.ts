import styled from 'styled-components';

interface IProps {
  marginBottom?: string;
}

export const SubTitle = styled.h3<IProps>`
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  font-size: 20px;
  font-weight: 500;
  background-image: linear-gradient(to right bottom, #1833a3, #99a306);
  -webkit-background-clip: text;
  text-transform: uppercase;
`;
