import React from "react";
import NavBarComponent from "./NavBar/NavBarComponent";
import { HeaderComponentStyles, HeaderTop, HeaderBottom } from "./HeaderComponentStyles";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../../assets/img/logo-sitlog.png'

export default function HeaderComponent () {
    return (
        <>
            <HeaderComponentStyles>
                <HeaderTop>
                    <FaInstagram />
                    <FaFacebookF />
                    <FaWhatsapp />
                    <FaLinkedinIn />
                </HeaderTop>
                <HeaderBottom>
                    <img src={Logo} alt="Logo SitLog" />
                    <NavBarComponent></NavBarComponent>
                </HeaderBottom>
            </HeaderComponentStyles>
        </>
    )
}