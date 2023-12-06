import { useEffect } from "react";
import { NavBarStyled, NavBarButton, NavBarMobile} from "./NavBarComponentStyled";
import { FaSearch } from 'react-icons/fa'
import { useState } from "react";
import SearchComponent from "./SearchComponent/SearchComponent";
import { FaBars } from "react-icons/fa";



export default function NavBarComponent() {
    const [isInput, setIsInput] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [navBarMobile, setNavBarMobile] = useState(false)

    const handleNavMobile = (event) => {
        event.preventDefault()

        setNavBarMobile(!navBarMobile);
    }

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
            {windowWidth > 1024 &&
                <NavBarStyled>
                    <li><a href="#servicos">NOSSOS SERVIÇOS</a></li>
                    <li><a href="#quem-somos">QUEM SOMOS</a></li>
                    <li><a href="#cotacao">COTAÇÃO</a></li>
                    {/* <li><a href="#parceiros">PARCEIROS</a></li> */}
                    <li><a href="#feedbacks">FEEDBACKS</a></li>

                </NavBarStyled>
            }
            {(windowWidth < 1024 && !navBarMobile) && 
                <NavBarButton href="" onClick={(e) => handleNavMobile(e)}><FaBars /></NavBarButton>
            }
                <NavBarMobile isActive={navBarMobile}>
                    <a href="" style={{fontSize: '20px'}} onClick={(e) => handleNavMobile(e)}>X</a>
                    <a href="#servicos">NOSSOS SERVIÇOS</a>
                    <a href="#quem-somos">QUEM SOMOS</a>
                    <a href="#cotacao">COTAÇÃO</a>
                    {/* <a href="#parceiros">PARCEIROS</a> */}
                    <a href="#feedbacks">FEEDBACKS</a>
                </NavBarMobile>

        </>
    )
};