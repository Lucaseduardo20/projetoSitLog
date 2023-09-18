import styled from "styled-components";
import background from './servicos-background.png'

export const ServicosStyled = styled.section`
    width: 100%;
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: url(${background}) no-repeat;
    background-size: 100%;
    background-position: center;

    @media (max-width: 800px) {
        background: none;
        height: 100vh;
    }
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

    @media (max-width: 800px) {
        width: 100%;
        flex-direction: column;

        h1 {
            font-size: 60px;
        }
    }
`

export const ServicosContent = styled.div `
    width: 50%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 0 200px 0;

    @media (max-width: 800px) {
        flex-direction: column;
        border: 3px solid blue;
        width: 100%;
        height: 70%;
    }
`

export const ServicoItem = styled.div `
    width: ${props => props.servico.isActive ? '220px' : '200px'};
    height: ${props => props.servico.isActive ? '570px' : '200px'};
    border-radius: ${props => props.servico.isActive ? '0' : '50%'};
    background-color: white;
    display: flex;
    justify-content: ${props => props.servico.isActive ? 'space-around' : 'center'};
    align-items: center;
    flex-direction: column;
    padding: ${props => props.servico.isActive ? '15px' : '0'};

    // transition: width 0.3s ease, height 0.4s ease, border-radius 0.3s ease, justify-content 0.3s ease, padding 0.3s ease;
    transition: 
    width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
    height 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
    border-radius 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
    justify-content 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
    padding 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);

    >span {
        font-size: 14px;
        font-family: Calibri;
        margin-top: 10px;
    }

    >p {
        width: 80%;
        height: 70%;
        // letter-spacing: 1px;
        font-size: ${props => props.servico.nome === 'Especial' ? '15px' : '17px'};
        text-align: center;
        line-height: 1.5;
        font-family: Calibri;
        margin: 30px 0 0 0;

        transition: font-size 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);

        @media (max-width: 800px) {
            width: 100%;
            line-height: 1
        }
    }

    >img {
        width: 60%;
        transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        transform: scale(${props => props.servico.isActive ? '1.1' : '1'});
    }

    :hover {
        cursor: pointer;
        border: 2px solid red;
    }

    @media (max-width: 800px) {
        border: 1px solid red;
        border-radius: 20px;
        width: 80%;

        img {
            width: 19%;
            height: 30%;
        }

        >p {
            margin: 0;
        }
    }
`