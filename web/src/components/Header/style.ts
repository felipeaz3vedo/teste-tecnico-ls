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
  width: 2.5rem;
  height: 2.5rem;

  background-color: black;

  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
