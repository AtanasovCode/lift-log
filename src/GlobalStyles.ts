import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        min-height: 100vh;
        font-size: ${props => props.theme.defaultFontSize};
        font-family: ${props => props.theme.defaultFontFamily};
        background-color: ${props => props.theme.defaultBackgroundColor};
    }

    button,
    input[type=button] {
        border: none;
        outline: none;
    }

    button:hover,
    input:focus,
    input:hover {
        outline: none;
    }
`;