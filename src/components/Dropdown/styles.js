import styled, { css } from "styled-components";

export const Title = styled.div`
    cursor: pointer;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 10;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    color: black;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: calc(100% + 1.5rem);
    top: -200%;
    z-index: 10;

    &::before {
        content: '';
        position: absolute;
        border-right: 1.2rem solid transparent;
        border-left: 1.2rem solid transparent;
        border-bottom: 1.2rem solid transparent;
        top: -1.2rem;
        right: 2.4rem;
    }
`;

export const Overlay = styled.div`
    background: transparent;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
`;

const modifiers = {
    open: ()=> css`
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0);
    `,
    close: ()=> css`
        opacity: 0;
        pointer-events: none;
        transform: translateX(-2rem);
    `
}

export const DropdownContainer = styled.div`
    ${({isOpen})=> css`
        position: relative;
        width: max-content;

        ${Content},
        ${Overlay}{
            transition: transform 0.35s ease-in , opacity 0.3s ease-in-out;
            ${isOpen && modifiers.open()}
            ${!isOpen && modifiers.close()}
        }
    `}
`;

