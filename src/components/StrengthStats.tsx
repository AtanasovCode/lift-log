import * as Styled from '../styles/Stats.Styled';
import { useState } from 'react';
import RocketLaunch from '@phosphor-icons/react/dist/icons/RocketLaunch';
import { Calendar, Barbell } from '@phosphor-icons/react';
import { theme } from '../styles/Theme';
import CalendarInput from './CalendarInput';
import ExerciseSelect from './ExerciseSelect';

const StrengthStats = ({ userData, setUserData }) => {

    const [showCalendar, setShowCalendar] = useState(false);
    const [showExercises, setShowExercises] = useState(false);
    const [exerciseSelected, setExerciseSelected] = useState("Select an Exercise");

    const handleCalendarShow = () => {
        setShowCalendar(!showCalendar);
    }

    const handleExerciseShow = () => {
        setShowExercises(!showExercises);
    }

    const handleExerciseSelected = (name: string) => {
        setExerciseSelected(name);
        handleExerciseShow();
    }

    return (
        <Styled.Container>

            <Styled.ImageContainer />

            <Styled.TextContainer>

                <Styled.HeadingBlue>
                    <Styled.Title>
                        <Styled.Fancy>Visualize</Styled.Fancy>
                        your
                        <Styled.Fancy>power</Styled.Fancy>
                        increase
                    </Styled.Title>

                    <Styled.Icon>
                        <RocketLaunch
                            size="100%"
                            color={theme.richBlackDark}
                            weight="fill" />
                    </Styled.Icon>
                </Styled.HeadingBlue>

                {/*Input components that are activated on button click*/}
                <ExerciseSelect
                    handleExerciseShow={handleExerciseShow}
                    showExercises={showExercises}
                    handleExerciseSelected={handleExerciseSelected}
                />
                <CalendarInput
                    userData={userData}
                    setUserData={setUserData}
                    showCalendar={showCalendar}
                    setShowCalendar={setShowCalendar}
                    handleCalendarShow={handleCalendarShow}
                />
                {/*===================================================*/}


                <Styled.InputContainer>
                    <Styled.LabelContainer>
                        <Styled.LabelText>
                            Exercise:
                        </Styled.LabelText>
                        <Styled.InputExercise
                            type="text"
                            value={exerciseSelected}
                            placeholder="chose exercise..."
                            onClick={handleExerciseShow}
                        />
                    </Styled.LabelContainer>
                </Styled.InputContainer>

            </Styled.TextContainer>

        </Styled.Container>
    );
}

export default StrengthStats;