import styled from "styled-components";
import fundo from "../../assets/fundo.jpg"

export const Wrapper = styled.div`
    background-color: ${({theme})=> theme.gray6};
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    color: ${({theme})=> theme.gray1};

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    img{ 
        width: 18rem;
        margin: -5rem 0;
    }

    p {
        font-weight: bold;
        font-size: 1.5rem;
    }

    h1 {
        font-size: 3rem;
        color: ${({theme})=> theme.yellow4};
    }
`;