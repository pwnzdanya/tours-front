import styled, { css } from 'styled-components';

interface IButtonProps {
  error?: boolean;
  transp?: boolean;
}

export const Button = styled.button<IButtonProps>`
  padding: 8px 15px;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: transparent;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.mainHover};
  }

  &:disabled {
    opacity: 0.2;
    cursor: auto;
  }

  ${props =>
    props.error &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
      color: ${({ theme }) => theme.colors.secondary};

      &:hover {
        background-color: #d93c2c;
      }
    `}

  ${props =>
    props.transp &&
    css`
      padding: 0 3px;
      background-color: transparent;
      border-bottom: 2px solid ${({ theme }) => theme.colors.main};
      color: ${({ theme }) => theme.colors.main};
      font-weigh: 600;
      border-radius: 0;

      &:hover {
        background-color: transparent;
        color: #2e4166;
        border-color: #2e4166;
      }
    `}
`;
