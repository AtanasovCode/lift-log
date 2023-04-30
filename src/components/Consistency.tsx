import { useState } from 'react';
import CalendarInput from './CalendarInput';
import ExerciseSelect from './ExerciseSelect';
import * as Styled from '../styles/Stats.Styled';
import { CalendarX, Calendar, Barbell, ChartLine } from '@phosphor-icons/react';
import { theme } from '../styles/Theme';

import illustration from '../assets/illustrations/group-orange-bg.svg';

const Consistency = ({
    userData,
    setUserData,
    handleExerciseSelected,
    handleExerciseShow,
    handleCalendarShow,
    showExercises,
    showCalendar,
    setShowCalendar,
    exerciseSelected,
    calendarValue,
    handleSubmitData,
}) => {
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
                                    onClick={handleExerciseShow}
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
                                    onClick={handleCalendarShow}
                                    color={theme.lightPurple}
                                />
                            </Styled.InputFieldContainer>
                        </Styled.LabelContainer>

                        <Styled.Submit
                            onClick={handleSubmitData}
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