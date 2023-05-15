import * as Styled from '../styles/App.Styled';
import styled from 'styled-components';

import layeredWavesFooter from '../assets/illustrations/layered-waves-footer.svg';
import layeredWavesFooter700 from '../assets/illustrations/layered-waves-footer-700.svg';
import layeredWavesFooter400 from '../assets/illustrations/layered-waves-footer-400.svg';

import layeredWaves from '../assets/illustrations/layered-waves.svg';
import layeredWaves700 from '../assets/illustrations/layered-waves-700.svg';
import layeredWaves400 from '../assets/illustrations/layered-waves-400.svg';


import Hero from '../components/Hero';
import LiftProgressGraph from '../components/graphs/homepage-graphs/LiftProgressGraph';
import StrongestLiftsChart from '../components/graphs/homepage-graphs/StrongestLiftsGraph';
import Footer from '../components/Footer';


const Homepage = () => {
  return (
    <Styled.App>
      <Hero />
      <LiftProgressGraph />
      <LayeredWaves />
      <StrongestLiftsChart />
      <LayeredWavesFooter />
      <Footer />
    </Styled.App>
  )
}

export default Homepage;


const LayeredWavesFooter = styled.div`
    width: 100%;
    aspect-ratio: 960/118;
    background-image: url(${layeredWaves});
    background-color: ${props => props.theme.richBlackDark};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 700px) {
      background-image: url(${layeredWavesFooter700})
    }
`;

const LayeredWaves = styled.div`
    width: 100%;
    aspect-ratio: 960/108;
    background-image: url(${layeredWavesFooter});
    background-color: ${props => props.theme.darkYellow};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    
    @media (max-width: 700px) {
      background-image: url(${layeredWaves700})
    }

    @media (max-width: 400px) {
      background-image: url(${layeredWaves400});
      aspect-ratio: 400/108;
    }
`;