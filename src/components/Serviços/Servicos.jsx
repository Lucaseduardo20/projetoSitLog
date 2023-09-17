import { useState } from "react";
import { ServicosStyled, ServicosHeader, ServicosContent } from "./ServicosStyled";

export default function ServicosComponent() {
    return (
        <ServicosStyled>
            <ServicosHeader>
                <div>
                    <h1 style={{
                        color: '#FFFFFF',

                    }}>NOSSOS</h1><br />
                    <h1 style={{
                        color: '#FF0E38',
                        marginTop: '-40px',
                    }}>SERVICOS</h1>
                </div>
                <button>SAIBA MAIS</button>
            </ServicosHeader>
            <ServicosContent>
                <div></div>
                <div></div>
                <div></div>
            </ServicosContent>
        </ServicosStyled>
    )
}