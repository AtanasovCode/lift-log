import * as Styled from '../styles/Stats.Styled';
import { Infinity, Repeat, CalendarX } from '@phosphor-icons/react';
import { theme } from '../styles/Theme';

const Consistency = () => {
    return (
        <Styled.Container>
            <Styled.Heading>
                <Styled.Title>
                    <Styled.PurpleFancy>
                        Track
                    </Styled.PurpleFancy>
                    your
                    <Styled.PurpleFancy>
                        workout
                    </Styled.PurpleFancy>
                    consistency
                </Styled.Title>
                <Styled.Icon>
                    <CalendarX 
                        weight="duotone"
                        size="100%"
                        color={theme.lightPurple}
                    />
                </Styled.Icon>
            </Styled.Heading>
        </Styled.Container>
    );
}

export default Consistency;