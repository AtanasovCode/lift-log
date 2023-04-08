import * as Styled from '../styles/App.Styled';

import Hero from '../components/Hero';
import LiftProgressGraph from '../components/graphs/homepage-graphs/LiftProgressGraph';
import StrongestLiftsChart from '../components/graphs/homepage-graphs/StrongestLiftsGraph';


const Homepage = () => {
  return (
    <Styled.App>
      <Hero />
      <LiftProgressGraph />
      <StrongestLiftsChart />
    </Styled.App>
  )
}

export default Homepage;
