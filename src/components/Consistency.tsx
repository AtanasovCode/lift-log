import { useState, useContext } from 'react';
import CalendarInput from './CalendarInput';
import ExerciseSelect from './ExerciseSelect';
import * as Styled from '../styles/Stats.Styled';
import { CalendarX, Calendar, Barbell, ChartLine } from '@phosphor-icons/react';
import { theme } from '../styles/Theme';
import { useNavigate } from 'react-router-dom';

import { AppContext } from './context/AppContext';

import illustration from '../assets/illustrations/group-orange-bg.svg';

const Consistency = () => {

    const navigate = useNavigate();


    const {
        userData, setUserData,
        setExercise, toggleExercises,
        toggleCalendar,
        showCalendar, showExercises,
        exerciseSelected,
        calendarValue,
        submitData,
    } = useContext(AppContext);


    return (
        <Styled.Container>

            <Styled.ImageContainer>
                <Styled.Illustration
                    src={illustration}
                />
            </Styled.ImageContainer>

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

                {/*Component that activate on button click*/}

                <ExerciseSelect />
                <CalendarInput />
                {/*===================================================*/}


                <Styled.InputContainer>
                    <Styled.Inputs>
                        <Styled.LabelContainer>
                            <Styled.LabelText>
                                Exercise:
                            </Styled.LabelText>
                            <Styled.InputFieldContainer>
                                <Styled.LabelIcon>
                                    <Barbell
                                        color={theme.lightPurple}
                                        weight="fill"
                                        size="100%"
                                    />
                                </Styled.LabelIcon>
                                <Styled.InputExerciseOrange
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
                                        color={theme.lightPurple}
                                        weight="fill"
                                        size="100%"
                                    />
                                </Styled.LabelIcon>
                                <Styled.InputLifts
                                    type="button"
                                    value={calendarValue}
                                    onClick={toggleCalendar}
                                    color={theme.lightPurple}
                                />
                            </Styled.InputFieldContainer>
                        </Styled.LabelContainer>

                        <Styled.Submit
                            onClick={submitData(navigate)}
                            color={theme.lightPurple}
                        >
                            <Styled.SubmitIcon>
                                <ChartLine
                                    size="100%"
                                    color={theme.richBlackDark}
                                    weight="light"
                                />
                            </Styled.SubmitIcon>
                            Get Results
                        </Styled.Submit>
                    </Styled.Inputs>
                </Styled.InputContainer>

            </Styled.TextContainer>
        </Styled.Container >
    );
}

export default Consistency;