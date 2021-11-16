import styled from 'styled-components';

interface IProps {
  marginRight?: string;
}

export const Avatar = styled.img<IProps>`
  width: ${({ width }) => width || '35px'};
  height: ${({ height }) => height || '35px'};
  border-radius: 50%;
  margin-right: ${({ marginRight }) => marginRight || '0'};
`;
