import styled from "styled-components";

import header from '../assets/images/header.jpg';
import headerMobile from '../assets/images/header-mobile.jpg';

export const HeroSection = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;

    background: linear-gradient(
        to right,
        ${props => props.theme.richBlackDark} 25%,
        transparent
    ), url(${header});

    background-size: cover;
    background-position: 50% 85%;
    background-repeat: no-repeat;
    overflow: hidden;

    @media (max-width: 700px) {
        display:flex;
        align-items: center;
        justfiy-content: center;
        background: url(${headerMobile});
        background-position: center;
    }
`;

export const HeaderTint = styled.div`
    @media (max-width: 700px) {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .7);
        z-index: 1;    
    }
`;

export const HeroInfo = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 2;
    margin-left: 65px;

    animation: fadeIn 1.2s 1;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 700px) {
        margin-left: 0;
        align-items: center;
        text-align: center;
    }
`;

export const MainTitle = styled.div`
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 30px;

    @media (max-width: 700px) {
        font-size: 30px;
        margin: 0 20px;
    }
`;

export const Fancy = styled.span`
    color: ${props => props.theme.lightGreen};
    padding-left: 7px;
`;

export const HeroButton = styled.input`
    background-color: ${props => props.theme.lightGreen};
    color: #000;
    padding: 10px 65px;
    text-align: center;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 500;

    &:hover {
        background-color: ${props => props.theme.darkGreen};
        animation: excited .3s 1;
    }

    @keyframes excited {
        50% {
            transform: scale(1.05) rotate(0.5deg);
        }
    }
`;