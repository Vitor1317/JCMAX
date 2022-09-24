import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    gap: 1rem;

    input{
        height: 3rem;
        padding: 0.5rem;
        border-radius: 8px;
        border: 3px solid ${({theme})=> theme.gray6};
        background: ${({theme})=> theme.gray3};
        font-size: 1.2rem;
    }
`;