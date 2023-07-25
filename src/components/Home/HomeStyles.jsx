import styled from 'styled-components'
import background from './home-background.png'

export const HomeStyled = styled.section `
    height: 100vh;
    width: 100%;
    background: url(${background}) no-repeat;
    background-size: 100%;
    background-position: center;
    display: flex;

    @media  (max-width: 500px) {
        height: 20vh;
    }


    @media (min-width: 500px) and (max-width: 700px) {
        height: 45vh;
        justify-content: center;
    }

    @media (min-width: 700px) and (max-width: 1000px) {
        height: 50vh;
        justify-content: center;
    }
`

export const HomeContent = styled.article `
    width: 400px;
    height: 80%;
    margin: auto 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;    

    >p {
        color: white;
        font-size: 33px;
        letter-spacing: 3px;
        text-align: center;
        font-family: Calibri;
        margin: 0px 50px;
    }

    >button {
        width: 90%;
        height: 45px;
        border: none;
        border-radius: 30px;
        font-family: Calibri;
        font-size: 25px;
        font-weight: bold;
        color: white;
        background-color: #D20226;
        transition: .5s;
        
        :hover {
            background-color: #750216;
            cursor: pointer;
        }
    }

    @media (max-width: 500px) {
        height: 100%;

        >p {
            font-size: 13px;
            margin: 0;
        }

        >button {
            width: 50%;
            font-size: 12px;
            height: 20px;
        }
    }

    @media (min-width: 500px) and (max-width: 700px) {
        width: 100%;

        >p {
            font-size: 25px;
        }

        >button {
            width: 60%;
            font-size: 20px;
            height: 30px;
        }
    }

    @media (min-width: 700px) and (max-width: 1000px) {
        width: 80%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        >button {
            width: 50%;
        }
    }
`