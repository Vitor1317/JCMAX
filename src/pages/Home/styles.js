import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;

    div {
        &.flex{
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        &.flexicon {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const Separator = styled.div`
    height: 1px;
    background: gray;
    margin: 1.5rem 0;
`;

export const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
