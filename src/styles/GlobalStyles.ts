import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        min-height: 100%;
        font-size: ${props => props.theme.defaultFontSize};
        font-family: ${props => props.theme.defaultFont};
        background-color: ${props => props.theme.background};
    }

    button,
    input[type=button] {
        outline: none;
        cursor: pointer;
    }

    button:hover,
    input:focus,
    input:hover {
        outline: none;
    }

    a,
    Link {
        text-decoration: none;
        color: #fff;
    }

    ul {
        list-style: none;
    }
`;