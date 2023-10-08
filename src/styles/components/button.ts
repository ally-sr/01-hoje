import styled from "styled-components";

export const Button = styled.button`
    height: 100%;
    display: flex;
    padding: 0.8rem;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    border-radius: 0.5rem;
    border: 1px solid #000;
    background: #CCA000;

    color: #F2F2F2;
    font-size:1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

    opacity: 0.9;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }

    @media only screen and (max-width: 425px) {
        width: 10rem;
    }
`