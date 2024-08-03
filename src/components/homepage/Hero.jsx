import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import logo from '../../assets/logo.svg';
import barbell from '../../assets/illustrations/barbell.svg';
import Toggle from '../Toggle';

const Hero = () => {

    const mainTitleRef = useRef(null);
    const heroInfoImageRef = useRef(null);

    const [animationEnd, setAnimationEnd] = useState(false);

    useEffect(() => {
        const handleAnimationEnd = () => {
            setAnimationEnd(true);
            setTimeout(() => {
                setAnimationEnd(false);
            }, 500); // Duration of the shake animation
        };

        const heroInfoImage = heroInfoImageRef.current;
        if (heroInfoImage) {
            heroInfoImage.addEventListener('animationiteration', handleAnimationEnd);
        }

        return () => {
            if (heroInfoImage) {
                heroInfoImage.removeEventListener('animationiteration', handleAnimationEnd);
            }
        };
    }, []);


    return (
        <HeroSection>
            <HeroImageContainer>
                <ToggleContainer>
                    <Toggle />
                </ToggleContainer>

                <HeroImage
                    src={logo}
                    alt="power graphix logo"
                />
            </HeroImageContainer>

            <HeroInfo>
                <MainTitle animationEnd={animationEnd} ref={mainTitleRef}>
                    Visualize your strength and progress
                    <Fancy>
                        effectively
                    </Fancy>
                </MainTitle>
                <HeroButton to="/input-stats">
                    Get Stats
                </HeroButton>
            </HeroInfo>
            <HeroInfoImage
                className="hero-info-image"
                src={barbell}
                alt="barbell illustration"
                ref={heroInfoImageRef}
            />
        </HeroSection>
    );
}

export default Hero;


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

const HeroSection = styled.div`
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

const HeroImageContainer = styled.div`
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

const ToggleContainer = styled.div`
    position: absolute;
    bottom: 5%;
    left: 5%;
    z-index: 11;
`;

const HeroImage = styled.img`
    width: 75%;

    @media (max-width: 1024px) {
        width: 20%;
    }

    @media (max-width: 768px) {
        width: 30%;
    }
`;

const HeroInfo = styled.div`
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

const HeroInfoImage = styled.img`
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

const MainTitle = styled.div`
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

const Fancy = styled.span`
    color: #0085FF;
    padding-left: .5rem;
    font-family: ${props => props.theme.logoFont};
`;

const HeroButton = styled(Link)`
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
