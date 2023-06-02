import React from "react";
import { NavBarStyled } from "./NavBarComponentStyled";


export default function NavBarComponent () {

    return (
        <>
            <NavBarStyled>
                <a href="#"><li>NOSSOS SERVIÇOS</li></a>
                <a href="#"><li>QUEM SOMOS</li></a>
                <a href="#"><li>COTAÇÃO</li></a>
                <a href="#"><li>PARCEIROS</li></a>
                <a href="#"><li>FEEDBACKS</li></a>
            </NavBarStyled>
        </>
    )
};