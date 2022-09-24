import styled, { css } from "styled-components";

const modifiers = {
    "1":  css`${({theme})=> theme.yellow7}`,
    "2": css`${({theme})=> theme.green5}`,
    "3": css`${({theme})=> theme.blue5}`
}

export const ReciboContainer = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${({background})=> modifiers[background]};
    border-radius: 8px;

    h1 {
        margin-bottom: 1rem;
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 0;
        border-top: 0.5px solid ${({theme})=> theme.gray8};
    }

    &:last-child{
        border-top: 0.5px solid ${({theme})=> theme.gray8};
    }

    a {
        color: ${({theme})=> theme.gray1};
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
    }

    a:hover {
        color: #fff;
    }
`;