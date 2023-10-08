import styled from "styled-components";

export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0D0D0D;
`

export const AppContent = styled.div`
    height: 100%;
    margin: 0 auto;
    padding: 0 01rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 425px) {
        width: calc(100vw - 5rem);

        p{
            font-size: 0.785rem;

            strong{
                font-size: 0.969rem;
            }
        }
    }
    @media only screen and (min-width: 768px) {
        width: calc(100vw - 15rem);

    }
    @media only screen and (min-width: 1024px) {
        width: calc(100vw - 25rem);

        p{
            font-size: 0.969rem;

            strong{
                font-size: 0.949rem;
            }
        }
    }
    @media only screen and (min-width: 1440px) {
        width: calc(100vw - 45rem);
    }

`