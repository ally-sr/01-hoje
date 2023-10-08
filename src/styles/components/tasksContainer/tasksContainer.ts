import styled from "styled-components";

export const TasksContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.56rem;
    
    overflow-y: scroll;
    padding: 0 1rem;
    // style scrollbar
    &::-webkit-scrollbar{
        position: fixed;
        width: 11px;
        background-color: transparent;
        
        // distance scrollbar from elements
        margin-right: 0.5rem;

    }
    &::-webkit-scrollbar-thumb{
        background-color: #cca000;
        border-radius: 28px;
        border: 1px solid #000;
        width: 11px;
        margin-left: 0.5rem;
        // distance scrollbar from elements
        margin-right: 0.5rem;
        cursor: pointer;

        &:hover{
            background-color: #fff;
        }
    }
`