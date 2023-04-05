import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyles';

const theme = {
  defaultFontSize: "16px",
  defaultFontFamily: "sans-serif",
  defaultBackgroundColor: "#111",
  defaultFontColor: "#fff",

  logoFont: "'Keania One', cursive",
  defaultFont: "'Noto Sans', sans-serif",

  richBlack: "hsl(209, 51%, 12%)",
  darkBlue: "hsl(203, 94%, 12%)",
  darkPurple: "hsl(327, 89%, 24%)",
  lightGreen: "hsl(125, 71%, 68%)",
  softOrange: "hsl(13, 77%, 52%)",

  magnolia: "hsl(273, 33%, 94%)",
  mayaBlue: "hsl(203, 93%, 67%)",

  lighterGreen: "hsl(125, 88%, 79%)",
  darkGreen: "hsl(125, 100%, 32%)",

  barFill: "#000",
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
