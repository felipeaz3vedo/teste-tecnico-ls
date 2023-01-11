import styled from 'styled-components';

export const PlataformContainer = styled.section`
  max-width: 81.25rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto 1.5rem auto;
  padding-inline: 1rem;
`;

export const PlataformHeader = styled.header`
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
