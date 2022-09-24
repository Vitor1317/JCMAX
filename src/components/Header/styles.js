import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 5rem;
    background-color: ${({theme})=> theme.gray9};
    margin: 0 -3rem 1rem;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme})=> theme.gray1};

    img {
        height: 8.5rem;
        width: 8.5rem;
    }

    a {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        color: ${({theme})=> theme.gray1}; 
    }

    div{
        display: flex;
        align-items: center;
        gap: 4rem;

        &.toggle{
            gap: 0.5rem;
        }
    }
`;

