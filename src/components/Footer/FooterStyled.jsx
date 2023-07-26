import styled from "styled-components";

export const FooterContainer = styled.footer `
    width: 100%;
    height: 70vh;
    background-color: #191919;
    display: flex;
    justify-content: center;
`
    
export const FooterContent = styled.div `
    width: 80%;
    height: 75%;
    border: 5px solid yellow;
    margin: 30px 0 0 0;
    display: flex;
`

export const FooterInfos = styled.div `
    width: 50%;
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    >img {
        width: 300px;
    }
`
export const FooterStreetView = styled.div `
    width: 50%;
    border: 2px solid red;
`
