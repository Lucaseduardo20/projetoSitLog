import styled from 'styled-components'

export const NavBarStyled = styled.ul `
    list-style: none;
    display: flex;
    width: 700px;
    justify-content: space-between;
    // margin: 0 10% 0 0;
    // border: 2px solid black;
    // margin-left: 30%;

    >li {
        margin: 0 20px;
        font-size: 18px;
        font-weight: bold;
        transition: .5s;
        font-family: Calibri;

        :hover {
            // font-size: 16px;
        }
        
        a {
            color: #1b1b1b;
            text-decoration: none;
            position: relative;
            transition: color 0.3s ease;
        
            ::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: -5px;
                left: 0;
                background-color: #000;
                visibility: hidden;
                transform: scaleX(0);
                transition: all 0.3s ease-in-out;
            }
        
            :hover::after {
                visibility: visible;
                transform: scaleX(1);
            }
        }
        
        
        
        
        
            :hover::after {
                transform: scaleX(1);
            }
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