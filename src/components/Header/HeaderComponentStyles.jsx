import styled from "styled-components";

export const HeaderComponentStyles = styled.header`
    background-color: #f6f6f6;
    width: 100%;
    height: 180px;
`

export const HeaderTop = styled.div `
    width: 100%;
    height: 25%;
    background: #000000;
    padding: 0 15%;
    color: white;
    display: flex;
    align-items: center;
    
    >svg {
        width: 25px;
        height: 22px;
        transition: .5s;
        cursor: pointer;
        margin: 0 5px 0 0;

        :hover {
            fill: red;
        }
    }

    @media (max-width: 1024px) {
        padding: 0;
    }
`


export const HeaderBottom = styled.div `
    height: 75%;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 0 15%;


    >img {
        width: 180px;
    }

    @media (max-width: 1024px) {
        margin: 0;
    }
`