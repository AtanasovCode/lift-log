import * as Styled from '../../styles/Styled.Stats'
import { useTheme } from 'styled-components';
import { Calendar, Barbell, ChartLine, RocketLaunch } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../useStore';


import CalendarInput from './CalendarInput';
import ExerciseSelect from './ExerciseSelect';

import illustration from '../../assets/illustrations/illustration-strength.svg';
import { useState } from 'react';


const StrengthStats = () => {

    const {
        userData, setUserData,
        showExercises,
        showCalendar, setShowCalendar,
        calendarValue, setCalendarValue,
        exerciseSelected, setExerciseSelected,
        showCharts, setShowCharts,
        toggleCalendar,
        toggleCharts,
        toggleExercises,
    } = useStore();

    const navigate = useNavigate();
    const theme = useTheme();

    const [error, setError] = useState(false);

    // Checks to see if user has selected an exercise
    // and has values for at least 3 lifts
    // If true, the function navigates to the results page
    const submitData = () => {
        let lifts = 0;

        userData.map((lift) => {
            if (lift.weight > 0) lifts++;
        })

        if (lifts >= 3 && exerciseSelected !== "Select an exercise") {
            setError(false);
            navigate("/strength-result");
        } else {
            setError(true);
        }
    }

    return (
        <Styled.Container>
            <Styled.ImageContainer>
                <Styled.Illustration
                    src={illustration}
                    alt="illustration of a man carrying a barbell with weight"
                />
            </Styled.ImageContainer>

            <Styled.TextContainer>
                <Styled.TextWrapper>
                    <Styled.Heading color={theme.accent}>
                        <Styled.Title>
                            <Styled.Fancy color={theme.accent}>Visualize</Styled.Fancy>
                            your
                            <Styled.Fancy color={theme.accent}>strength</Styled.Fancy>
                            increase
                        </Styled.Title>

                        <Styled.Icon>
                            <RocketLaunch
                                size="100%"
                                color="#fff"
                                weight="fill" />
                        </Styled.Icon>
                    </Styled.Heading>

                    {/* Input components that are activated on button click */}
                    {showExercises && <ExerciseSelect />}
                    {showCalendar && <CalendarInput />}
                    {showExercises && <Styled.Tint />}
                    {showCalendar && <Styled.Tint />}

                    <Styled.InputContainer>
                        <Styled.Inputs>
                            <Styled.LabelContainer>
                                <Styled.LabelText>
                                    Exercise:
                                </Styled.LabelText>
                                <Styled.InputFieldContainer onClick={toggleExercises}>
                                    <Styled.LabelIcon>
                                        <Barbell
                                            color={theme.text}
                                            weight="fill"
                                            size="100%"
                                        />
                                    </Styled.LabelIcon>
                                    <Styled.InputExercise>
                                        {exerciseSelected}
                                    </Styled.InputExercise>
                                </Styled.InputFieldContainer>
                            </Styled.LabelContainer>

                            <Styled.LabelContainer>
                                <Styled.LabelText>
                                    Lifts:
                                </Styled.LabelText>
                                <Styled.InputFieldContainer onClick={toggleCalendar}>
                                    <Styled.LabelIcon>
                                        <Calendar
                                            color={theme.text}
                                            weight="fill"
                                            size="100%"
                                        />
                                    </Styled.LabelIcon>
                                    <Styled.InputLifts>
                                        {calendarValue}
                                    </Styled.InputLifts>
                                </Styled.InputFieldContainer>
                            </Styled.LabelContainer>

                            <Styled.Submit
                                onClick={submitData}
                                color={theme.accent}
                            >
                                <Styled.SubmitIcon>
                                    <ChartLine
                                        size="100%"
                                        color={theme.text}
                                        weight="thin"
                                    />
                                </Styled.SubmitIcon>
                                Get Results

                                {error && (
                                    <Styled.ErrorMessage>
                                        There is some data missing!
                                    </Styled.ErrorMessage>
                                )}
                            </Styled.Submit>
                        </Styled.Inputs>
                    </Styled.InputContainer>
                </Styled.TextWrapper>
            </Styled.TextContainer>
        </Styled.Container>
    );
}

export default StrengthStats;