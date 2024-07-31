import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import header from '../assets/images/header.jpg';
import headerMobile from '../assets/images/header-mobile.jpg';

const shake = keyframes`
    0% { transform: translateY(0); }
    25% { transform: translateY(-5px); }
    50% { transform: translateY(5px); }
    75% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
`;

const lift = keyframes`
    0% {
        bottom: 0%;
    }
    70% {
        bottom: 35%;
    }
    75% {
        bottom: 35%;
    }
    100% {
        bottom: 0%;
    }
`;

export const HeroSection = styled.div`
    background-color: ${props => props.theme.background};
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const HeroImageContainer = styled.div`
    width: 26vw;
    height: 100vh;
    background-color: ${props => props.theme.heroSecondary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media (max-width: 1024px) {
        width: 100vw;
        height: 30vh;
    }

    @media (max-width: 768px) {
        height: 20vh;
    }
`;

export const HeroImage = styled.img`
    width: 75%;

    @media (max-width: 1024px) {
        width: 20%;
    }

    @media (max-width: 768px) {
        width: 30%;
    }
`;

export const HeroInfo = styled.div`
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeroInfoImage = styled.img`
    position: absolute;
    bottom: 0%;
    right: 0;
    width: 16%;

    animation: lift 3s ease-in infinite;

    @keyframes lift {
        0% {
            bottom: 0%;
        }
        75% {
            bottom: 35%;
        }

        100% {
            bottom: 0%;
        }
    }

    @media (max-width: 768px) {
        width: 20%;
    }

    @media (max-width: 550px) {
        width: 32%;
    }
`;

export const MainTitle = styled.div`
    font-size: 2.5rem;
    font-weight: 900;
    color: ${props => props.theme.text};
    margin-bottom: 1.5rem;
    max-width: 70%;
    text-align: center;

    @media (max-width: 1200px) {
        max-width: 85%;
    }

    @media (max-width: 850px) {
        font-size: 2rem;
    }

    @media (max-width: 700px) {
        max-width: 90%;
        font-size: 1.5rem;
    }

    @media (max-width: 550px) {
        max-width: 95%;
    }

    animation: ${({ animationEnd }) => animationEnd ? shake : 'none'} 0.5s;

    &.shake {
        animation: ${shake} 0.5s;
    }
`;

export const Fancy = styled.span`
    color: #0085FF;
    padding-left: .5rem;
    font-family: ${props => props.theme.logoFont};
`;

export const HeroButton = styled(Link)`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    padding: 10px 65px;
    text-align: center;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 500;
    width: 40%;

    &:hover {
        background-color: ${props => props.theme.mayaBlueDark};
        animation: excited .3s 1;
    }

    @keyframes excited {
        50% {
            transform: scale(1.05) rotate(0.5deg);
        }
    }

    @media (max-width: 700px) {
        width: 60%;    
    }

    @media (max-width: 550px) {
        width: 80%;
    }
`;
