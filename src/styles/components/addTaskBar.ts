import styled from "styled-components";

export const AddTaskBarContainer = styled.div`
    width: 100%;
    position: relative;
    top:-1.6rem;
    display: flex;
    gap:0.5rem;

    @media only screen and (max-width: 425px) {
        flex-direction: column;
        width: 80%;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
`