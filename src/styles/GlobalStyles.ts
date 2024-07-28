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
        background-color: ${props => props.theme.background};
        font-family: ${props => props.theme.font};
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