import styled from 'styled-components';

interface ITextProps {
  fontSize?: string;
}

export const Text = styled.div<ITextProps>`
  font-size: ${({ fontSize }) => fontSize || '15px'};
  line-height: 1.8;
  color: ${({ color, theme }) => color || theme.colors.main};
  font-weight: 300;
`;
