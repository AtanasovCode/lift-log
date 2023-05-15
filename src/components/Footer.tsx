import styled from "styled-components";
import logo from '../assets/logo.svg';
import layeredWaves from '../assets/illustrations/layered-waves.svg';

import {
    EnvelopeSimple,
    GithubLogo,
    Code,
    Copyright,
} from "@phosphor-icons/react";


const Footer = () => {
    return (
        <Container>
            <Logo src={logo} />

            <FooterNavigation>
                <NavItem>
                    Home
                </NavItem>
                <NavItem>
                    Strongest Lifts
                </NavItem>
                <NavItem>
                    Strength Increase
                </NavItem>
            </FooterNavigation>

            <FooterCredit>
                <Copyright size={15} fill="#ccc" weight="light" />
                atanasovCode 2023
            </FooterCredit>

            <Links>
                <Link 
                    href="https://github.com/atanasovCode/"
                    target="_blank"
                >
                    <GithubLogo
                        weight="fill"
                        fill="#fff"
                        size={26}
                    />
                </Link>

                <Link>
                    <EnvelopeSimple
                        weight="regular"
                        fill="#fff"
                        size={26}
                    />
                </Link>

                <Link 
                    href="https://github.com/AtanasovCode/lift-log/"
                    target="_blank"
                >
                    <Code
                        weight="fill"
                        fill="#fff"
                        size={26}
                    />
                </Link>
            </Links>
        </Container>
    );
}

export default Footer;


const Container = styled.div`
    background-color: ${props => props.theme.richBlackDark};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-height: 40vh;
    color: #fff;
    padding: 10px 45px;
`;


const Logo = styled.img`
    width: 110px;
`;

const FooterNavigation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const NavItem = styled.div`
    font-size: 14px;
    color: darkgray;
    margin-bottom: 12px;
`;

const FooterCredit = styled.div`
    font-size: 14px;
    font-weight: 300;
    color: darkgray;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Links = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    font-size: 14px;
    color: darkgray;
`;
