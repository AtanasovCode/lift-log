import styled from "styled-components";

import header from '../assets/images/header.jpg';

export const App = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const Hero = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;

    background: linear-gradient(
        to right,
        ${props => props.theme.richBlack} 25%,
        transparent
    ), url(${header});

    background-size: cover;
    background-position: 50% 85%;
    background-repeat: no-repeat;
    overflow: hidden;
`;

export const HeaderTint = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
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
`;

export const MainTitle = styled.div`
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 30px;
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