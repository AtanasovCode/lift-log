import * as Styled from '../styles/StrengthStats.Styled';
import RocketLaunch from '@phosphor-icons/react/dist/icons/RocketLaunch';
import { theme } from '../styles/Theme';

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
                <RocketLaunch size={48} color={theme.mayaBlue} weight="duotone" />
            </Styled.Heading>
        </Styled.Container>
    );
}

export default StrengthStats;