import styled from "styled-components";

export const CotacaoContent = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;    
`

export const CotacaoArticle = styled.article `
    width: 65%;
    height: 70%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    -webkit-box-shadow: 1px 2px 26px -2px rgba(0,0,0,1);
    -moz-box-shadow: 1px 2px 26px -2px rgba(0,0,0,1);
    box-shadow: 1px 2px 26px -2px rgba(0,0,0,1);

    @media (max-width: 1024px) {
        height: 70%;
    }

    @media (min-width: 1024px) and (max-width: 1250px) {
        height: 60%;
    }
`

export const CotacaoHeader = styled.div `
    width: 95%;
    height: 25%;
    padding: 20px 0 0 40px;

    h2 {
        display: inline;
        font-size: 80px;
        color: #3B3A3A;
        font-family: Calibri;

    }

    span {
        font-size: 80px;
        font-style: italic;
        color: #B30220;
        font-family: Calibri;
    }

    p {
        font-size: 23px;
        margin: -5px     0 0 5px;
        font-family: Calibri;
        color: #000000;
        letter-spacing: -1px;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 15%;
        h2 {
            font-size: 25px;
        }

        span {
            font-size: 25px;
        }

        p {
            font-size: 10px;
        }
    }

    
    @media (min-width: 1024px) and (max-width: 1250px) {
        h2 {
            font-size: 55px;
        }

        span {
            font-size: 55px;
        }

        p {
            font-size: 18px;
        }
    }
`

export const CotacaoForm = styled.div `
    width: 95%;
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    >input {
        width: 40%;
        height: 50px;
        border: 1pt solid #707070;
        font-size: 22px;
        padding-left: 20px;

        ::placeholder {
            color: #A2A2A2;
            font-family: Calibri;
        }

        &:focus {
            outline: none;
        }

        @media (min-width: 1024px) and (max-width: 1250px) {
            width: 45%;
            height: 40px;
            font-size: 18px;
        }
    }

    >button {
        width: 30%;
        margin: 0 40px 0 0;
        height: 50px;
        border-radius: 40px;
        background: #757575;
        border: none;
        transition: 0.3s;
        color: #DFDFDF;
        font-family: Calibri;
        font-weight: bold;
        font-size: 42px;
        
        :hover {
            background: #b30220;
            cursor: pointer;
        }

        @media (min-width: 1024px) and (max-width: 1250px) {
            width: 40%;
            margin: 0 20px 0 0;
            height: 40px;
            font-size: 32px;
        }
    }

    .styled-input::placeholder {
        position: absolute;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        height: 60%;

        input {
            width: 100%;
            height: 35px;
            font-size: 20px;
        }

        button {
            width: 50%;
            height: 30px;
            font-size: 20px;
            background: #b30220;
            margin: 0;
        }
    }
`

export const CotacaoProgress = styled.div `
    width: 95%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        position: absolute;
        color: white;
        font-family: Calibri;
        font-weight: bold;
        font-size: 25px;
        z-index: 1;
    }

    @media (max-width: 1024px) {
        height: 15%;

        span {
            font-size: 13px;
        }
    }

    @media (min-width: 1024px) and (max-width: 1250px) {
        height: 20%;

        span {
            font-size: 18px;
        }
    }
`
