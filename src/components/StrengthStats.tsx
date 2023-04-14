import * as Styled from '../styles/Stats.Styled';
import RocketLaunch from '@phosphor-icons/react/dist/icons/RocketLaunch';
import { theme } from '../styles/Theme';
import ExerciseSelect from './ExerciseSelect';

const StrengthStats = () => {
    return (
        <Styled.Container>

            <Styled.Heading>
                <Styled.Title>
                    <Styled.Fancy>Visualize</Styled.Fancy>
                    your
                    <Styled.Fancy>power</Styled.Fancy>
                    increase
                </Styled.Title>

                <Styled.Icon>
                    <RocketLaunch 
                        size="100%" 
                        color={theme.mayaBlue} 
                        weight="fill" />
                </Styled.Icon>
                </Styled.Heading>

                <Styled.InputContainer>
                    
                </Styled.InputContainer>
        </Styled.Container>
    );
}

export default StrengthStats;