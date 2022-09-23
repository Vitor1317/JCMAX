import styled from "styled-components";

export const InputContainer = styled.input`
    width: 4rem;
    height: 2rem;
    text-align: center;
    border: 2px solid ${({theme})=> theme.gray8};
    background-color: ${({theme})=> theme.gray3};

    &::-webkit-inner-spin-button
    {
        -webkit-appearance: none;
    }
`;