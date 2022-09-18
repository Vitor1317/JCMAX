import styled from "styled-components";

export const ReciboContainer = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    background-color: ${({theme})=> theme.gray9};
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
`;