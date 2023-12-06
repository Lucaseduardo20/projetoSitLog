import styled from "styled-components";

export const FooterContainer = styled.footer `
    width: 100%;
    height: 70vh;
    background-color: #191919;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    #footer-location {
        display: flex;
        width: 80%;
        height: 70%;
    }
`
    
export const FooterContent = styled.div `
    width: 100%;
    height: 100%;
    // border: 5px solid yellow;
    // margin: 30px 0 0 0;
    display: flex;
`

export const FooterInfos = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    >img {
        width: 250px;
        margin: 0 0 15px 10px;
    }

    #infos {
        display: flex;
        flex-direction: column;

        >span {
            color: white;
            font-family: Calibri;
            margin: 3px 0;
            font-size: 17px;
        }

        #icons {
            svg {
                fill: white;
                width: 25px;
                height: 20px;
                transition: .5s;

                :hover {
                    fill: red;
                }
            }
        }
    }
`
export const FooterStreetView = styled.div `
    width: 50%;
    `
    
export const FooterNav = styled.div `    
    border: 2px solid red;
    width: 50%;
    height: 50px;
`
