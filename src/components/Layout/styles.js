import styled from "styled-components";

export const LayoutContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
`;

export const MainContainer = styled.div`
    width: 100%;
    overflow: auto;
    padding: 0 3rem 3rem;
    background: ${({theme})=> theme.card};
    color: ${({theme})=> theme.color};
    transition: 0.2s;
`;