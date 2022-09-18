import styled from "styled-components";

export const SidebarContainer = styled.div`
    min-width: 6rem;
    width: ${({activeSidebar})=> !activeSidebar ? "fit-content" : "19rem"};
    height: 100vh;

    background: ${({theme})=> theme.gray8};
    color: ${({theme})=> theme.gray1};

    display: flex;
    flex-direction: column;
    align-items: ${({activeSidebar})=> !activeSidebar ? "center" : ""};;
    padding: 2.5rem 1rem;
    box-shadow: 0.5rem 0.5rem 0.5rem ${({theme})=> theme.gray6};
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

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

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background: #757575;
    margin: 2rem 0;
`

export const  LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    a{
        height: 3.25rem;
        padding: 1rem;
        display: flex;
        gap: 1rem;
        color: ${({theme})=> theme.gray1};

        text-decoration: none;
        font-size: 1rem;
        border-radius: 8px;
    }

    a.active{
        background: ${({theme})=> theme.yellow6};
        font-weight: bold;
    }

`;