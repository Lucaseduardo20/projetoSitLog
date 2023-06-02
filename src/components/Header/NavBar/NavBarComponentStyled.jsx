import styled from 'styled-components'




export const NavBarStyled = styled.ul `
    list-style: none;
    display: flex;
    // border: 2px solid black;
    margin: 0 0 0 10%;

    a {
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
`