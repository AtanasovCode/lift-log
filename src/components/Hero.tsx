import * as Styled from '../styles/Hero.Styled';
import Nav from './navigation/Nav';

const Hero = () => {
    return (
        <Styled.HeroSection>
            <Nav />

            <Styled.HeroInfo>
                <Styled.MainTitle>
                    Track your strength and progress
                    <Styled.Fancy>
                        effectively
                    </Styled.Fancy>
                </Styled.MainTitle>
                <Styled.HeroButton
                    type="button"
                    value="Get Stats!"
                />
            </Styled.HeroInfo>

        </Styled.HeroSection>
    );
}

export default Hero;