import styled from 'styled-components';

export const HomeContainer = styled.section`
  max-width: 81.25rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto 1.5rem auto;
  padding-inline: 1rem;
`;

export const HomeHeader = styled.header`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  > div {
    flex: 1;
    display: flex;
    gap: 0.375rem;
  }
`;

export const ProductsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.125rem 0.375rem;

  background-color: ${({ theme }) => theme.colors['purple-100']};

  border-radius: 0.25rem;
`;
