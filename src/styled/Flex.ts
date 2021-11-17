import styled from 'styled-components';

interface IProps {
  justify?: 'space-between' | 'space-around' | 'space-evenly' | 'center' | 'flex-end';
  align?: 'center' | 'end' | 'stretch';
  direction?: 'column';
}

export const Flex = styled.div<IProps>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'normal'};
  align-items: ${({ align }) => align || 'start'};
  flex-direction: ${({ direction }) => direction || 'row'};
`;
