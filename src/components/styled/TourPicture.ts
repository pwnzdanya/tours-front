import styled from 'styled-components';

type ITourPictureProps = {
  height: any;
};

export const TourPicture = styled.div<ITourPictureProps>`
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 9vw), 0 100%);
  height: ${props => props.height};
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right bottom, #1833a3, #99a306);
  opacity: 0.7;
`;
