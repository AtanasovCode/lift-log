import { useState } from 'react';
import styled from 'styled-components';
import { List, X } from '@phosphor-icons/react';
import { useNavigate, Link } from 'react-router-dom';
import { useStore } from '../../useStore';
import Toggle from './Toggle';

import logo from '../assets/logo.svg';

const Nav = () => {

    const { activeNav, setActiveNav } = useStore();

    //Set mobile navigation to active or inactive
    const handleMobileNavShow = () => {
        setActiveNav(!activeNav);
    }

    const navigate = useNavigate();

    return (
        <Navigation>
            <Logo
                src={logo}
                onClick={() => navigate("/")}
            />

            <MenuIcon onClick={handleMobileNavShow} >
                <List
                    color="white"
                    size="100%"
                    weight="regular"
                />
            </MenuIcon>

            <NavLinks $active={activeNav}>
                <CloseIcon onClick={handleMobileNavShow}>
                    <X
                        size={28}
                        color="#FFF"
                        weight="light"
                    />
                </CloseIcon>
                <NavLogoContainer>
                    <NavLogo
                        src={logo}
                        alt="logo icon"
                    />
                </NavLogoContainer>
                <NavLink to="/">
                    Home
                </NavLink>
                <ToggleContainer>
                    <Toggle />
                </ToggleContainer>
                <NavTint onClick={() => setActiveNav(false)} />
            </NavLinks>
        </Navigation>
    );
}

export default Nav;

const Navigation = styled.nav`
    overflow-x: hidden;
    padding: 2rem 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};

    @media (min-width: 1024px) {
        justify-content: space-between;
        padding: 2rem 3rem;
        margin-bottom: 1.5rem;
    }
`;

const NavTint = styled.div`
    content: "";
    position: absolute;
    width: calc(100vw - 100%);
    height: 100%;
    top: 0;
    right: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(6px);
`;

const Logo = styled.img`
    height: 60px;
    cursor: pointer;

    @media (min-width: 1024px) {
        height: 50px;
    }
`;

const NavLinks = styled.div`
    position: fixed;
    width: 100%;
    height: 100dvh;
    background-color: ${props => props.theme.background};
    padding: 2rem 1rem;
    top: 0;
    right: -200%;
    transition: all 0.6s ease-in-out;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    ${props => props.$active && `
        top: 0;
        right: 0;
    `}

    @media (min-width: 550px) {
        width: 60%;
    }

    @media (min-width: 768px) {
        width: 35%;
    }

    @media (min-width: 1024px) {
        position: static;
        width: auto;
        height: auto;
        background-color: transparent;
        backdrop-filter: none;
        padding: 0;
        flex-direction: row;
        justify-content: center;
    }
`;

const NavLink = styled(Link)`
    font-size: 1.15rem;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 0.3rem 0;
    padding: 0.6rem 1rem;
    position: relative;
    width: 100%;

    &:hover::before {
        background-color: ${props => props.theme.accent};
    }

    @media (min-width: 768px) {
        font-size: 1rem;
        margin-right: 1rem;
        justify-content: center;
        padding-bottom: 0.5rem;
        width: auto;

        &::before {
            content: '';
            position: absolute;
            bottom: -10%;
            right: 0;
            left: 0;
            width: 100%;
            height: 2px;
            border-radius: 16px;
            background-color: ${props => props.theme.secondary};
            transition: all 0.3s ease-in-out;
        }
    }
`;

const ToggleContainer = styled.div`
    position: absolute;
    bottom: 3%;
    left: 1%;
`;

const CloseIcon = styled.div`
    position: absolute;
    top: 4%;
    left: 2%;
    cursor: pointer;
    display: block;

    @media (min-width: 1024px) {
        display: none;
    }
`;

const NavLogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
`;

const NavLogo = styled.img`
    display: block;
    width: 40%;

    @media (min-width: 550px) {
        width: 30%;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;

const MenuIcon = styled.div`
    user-select: none;
    opacity: 1;
    position: absolute;
    display: inline-block;
    right: 25px;
    cursor: pointer;
    z-index: 5;
    width: 30px;

    @media (min-width: 1024px) {
        display: none;
    }
`;
