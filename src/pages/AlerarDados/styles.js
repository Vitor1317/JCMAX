import styled from "styled-components";

export const Wrapper = styled.div`
    h1 > small {
        font-size: 0.8rem;
        font-weight: 400;
    }
`;

export const InputsContainer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & > div {
        margin-bottom: 1rem;
    }
`;