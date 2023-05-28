import React from "react";
import NavBarComponent from "./NavBar/NavBarComponent";
import { HeaderComponentStyles, HeaderTop, HeaderBottom } from "./HeaderComponentStyles";

export default function HeaderComponent () {
    return (
        <>
            <HeaderComponentStyles>
                <HeaderTop />
                <HeaderBottom />
            </HeaderComponentStyles>
        </>
    )
}