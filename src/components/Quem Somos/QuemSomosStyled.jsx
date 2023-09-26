import styled from "styled-components";
// import background from './QuemSomos-background.png'

export const QuemSomosStyled = styled.section`
    width: 100%;
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: 100%;
    background-position: center;
    
    
    // @media (max-width: 800px) {
    //     background: none;
    //     height: 100vh;
    //     justify-content: space-around;
    //     flex-direction: column;
    // }
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
    }

    #quem-somos-text {
        height: 70%;
        width: 90%;
        text-align: center;

        p {
            font-size: 18px
        }
    }


    @media (max-width: 800px) {
        flex-direction: column;
        width: 100%;
        height: 70%;
        margin: 0;
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
        border-radius: ${props => props.servico.isActive ? '20px' : '40px'};
        width: ${props => props.servico.isActive ? '90%' : '50%'};
        height: ${props => props.servico.isActive ? '30%' : '20%'};

        img {
            width: ${props => props.servico.isActive ? '19%' : '30%'};
            height: 30%;
        }

        >p {
            font-size: 12px;
            margin: 0;
        }
    }
`