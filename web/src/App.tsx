import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { UserContextDataProvider } from './context/UserDataContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <UserContextDataProvider>
          <Router />
        </UserContextDataProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
