import { useState } from 'react'

import Nav from './components/navigation/Nav';
import Hero from './components/Hero';
import TestGraph from './components/graphs/TestGraph';
import LiftProgressGraph from './components/graphs/homepage-graphs/LiftProgressGraph';

import * as Styled from './styles/App.Styled';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Styled.App>
      <Hero />
      <LiftProgressGraph />
    </Styled.App>
  )
}

export default App
