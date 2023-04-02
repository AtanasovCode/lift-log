import styled from "styled-components";

export const Nav = styled.nav`
    padding: 35px 65px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    z-index: 4;
`;

export const Logo = styled.img`
    width: 80px;
`;

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavLink = styled.div`
    font-size: 15px;
    font-weight: 500;
    margin: 0 35px;
    cursor: pointer;
    user-select: none;
`;

export const SpecialLink = styled(NavLink)`
    border: 2px solid ${props => props.theme.lightGreen};
    border-radius: 15px;
    padding: 5px 35px;

    &:hover {
        background-color: ${props => props.theme.lighterGreen};
        color: #000;
    }
`;