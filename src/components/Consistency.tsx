import * as Styled from '../styles/Stats.Styled';
import { Infinity, Repeat, CalendarX } from '@phosphor-icons/react';
import { theme } from '../styles/Theme';

const Consistency = () => {
    return (
        <Styled.Container>
            <Styled.TextContainer>
                <Styled.HeadingOrange>
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
                            weight="fill"
                            size="100%"
                            color={theme.richBlackDark}
                        />
                    </Styled.Icon>
                </Styled.HeadingOrange>
            </Styled.TextContainer>
        </Styled.Container>
    );
}

export default Consistency;