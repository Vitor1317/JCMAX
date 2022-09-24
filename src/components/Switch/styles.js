import styled from "styled-components";

export const Container = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;


    input{
        opacity: 0;
        width: 0;
        height: 0;
    }

    span{
        position: absolute;
        cursor: pointer;

        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        border-radius: 5rem;
        background-color: #ccc;
    }

    span::before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        border-radius: 50%;
        background-color: #fff;
        transition: 0.3s;
    }

    input:checked + span::before{
        transform: translateX(100%);
    }

    input:checked + span {
        background-color: teal;
    }
`;
