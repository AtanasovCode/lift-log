import wave from '../assets/wave.svg';
import styled from 'styled-components';

import Hero from '../components/homepage/Hero';
import LiftProgressGraph from '../components/homepage/LiftProgressGraph';
import StrongestLiftsGraph from '../components/homepage/StrongestLiftsGraph';
import Footer from '../components/homepage/Footer';


const Homepage = () => {
  return (
    <App>
      <Hero />
      <LiftProgressGraph />
      <StrongestLiftsGraph />
      <Footer />
    </App>
  )
}

export default Homepage;

export const App = styled.main`
    display: flex;
    flex-direction: column;
`;

const LayeredWavesFooter = styled.div`
    width: 100%;
    aspect-ratio: 960/118;
    background-image: url(${wave});
    background-color: ${props => props.theme.richBlackDark};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;