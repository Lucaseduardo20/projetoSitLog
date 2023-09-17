import styled from "styled-components";
import background from './servicos-background.png'

export const ServicosStyled = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 5px solid black;
    background: url(${background}) no-repeat;
    background-size: 100%;
    background-position: center;
`

export const ServicosHeader = styled.div `
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h1 {
        font-family: Calibri;
        font-style: italic;
        font-size: 90px;
        margin: 0;
    }

    button {
        width: 290px;
        height: 60px;
        font-size: 36px;
        font-weight: bold;
        background-color: transparent;
        color: #FF0E38;
        border: 3px solid #FF0E38;
        border-radius: 20px;
        transition: .5s;

        :hover {
            cursor: pointer;
            background-color: #FF0E38;
            color: white;
        }
    }
`

export const ServicosContent = styled.div `
    border: 2px solid white;
    width: 50%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    >div {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: white;
    }
`