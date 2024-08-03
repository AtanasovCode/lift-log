import { useState } from 'react';
import styled from 'styled-components';
import { List, X } from '@phosphor-icons/react';
import { useNavigate, Link } from 'react-router-dom';
import Toggle from './Toggle';

import logo from '../assets/logo.svg';

const Nav = () => {

    const [active, setActive] = useState(false);

    //Set mobile navigation to active or inactive
    const handleMobileNavShow = () => {
        setActive(!active);
        //console.log("ACTIVE!");
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

            <NavLinks active={active}>
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
                <NavLink to="/input-stats">
                    Lift Stats
                </NavLink>
                <NavLink to="/input-stats">
                    Strength Stats
                </NavLink>
                <ToggleContainer>
                    <Toggle />
                </ToggleContainer>
            </NavLinks>
        </Navigation>
    );
}

export default Nav;

const Navigation = styled.nav`
    overflow-x: hidden;
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

const Logo = styled.img`
    height: 50px;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 60px;
    }
`;

const NavLinks = styled.div`
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
        right: -200%;
        transition: all .6s ease-in-out;
        z-index: 99;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        //Mobile Nav is Active
        ${props => props.active && `
            top: 0;
            right: 0;
        `}

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

    @media (max-width: 550px) {
        width: 100%;
    }
`;

const NavLink = styled(Link)`
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    padding-bottom: .5rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: -20%;
        right: 0;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 16px;
        background-color: ${props => props.theme.secondary};
        transition: all .3s ease-in-out;
    }

    &:hover::before {
        background-color: ${props => props.theme.accent};
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        margin: 0 0 .3rem 0;
        width: 100%;
        justify-content: flex-start;
        padding: .6rem 1rem;

        &::before {
            display: none;
        }
    }
`;

const ToggleContainer = styled.div`
    @media (max-width: 768px) {
        position: absolute;
        bottom: 5%;
        left: 5%;
    }
`;

const CloseIcon = styled.div`
    display: none;

    @media (max-width: 768px) {
        position: absolute;
        top: 4%;
        left: 4%;
        cursor: pointer;
        display: block;
    }
`;

const NavLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const NavLogo = styled.img`
    display: none;

    @media (max-width: 768px) {
        display: block;
        width: 40%;
        margin-bottom: 7rem;
    }

    @media (max-width: 550px) {
        width: 30%;
    }

    @media (max-width: 425px) {
        width: 40%;
    }
`;

const MenuIcon = styled.div`
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