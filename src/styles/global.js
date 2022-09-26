import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.color};
        font-family: 'Roboto', sans-serif;
        letter-spacing: 0.6px;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    input{
        outline: 0;
    }
`;