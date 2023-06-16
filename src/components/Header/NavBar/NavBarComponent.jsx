import { NavBarStyled } from "./NavBarComponentStyled";
import {FaSearch} from 'react-icons/fa'
import { useState } from "react";
import SearchComponent from "./SearchComponent/SearchComponent";



export default function NavBarComponent () {
    const [isInput, setIsInput] = useState(false);


    return (
        <>
            <NavBarStyled>
                <a href="#"><li>NOSSOS SERVIÇOS</li></a>
                <a href="#"><li>QUEM SOMOS</li></a>
                <a href="#"><li>COTAÇÃO</li></a>
                <a href="#"><li>PARCEIROS</li></a>
                <a href="#"><li>FEEDBACKS</li></a>
                {!isInput && (
                    <a onClick={() => {setIsInput(!isInput)}}>
                        <FaSearch></FaSearch>
                    </a>
                )}

                {isInput && (
                    <SearchComponent setIsInput={setIsInput}></SearchComponent>
                )}

            </NavBarStyled>
        </>
    )
};