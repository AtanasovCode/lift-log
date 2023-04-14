import * as Styled from '../styles/Stats.Styled';
import { Lightning, HandFist } from '@phosphor-icons/react';
import { theme } from '../styles/Theme';

const LiftsStats = () => {
    return (
        <Styled.Container>
            <Styled.Heading>
                <Styled.Title>
                    <Styled.GreenFancy>
                        Observe
                    </Styled.GreenFancy>
                    your
                    <Styled.GreenFancy>
                        strongest
                    </Styled.GreenFancy>
                    lifts
                </Styled.Title>
                <Styled.Icon>
                    <HandFist
                        color={theme.lighterGreen}
                        size="100%"
                        weight="fill"
                    />
                </Styled.Icon>
            </Styled.Heading>
        </Styled.Container>
    );
}

export default LiftsStats;