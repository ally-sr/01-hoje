import styled from "styled-components";

export const TaskContainer = styled.div`
    width: inherit;
    display: flex;
    padding: 1.3rem;
    align-items: center;
    justify-content: space-evenly;
    gap: 0.75rem;

    border-radius: 8px;
    border: 1px solid #333;
    background: #333;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

    box-sizing: border-box;

    p {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex:1;
        margin:0;

        color: #F2F2F2;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 19.6px */

    }
    

`

export const ActionContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`
