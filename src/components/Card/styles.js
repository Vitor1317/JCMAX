import styled from "styled-components";

const modifier = {
    1: "100%",
    2: "49%",
    3: "30%",
    4: "22%",
};

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme})=> theme.gray8};
    width: ${({flexWidth})=> modifier[flexWidth]};
    padding: 1rem;
    margin-top: 1rem;
    box-shadow: 0.5rem 0.5rem 1rem ${({theme})=> theme.gray6}, -0.5rem -0.5rem 1rem ${({theme})=> theme.gray6};
    border-radius: 8px;
`;