import styled from "styled-components";

export const HeaderComponentStyles = styled.header`
    background-color: #f6f6f6;
    width: 100%;
    height: 140px;
    // border: 1px solid black;
`

export const HeaderTop = styled.div `
    width: 100%;
    height: 25%;
    background: #000000;
    // border: 2px solid green;
    padding: 0 15%;
    color: white;
    display: flex;
    align-items: center;
    
    >svg {
        width: 20px;
        height: 17px;
        transition: .5s;
        cursor: pointer;

        :hover {
            fill: red;
        }
    }
`


export const HeaderBottom = styled.div `
    height: 75%;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin: 0 0 0 15%;
    justify-content: space-between;

    >img {
        width: 130px;
        height: 90px;
    }
`