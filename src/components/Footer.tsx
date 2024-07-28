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

                <FooterCredit>
                    <Copyright fill="#ccc" size={16} weight="regular" style={{paddingRight: "5px"}} />
                    atanasovCode
                </FooterCredit>
            </FooterNavigation>

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
    color: ${props => props.theme.text};
    padding: 10px 45px;\

    @media (max-width: 950px) {
        padding: 15px;
        padding-bottom: 40px;
    }

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;


const Logo = styled.img`
    width: 110px;

    @media (max-width: 700px) {
        margin-bottom: 55px;
    }
`;

const FooterNavigation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 700px) {
        margin-bottom: 55px;
    }
`;

const NavItem = styled.div`
    font-size: 14px;
    color: darkgray;
    margin-bottom: 12px;
    cursor: pointer;

    @media (max-width: 700px) {
        font-size: 16px;
        margin-bottom: 15px;
    }
`;

const FooterCredit = styled(NavItem)`
    display: flex;
    align-items: center;
    justify-content:center;
    margin-bottom: 0;
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
