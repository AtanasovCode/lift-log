import styled from "styled-components";
import { Link } from "react-router-dom";

//This allows passing of custom props 
interface Props {
    active: boolean;
}


export const Nav = styled.nav`
    padding: 2rem 4rem;
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
`;

export const Logo = styled.img`
    height: 50px;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 60px;
    }
`;

export const NavLinks = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        position: fixed;
        width: 50%;
        height: 100vh;
        background-color: ${props => props.theme.background};
        padding: 2rem 1rem;
        top: 0;
        right: -100%;
        transition: all .4s ease-in-out;
        z-index: 99;

        //Mobile Nav is Active
        ${props => props.active && `
            top: 0;
            right: 0;
            transition: all .4s ease-in-out;
        `}

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: -100%;
            background-color: rgba(0, 0, 0, .7);
        }
    }

    @media (max-width: 400px) {
        width: 75%;
    }
`;

export const NavLink = styled(Link)`
    font-size: 15px;
    font-weight: 500;
    margin: .5rem;
    cursor: pointer;

    @media (max-width: 700px) {
        font-size: 1.5rem;
        margin: 0;
    }
`;

export const NavLogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
`;

export const NavLogo = styled.img`
    display: none;

    @media (max-width: 768px) {
        display: block;
        width: 40%;
    }
`;

export const SpecialLink = styled(NavLink)`
    border: 2px solid ${props => props.theme.accent};
    border-radius: 16px;
    padding: .4rem 1.5rem;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.background};
    }
`;

export const MenuIcon = styled.div`
    user-select: none;
    opacity: 0;
    position: absolute;
    right: -100%;
    z-index: 0;

    @media (max-width: 768px) {
        opacity: 1;
        position: absolute;
        right: 25px;
        cursor: pointer;
        z-index: 5;
        width: 30px;
    }
`;