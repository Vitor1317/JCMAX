import styled from "styled-components";

export const ProgressContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: teal;
    border-radius: 8px;
    padding: 1rem;

    div {
        &.icon{
            border-radius: 8px;
            background-color: #00baba;
        }

        &.progress {
            width: 100%;
            margin: 0 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        progress {
            width: 100%;
            height: 2rem;
        }

        svg {
            margin: 1rem 2rem;
        }
    }
`;