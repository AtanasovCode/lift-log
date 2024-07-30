import * as Styled from '../styles/Stats.Styled';
import { useState, useContext } from 'react';
import RocketLaunch from '@phosphor-icons/react/dist/icons/RocketLaunch';
import { Calendar, Barbell, ChartLine } from '@phosphor-icons/react';
import { theme } from '../styles/Theme';
import CalendarInput from './CalendarInput';
import ExerciseSelect from './ExerciseSelect';

import illustration from '../assets/illustrations/illustration-strength.svg';

import { AppContext } from './context/AppContext';

import { useNavigate } from 'react-router-dom';

interface Props {
    errorActive: boolean,
    setErrorActive: Function,
}

const StrengthStats = ({
    errorActive, setErrorActive,
}: Props) => {

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
    } = useContext(AppContext);

    const navigate = useNavigate();

    //Checks to see if user has selected an exercise
    //and has values for at least 3 lifts
    //If true, the function navigates to the results page
    const submitData = () => {
        let lifts = 0;

        userData.map((lift: any) => {
            if (lift.weight > 0) lifts++;
        })

        if (lifts >= 3 && exerciseSelected != "Select an exercise") {
            setErrorActive(false);
            navigate("/get-stats/results");
        } else {
            setErrorActive(true);
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
                                color={theme.richBlackDark}
                                weight="fill" />
                        </Styled.Icon>
                    </Styled.Heading>

                    {/*Input components that are activated on button click*/}
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
                                <Styled.InputFieldContainer>
                                    <Styled.LabelIcon>
                                        <Barbell
                                            color={theme.text}
                                            weight="fill"
                                            size="100%"
                                        />
                                    </Styled.LabelIcon>
                                    <Styled.InputExercise
                                        type="button"
                                        value={exerciseSelected}
                                        onClick={toggleExercises}
                                    />
                                </Styled.InputFieldContainer>
                            </Styled.LabelContainer>

                            <Styled.LabelContainer>
                                <Styled.LabelText>
                                    Lifts:
                                </Styled.LabelText>
                                <Styled.InputFieldContainer>
                                    <Styled.LabelIcon>
                                        <Calendar
                                            color={theme.text}
                                            weight="fill"
                                            size="100%"
                                        />
                                    </Styled.LabelIcon>
                                    <Styled.InputLifts
                                        type="button"
                                        value={calendarValue}
                                        onClick={toggleCalendar}
                                    />
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
                                        weight="fill"
                                    />
                                </Styled.SubmitIcon>
                                Get Results

                                {
                                    errorActive &&
                                    <Styled.ErrorMessage>
                                        There is some data missing!
                                    </Styled.ErrorMessage>
                                }
                            </Styled.Submit>
                        </Styled.Inputs>

                    </Styled.InputContainer>
                </Styled.TextWrapper>
            </Styled.TextContainer>

        </Styled.Container>
    );
}

export default StrengthStats;