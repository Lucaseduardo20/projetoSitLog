import { NavBarStyled } from "./NavBarComponentStyled";
import {FaSearch} from 'react-icons/fa'
import { useState } from "react";
import SearchComponent from "./SearchComponent/SearchComponent";



export default function NavBarComponent () {
    const [isInput, setIsInput] = useState(false);


    return (
        <NavBarStyled>
            <li><a href="#">NOSSOS SERVIÇOS</a></li>
            <li><a href="#">QUEM SOMOS</a></li>
            <li><a href="#">COTAÇÃO</a></li>
            <li><a href="#">PARCEIROS</a></li>
            <li><a href="#">FEEDBACKS</a></li>

        </NavBarStyled>
    )
};