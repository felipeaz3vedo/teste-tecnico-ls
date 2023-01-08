import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    color: ${({ theme }) => theme.colors['gray-900']};
    -webkit-font-smoothing: antialiased;
  }

  a, button {
    border: none;
    cursor: pointer;
  }

  a {
  text-decoration: none;
  }
`;
