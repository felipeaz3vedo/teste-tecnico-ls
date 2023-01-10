import styled, { css } from 'styled-components';

interface HeaderWrapProps {
  isLoged?: boolean;
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 4.5rem;

  background-color: ${({ theme }) => theme.colors['gray-50']};
`;

export const HeaderWrap = styled.div<HeaderWrapProps>`
  flex: 1;
  display: flex;
  padding-inline: 1rem;
  justify-content: space-between;
  margin-inline: auto;
  max-width: 81.25rem;

  ${({ isLoged }) =>
    isLoged === false &&
    css`
      justify-content: flex-end;
    `}
`;

export const UserImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;

  background-color: ${({ theme }) => theme.colors['purple-600']};

  border-radius: 50%;

  > p {
    color: white;

    font-size: 20px;
    font-weight: 500;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
