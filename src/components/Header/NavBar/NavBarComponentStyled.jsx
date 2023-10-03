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

export const NavBarButton = styled.a `
    font-size: 30px;
    color: black;
`
export const NavBarMobile = styled.div`
    width: ${({ isActive }) => (isActive ? '150px' : '0')};
    height: ${({ isActive }) => (isActive ? '100%' : '0')}%;
    background-color: black; 
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    opacity: ${({ isActive }) => (isActive ? '1' : '0')};
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};

    >a {
        color: white;
        text-decoration: none;
        font-size: 14px;
        font-family: Calibri;
    }
`;