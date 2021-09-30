import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from '~/routes';

import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/Theme/styles';

import { AuthProvider } from '~/context/AuthContext';
import PageProvider from '~/context/PageContext';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <AuthProvider>
        <PageProvider>
          <ThemeProvider theme={defaultTheme}>
            <Routes />
          </ThemeProvider>
        </PageProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
);

export default App;
