import styled from 'styled-components'

export const NavBarStyled = styled.ul `
    list-style: none;
    display: flex;
    // margin: 0 10% 0 0;
    // border: 2px solid black;
    margin: 0px 0px 0px 20%;

    >li {
        margin: 0 20px;
        font-size: 17px;
        transition: .5s;

        a {
            color: #1b1b1b;
            text-decoration: none;

            :hover {
                color: red;
                // text-decoration: underline;
                transition: .5s;
            }
        }
    }

    
    @media screen and (max-width: 768px) { // Estilos específicos para telas com largura máxima de 768px
        
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
        // Estilos específicos para telas com largura mínima de 769px e largura máxima de 1024px
    }

    @media screen and (min-width: 1025px) {
        // Estilos específicos para telas com largura mínima de 1025px
    }
`