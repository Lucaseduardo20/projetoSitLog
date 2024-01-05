import React from "react";
import { FooterContainer, FooterContent, FooterInfos, FooterStreetView, FooterNav } from "./FooterStyled";
import LogoBranco from '../../assets/img/logo-sitlog-branco.png'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaBars } from 'react-icons/fa';
import { MdOutlineGpsFixed, MdEmail, MdOutlineLocalPhone  } from "react-icons/md";
import NavBarComponent from "../Header/NavBar/NavBarComponent";
// import ReactStreetview from 'react-streetview';

export const Footer = () => {
    return (
        <FooterContainer>
            <div id="footer-location">
                <FooterContent>

                    <FooterInfos>
                        <img src={LogoBranco}></img>
                        <div id="infos">
                            <span><MdOutlineLocalPhone style={{marginBottom: '-3px'}} /> (011) 96683-6931  -- (11) 3856-8620</span>
                            <span><MdEmail style={{marginBottom: '-3px'}} /> Sitlog@sitlog2.com.br</span>
                            <span> <MdOutlineGpsFixed style={{marginBottom: '-3px'}} /> Rua Ouro Grosso, 1115 - Parque Peruche<br /> <MdOutlineGpsFixed style={{marginBottom: '-3px'}} /> São Paulo - SP, CEP 02531-011</span>
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
            </div>
            <FooterNav>
                <ul>
                    <li><a href="#servicos">NOSSOS SERVIÇOS</a></li>
                    <li><a href="#quem-somos">QUEM SOMOS</a></li>
                    <li><a href="#cotacao">COTAÇÃO</a></li>
                    {/* <li><a href="">PARCEIROS</a></li> */}
                    <li><a href="#feedbacks">FEEDBACKS</a></li>
                </ul>
            </FooterNav>
            <div id="footer-last-infos">
                <span>&#x24B8; Todos os direitos reservados SitLog 2023.</span>
                <span>By Imported Code.</span>
            </div>
        </FooterContainer >
    )
}