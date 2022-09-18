import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    width: 100%;

    div {
        display: flex;
        gap: 1rem;
        align-items: center;

        select {
            padding: 0.5rem;
            border: none;
            background-color: ${({theme})=> theme.gray3};
            height: 100%;
            border-radius: 8px;
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-left: 1rem;
        padding: 0.5rem;
        border: none;
        border-radius: 8px;
        background: ${({theme})=> theme.yellow6};
        cursor: pointer;
    }
`;

