import styled from 'styled-components'

export const FeedbacksStyled = styled.section `
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    flex-direction: column;

    h2 {
        font-size: 75px;
        color: #b30220;
        font-family: Calibri;
        text-transform: uppercase;

        @media (max-width: 800px) {
            font-size: 50px;
        }
    }

    article {
        width: 60%;
        height: 70%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;

        >div {
            width: 42%;
            height: 43%;
            border-radius: 27px;
            background-color: #F2F2F2DB;
            box-shadow: #00000066 7px 7px 7px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .feedback-header{
                width: 80%;
                height: 35%;
                display: flex;
                align-items: center;

                >div {
                    width: 20%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: #5d5d5d;

                    @media (max-width: 800px) {
                        width: 10%;
                        height: 80%;
                    }
                    
                    media (min-width: 800px) and (max-width: 1250px) {
                        width: 13%;
                        height: 80%;
                    }
                }

                span {
                    font-size: 17px;
                    font-weight: bold;
                    margin: 0 0 0 10px;
                    font-family: Calibri;

                    @media (max-width: 800px) {
                        font-size: 13px;
                    }

                    media (min-width: 800px) and (max-width: 1250px) {
                        font-size: 15px;
                    }
                }
            }

            .feedback-body{

                >p {
                    font-family: Calibri;
                    font-size: 16.8px;

                    @media (max-width: 800px) {
                        font-size: 13.8px;
                    }

                    media (min-width: 800px) and (max-width: 1250px) {
                        font-size: 15px;
                    }

                }
            }

            .feedback-footer{
                display: flex;
                align-items: flex-end;
                width: 40%;
                justify-content: space-around;

                >svg {
                    fill: #ebce3d;
                    width: 20px;

                    @media (max-width: 800px) {
                        width: 16px;
                    }

                    media (min-width: 800px) and (max-width: 1250px) {
                        width: 18px; 
                    }
                }
            }
        } 
        
        @media (max-width: 800px) {
            width: 90%;
            height: 100%;
            align-items: none;
            justify-content: space-evenly;

            >div {
                width: 100%;
                height: 20%;
                max-width: 300px;
            }
        }

        @media (min-width: 800px) and (max-width: 1250px) {
            width: 85%;
            height: 80%;
            
            >div {
                width: 45%;
                height: 35%;
                max-width: 400px;
            }
        }
    }
   
    @media (max-width: 800px) {
        height: 100vh;
    }
    
`