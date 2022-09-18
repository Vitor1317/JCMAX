import styled, { css } from "styled-components";

export const Title = styled.div`
    cursor: pointer;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
    z-index: 10;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    color: black;
    margin-top: 0.75rem;
    border-radius: 8px;
    position: absolute;
    right: -10;
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
        transform: translateY(0);
    `,
    close: ()=> css`
        opacity: 0;
        pointer-events: none;
        transform: translateY(-2rem);
    `
}

export const DropdownContainer = styled.div`
    ${({isOpen})=> css`
        position: relative;
        width: max-content;

        ${Content},
        ${Overlay}{
            transition: transform 0.2s ease-in , opacity 0.3s ease-in-out;
            ${isOpen && modifiers.open()}
            ${!isOpen && modifiers.close()}
        }
    `}
`;

