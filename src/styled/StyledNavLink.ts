import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IStyledNavLink {
  fontSize?: string;
}

export const StyledNavLink = styled(NavLink)<IStyledNavLink>`
  font-size: ${({ fontSize }) => fontSize || '15px'};
  line-height: 1.8;
  color: ${({ color, theme }) => color || theme.colors.main};
  font-weight: 500;

  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.2s ease;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.main};
  }
`;
