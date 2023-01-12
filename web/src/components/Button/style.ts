/* eslint-disable indent */
import styled, { css } from 'styled-components';

interface ButtonContainerProps {
  variant?: 'outline';

  color?: 'purple-600' | 'red-800' | 'gray-700';
}

export const ButtonContainer = styled.button.attrs(({ type }) => ({
  type: type || 'button',
}))<ButtonContainerProps>`
  display: flex;
  align-items: center;
  height: 2rem;
  gap: 0.5rem;
  padding: 0.375rem 1rem;

  background-color: ${({ theme, color }) => theme.colors[`${color ?? 'purple-600'}`]};

  border-radius: 0.125rem;
  transition: all 0.3s ease;

  p,
  svg {
    color: white;
  }

  &:hover {
    background-color: ${({ theme, color }) =>
      color === 'red-800' ? theme.colors['red-900'] : theme.colors['purple-700']};
  }

  &:active {
    transform: scale(0.98);
  }

  ${({ variant, color }) =>
    variant &&
    css`
      background-color: transparent;

      color: ${({ theme }) => theme.colors[`${color ?? 'purple-600'}`]};

      border: 1px solid ${({ theme }) => theme.colors[`${color ?? 'purple-600'}`]};

      p,
      svg {
        color: ${({ theme }) => theme.colors[`${color ?? 'purple-600'}`]};
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors[`${color ?? 'purple-600'}`]};

        p,
        svg {
          color: white;
        }
      }
    `}
`;
