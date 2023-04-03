import { useState } from 'react'

import Nav from './components/navigation/Nav';
import TestGraph from './components/graphs/TestGraph';

import * as Styled from './styles/App.Styled';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Styled.App>
      <Styled.Hero>
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

      </Styled.Hero>
      <TestGraph />
    </Styled.App>
  )
}

export default App
