import styled from "styled-components";

export const BannerContainer = styled.header`
    width: 100%;
    height: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;

    h1 {
        color: #CCA000;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 900;
        line-height: normal;

        display: flex;
        justify-content: center;
        align-items: center;

        span {
            color: #fff;
        }
    }
`