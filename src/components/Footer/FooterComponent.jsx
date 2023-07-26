import React from "react";
import { FooterContainer, FooterContent, FooterInfos, FooterStreetView } from "./FooterStyled";
import LogoBranco from '../../assets/img/logo-sitlog-branco.png'

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterInfos>
                    <img src={LogoBranco}></img>
                </FooterInfos>
                <FooterStreetView></FooterStreetView>
            </FooterContent>
        </FooterContainer>
    )
}