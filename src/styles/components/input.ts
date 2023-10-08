import styled from "styled-components";


export const Input = styled.input`
    width: 100%;
    display: flex;
    padding: 1rem;
    align-items: center;
    gap: 0.5rem;
    flex: 1;

    border-radius: 0.5rem;
    border: 1px solid #808080;
    background: #262626;

    &::placeholder{
        color: #808080;
        font-size: 0.825rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 1.4rem */

        // truncate
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media only screen and (max-width: 425px) {
            font-size: 0.625rem;
        }
        @media only screen and (min-width: 768px) {
            font-size: 0.875rem;
        }

    }
`