import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;

  table {
    flex: 1;
    min-width: 37.5rem;
    overflow: auto;

    border-collapse: collapse;
    border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  }

  td,
  th {
    border-bottom: 1px solid ${({ theme }) => theme.colors['gray-200']};

    text-align: start;
  }

  th {
    padding: 0.5rem 1rem;

    background-color: ${({ theme }) => theme.colors['gray-100']};
  }

  td {
    padding: 0.875rem 1rem;
  }

  thead h2 {
    text-transform: uppercase;
  }

  td:nth-child(2) {
    min-width: 18.75rem;
    white-space: nowrap;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      color: ${({ theme }) => theme.colors['purple-600']};

      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors['purple-700']};
      }
    }
  }
`;
