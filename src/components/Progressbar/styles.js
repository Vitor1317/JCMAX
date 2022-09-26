import styled from "styled-components";

export const ProgressContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({theme})=> theme.yellow7};
    color: ${({theme})=> theme.gray1};
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

            span {
                color: ${({theme})=> theme.green5};
                font-weight: 600;
                font-size: 115%;
            }
        }

        progress {
            width: 100%;
            height: 2rem;
            -webkit-appearance: none;
            margin-bottom: 0.4rem;
        }

        progress::-webkit-progress-bar{
            background-color: ${({theme})=> theme.gray1};
            border-radius: 8px;
        }

        progress::-webkit-progress-value{
            background-color: ${({theme})=> theme.green5};
            border-radius: 8px;
        }

        svg {
            color: ${({theme})=> theme.color};
            margin: 1rem 2rem;
        }
    }
`;