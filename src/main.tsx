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

//Importing Routes:
import Homepage from './routes/Homepage';
import GetStats from './routes/GetStats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/get-stats",
    element: <GetStats />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
