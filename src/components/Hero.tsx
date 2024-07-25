import React, { useEffect, useRef, useState } from 'react';
import * as Styled from '../styles/Hero.Styled';
import Nav from './navigation/Nav';
import logo from '../assets/logo.svg';
import barbell from '../assets/illustrations/barbell.svg';

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
        <Styled.HeroSection>
            <Styled.HeroImageContainer>
                <Styled.HeroImage
                    src={logo}
                    alt="power graphix logo"
                />
            </Styled.HeroImageContainer>

            <Styled.HeroInfo>
                <Styled.MainTitle animationEnd={animationEnd} ref={mainTitleRef}>
                    Visualize your strenght and progress
                    <Styled.Fancy>
                        effectively
                    </Styled.Fancy>
                </Styled.MainTitle>
                <Styled.HeroButton to="/get-stats">
                    Get Stats
                </Styled.HeroButton>
            </Styled.HeroInfo>
            <Styled.HeroInfoImage
                className="hero-info-image"
                src={barbell}
                alt="barbell illustration"
                ref={heroInfoImageRef}
            />
        </Styled.HeroSection>
    );
}

export default Hero;