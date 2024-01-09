import styled from "styled-components";

export const FooterContainer = styled.footer`
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

    #footer-last-infos {
        width: 30%;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        >span {
            color: white;
            font-family: Calibri;
        }
    }

    @media (max-width: 800px) {
        #footer-last-infos {
            width: 70%;

            >span {
                font-size: 13px;
            }
        }
    }
`

export const FooterContent = styled.div`
    width: 100%;
    height: 100%;
    // border: 5px solid yellow;
    // margin: 30px 0 0 0;
    display: flex;
`

export const FooterInfos = styled.div`
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

    @media (max-width: 800px) {
        width: 100%;
    }
`
export const FooterStreetView = styled.div`
    width: 50%;
    `

export const FooterNav = styled.div`    
    // border: 2px solid red;
    width: 50%;
    height: 50px;

    >ul {
        display: flex;
        justify-content: space-between;

        >li {
            list-style: none;
            font-size: 16px;
            font-family: Calibri;

            >a {
                color: white;
                text-decoration: none;
                position: relative;
                transition: color 0.3s ease;
            
                ::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: -5px;
                    left: 0;
                    background-color: #FFF;
                    visibility: hidden;
                    transform: scaleX(0);
                    transition: all 0.3s ease-in-out;
                }
            
                :hover::after {
                    visibility: visible;
                    transform: scaleX(1);
                }
            }
        }
    }

    @media (max-width: 800px) {
        width: 90%;

        ul {

            li {
                font-size: 12px;
            }
        }
    }
`
