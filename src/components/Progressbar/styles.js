import styled from "styled-components";

export const ProgressContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({theme})=> theme.yellow7};
    border-radius: 8px;
    padding: 1rem;

    div {
        &.icon{
            border-radius: 8px;
            background-color: ${({theme})=> theme.yellow6};
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
            -webkit-appearance: none;
            margin-bottom: 0.4rem;
        }

        progress::-webkit-progress-bar{
            background-color: ${({theme})=> theme.gray3};
            border-radius: 8px;
        }

        progress::-webkit-progress-value{
            background-color: ${({theme})=> theme.gray1};
            border-radius: 8px;
        }

        svg {
            color: teal;
            margin: 1rem 2rem;
        }
    }
`;