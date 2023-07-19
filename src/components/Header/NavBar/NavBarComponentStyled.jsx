import styled from 'styled-components'

export const NavBarStyled = styled.ul `
    list-style: none;
    display: flex;
    // margin: 0 10% 0 0;
    // border: 2px solid black;
    margin: 0px 0px 0px 20%;

    >li {
        margin: 0 20px;
        font-size: 16px;
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

        @media (max-width: 1024px) {
            font-size: 13px;
        }

        @media (min-width: 1024px) and (max-width: 1400px) {
            font-size: 13px;
        }
    }
`