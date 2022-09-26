import styled from "styled-components";

export const SidebarContainer = styled.div`
    min-width: 6rem;
    width: ${({activeSidebar})=> !activeSidebar ? "fit-content" : "19rem"};
    height: 100vh;

    background: ${({theme})=> theme.gray7};
    color: ${({theme})=> theme.gray1};

    display: flex;
    flex-direction: column;
    align-items: ${({activeSidebar})=> !activeSidebar ? "center" : ""};
    justify-content: space-between;
    padding: 2.5rem 1rem;
    box-shadow: 0.5rem 0.5rem 0.5rem ${({theme})=> theme.gray6};
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -3rem;

    img{
        object-fit: cover;
        height: 6rem;
        width: 6rem;
        cursor: pointer;
    }
`;

export const IconToggle = styled.div`
    svg{
        cursor: pointer;
    }
`;

export const  LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    a{
        height: 2.75rem;
        padding: 1rem;
        margin-top: 0.3rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        color: ${({theme})=> theme.gray1};

        text-decoration: none;
        font-size: 0.875rem;
        border-radius: 8px;
    }
    
    a:not(.active):hover{
        background-color: ${({theme})=> theme.yellow3};
        color: ${({theme})=> theme.gray9}; 
    }

    a.active{
        background: ${({theme})=> theme.yellow6};
        font-weight: bold;
    }

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;
    background: ${({theme})=> theme.yellow7};
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
    width: 100%;
    height: 0.5px;
    background-color: ${({theme})=> theme.gray3};
    margin: 0.8rem 0;
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

    div {
        &.toggle{
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
`;