import { useState } from "react";
import {FaSearch} from 'react-icons/fa';
import { SearchComponentStyled } from "./SearchComponentStyled";


export default function SearchComponent (setIsInput, isInput) {

    return (
        <>
            <SearchComponentStyled>
                <a onClick={() => { setIsInput(!isInput) }} href="#">
                    <FaSearch></FaSearch>
                </a>
                <input type="text" id="input-search" placeholder="Pesquisar..."></input>
            </SearchComponentStyled>
    </>
    )
}