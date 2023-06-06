import styled from 'styled-components'




export const NavBarStyled = styled.ul `
    list-style: none;
    display: flex;
    margin: 0 10% 0 0;

    >a {
        color: #1b1b1b;
        margin: 0 20px;
        font-size: 13px;
        text-decoration: none;
        transition: .5s;

        :hover{
            color: red;
            text-decoration: underline;
            transition: .5s;
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