import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: 0.6px;
    }

    input, button {
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    input{
        outline: 0;
    }
`;