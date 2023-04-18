import * as Styled from '../styles/Stats.Styled';
import { useState } from 'react';
import RocketLaunch from '@phosphor-icons/react/dist/icons/RocketLaunch';
import { theme } from '../styles/Theme';
import CalendarInput from './CalendarInput';
import ExerciseSelect from './ExerciseSelect';

const StrengthStats = ({userData, setUserData}) => {

    const [showCalendar, setShowCalendar] = useState(false);

    const handleCalendarShow = () => {
        setShowCalendar(!showCalendar);
    }

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
                    <Styled.CalendarButton 
                        type="button" 
                        value="Show Calender" 
                        onClick={handleCalendarShow} 
                    />
                    <CalendarInput 
                        userData={userData} 
                        setUserData={setUserData}
                        showCalendar={showCalendar}
                        setShowCalendar={setShowCalendar}
                        handleCalendarShow={handleCalendarShow}
                    />
                </Styled.InputContainer>
                <ExerciseSelect />
        </Styled.Container>
    );
}

export default StrengthStats;