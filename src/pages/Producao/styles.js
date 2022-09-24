import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    h1 > small {
        font-size: 0.8rem;
        font-weight: 400;
    }
`;

export const FlexRow = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const Separator = styled.div`
    height: 0.5px;
    background: gray;
    margin: 1.5rem 0;
`;

export const ButtonFixed = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 5%;
    right: 5%;

    width: 3.5rem;
    height: 3.5rem;
    border: 0;
    border-radius: 50%;

    background-color: ${({theme})=> theme.green5};
    color: ${({theme})=> theme.gray1};

    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover{
        opacity: 0.8;
    }
`;