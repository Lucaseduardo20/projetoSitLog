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
    }

    article {
        width: 50%;
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
                }

                span {
                    font-size: 17px;
                    font-weight: bold;
                    margin: 0 0 0 10px;
                    font-family: Calibri;
                }
            }

            .feedback-body{

                >p {
                    font-family: Calibri;
                    font-size: 16.8px;
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
                }
            }
        }  
    }
   
`