import styled from 'styled-components'

export const FeedbacksStyled = styled.section `
    width: 100%;
    height: 800px;
    border: 2px solid red;
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
        border: 5px solid black;
        width: 60%;
        height: 80%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;

        div {
            width: 40%;
            height: 40%;
            border: 2px solid red;
        }  
    }
   
`