import styled from 'styled-components';

interface IAvatar {
  width?: string;
  height?: string;
}

export const Avatar = styled.img<IAvatar>`
  width: ${({ width }) => width || '60px'};
  height: ${({ height }) => height || '60px'};
  object-fit: cover;
  border-radius: 50%;
`;
