import styled from 'styled-components';

type ITourPictureProps = {
  height: any;
  cardEagle?: boolean;
};

export const TourPicture = styled.div<ITourPictureProps>`
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 9vw), 0 100%);
  height: ${props => props.height};

  ${props =>
    props.cardEagle &&
    `
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3vw), 0 100%);
  `}
`;
