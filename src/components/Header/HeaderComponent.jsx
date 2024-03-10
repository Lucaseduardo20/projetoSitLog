import { useEffect, useState } from "react";
import NavBarComponent from "./NavBar/NavBarComponent";
import { HeaderComponentStyles, HeaderTop, HeaderBottom } from "./HeaderComponentStyles";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaBars } from 'react-icons/fa';
import Logo from '../../assets/img/logo-sitlog.png'

export default function HeaderComponent() {
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
                    <a href="https://www.instagram.com/sitlog.transportes?igsh=Ym81Nm5wd2FrYmU3&utm_source=qr" target="_blank"><FaInstagram /></a>
                    <a href="https://www.facebook.com/profile.php?id=61556479960972&mibextid=ZbWKwL" target="_blank"><FaFacebookF /></a>
                    <a href="https://api.whatsapp.com/send?phone=5511966836931&text=Ol%C3%A1%2C%20estou%20interessado%20em%20seus%20servi%C3%A7os!" target="_blank"><FaWhatsapp /></a>
                </HeaderTop>
                <HeaderBottom>
                    <img src={Logo} alt="Logo SitLog" />
                    {/* {windowWidth <= 1024 && (
                        <FaBars></FaBars>
                    )} */}

                    <NavBarComponent></NavBarComponent>
                </HeaderBottom>
            </HeaderComponentStyles>
        </>
    )
}