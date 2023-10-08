import styled from "styled-components";

export const TasksBody = styled.div`
    width: inherit;
    min-height: 323px;
    max-height: 35rem;
    border-top: 1px solid #808080;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap:1rem;


`

export const TaskItem = styled.div`

`

export const NoContentBody = styled.div`

    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
        color: #808080
    }
     
`