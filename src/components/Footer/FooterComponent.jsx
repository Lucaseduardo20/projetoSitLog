import React from "react";
import { FooterContainer, FooterContent, FooterInfos, FooterStreetView } from "./FooterStyled";
import LogoBranco from '../../assets/img/logo-sitlog-branco.png'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaBars } from 'react-icons/fa';
// import ReactStreetview from 'react-streetview';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterInfos>
                    <img src={LogoBranco}></img>
                    <div id="infos">
                        <span>(011) 96683-6931</span>
                        <span>Sitlog@sitlog2.com.br</span>
                        <span>Rua Ouro Grosso, 1115 - Bairro Parque Peruche<br />São Paulo - SP, CEP 02555-000</span>
                        <div id="icons">
                            <FaInstagram />
                            <FaFacebookF />
                            <FaWhatsapp />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </FooterInfos>
                <FooterStreetView>

                </FooterStreetView>
            </FooterContent>
        </FooterContainer>
    )
}