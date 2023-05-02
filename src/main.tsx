import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';

//Theme for webpage
import { theme } from './styles/Theme';

//Error Handling for react-router-dom
import ErrorPage from './components/errors/ErrorPage';

import { AppProvider } from './components/context/AppContext';

//Importing Routes:
import Router from './routes/Router';
import Homepage from './routes/Homepage';
import GetStats from './routes/GetStats';
import Result from './routes/Results';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>,
)
