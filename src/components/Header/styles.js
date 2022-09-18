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
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 1rem;
    background: ${({theme})=> theme.yellow6};
    border-radius: 8px;
    cursor: pointer;

    img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        object-fit: cover;
    }

    div.flex{
        display: flex;
        flex-direction: column;
    }
`;

export const Separator = styled.div`
    height: 0.5px;
    background-color: ${({theme})=> theme.gray3};
    margin: 0.8rem;
`;

export const ModalContent = styled.div`
    margin: 1rem;

    a {
        display: flex;
        color: ${({theme})=> theme.gray9};
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }
`;