import styled from "styled-components";

export const InputContainer = styled.input`
    width: 4rem;
    height: 2rem;
    text-align: center;
    border: 1px solid ${({theme})=> theme.gray9};
    color: ${({theme})=> theme.color};
    background-color: ${({theme})=> theme.input};

    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
`;