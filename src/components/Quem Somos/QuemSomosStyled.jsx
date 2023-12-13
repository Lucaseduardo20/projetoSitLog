import styled from "styled-components";
import background from '../Quem Somos/quem-somos.png'

export const QuemSomosStyled = styled.section`
    width: 100%;
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: 100%;
    background-position: center;

    @media (max-width: 800px) {
        height: 80vh;
        // border: 5px double black;
        padding: 20px;
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
        background-color: rgba(255, 255, 255, 0.9);
    }
`

export const QuemSomosContent = styled.div `
    width: 70%;
    height: 90%;
    display: flex;
    align-items: center;

    img {
        width: 50%;
        height: 100%;

    }

    #quem-somos {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 120px;
            font-family: Arial;
            font-style: italic;
            letter-spacing: -10px;
        }

        @media (max-width: 800px) {
            h1 {
                font-size: 100px;
            }
        }
    }

    #quem-somos-text {
        height: 85%;
        // border: 1px solid black;
        width: 50%;
        text-align: center;

        p {
            font-size: 20px
            font-family: Calibri;
        }

        @media (max-width: 800px) {
            width: 90%;
            p {
                font-size: 16px;
            }
        }
        
    }


    @media (max-width: 800px) {
        justify-content: center;
        width: 100%;
        margin: 0;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 15px; 
        box-shadow: 0 0 10px rgba(0,0,0,0.1); 

        #quem-somos {
            width: 100%;
            padding: 10px;
        }

        #quem-somos-text {
            width: 100%;
            padding: 10px;
        }
    }
`