import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles';

const theme = {
  defaultFontSize: "16px",
  defaultFontFamily: "sans-serif",
  defaultBackgroundColor: "#111",

  logoFont: "'Keania One', cursive",
  defaultFont: "'Noto Sans', sans-serif",

  richBlack: "hsl(209, 51%, 12%)",
  darkBlue: "hsl(203, 94%, 12%)",
  darkPurple: "hsl(327, 89%, 24%)",
  lightGreen: "hsl(125, 71%, 68%)",
  softOrange: "hsl(13, 77%, 52%)",
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
