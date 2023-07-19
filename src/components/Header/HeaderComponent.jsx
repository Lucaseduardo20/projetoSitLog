import {useEffect, useState} from "react";
import NavBarComponent from "./NavBar/NavBarComponent";
import { HeaderComponentStyles, HeaderTop, HeaderBottom } from "./HeaderComponentStyles";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaBars } from 'react-icons/fa';
import Logo from '../../assets/img/logo-sitlog.png'

export default function HeaderComponent () {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

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
                    {windowWidth <= 1024 && (
                        <FaBars></FaBars>
                    )}
                    
                    {windowWidth > 1024 && (
                        // <FaBars></FaBars>
                        <NavBarComponent></NavBarComponent>
                    )}
                </HeaderBottom>
            </HeaderComponentStyles>
        </>
    )
}