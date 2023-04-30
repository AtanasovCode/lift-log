import * as Styled from '../styles/Stats.Styled';
import { useState } from 'react';
import RocketLaunch from '@phosphor-icons/react/dist/icons/RocketLaunch';
import { Calendar, Barbell, ChartLine } from '@phosphor-icons/react';
import { theme } from '../styles/Theme';
import CalendarInput from './CalendarInput';
import ExerciseSelect from './ExerciseSelect';

import illustration from '../assets/illustrations/group-bg.svg';

const StrengthStats = ({
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
    handleCalendarSubmit,
    handleSubmitData,
}) => {
    return (
        <Styled.Container>

            <Styled.ImageContainer>
                <Styled.Illustration 
                    src={illustration}
                    alt="illustration of a man carrying a barbell with weight"
                />
            </Styled.ImageContainer>

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
                    handleCalendarSubmit={handleCalendarSubmit}
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
                                        color={theme.mayaBlue}
                                        weight="fill"
                                        size="100%"
                                    />
                                </Styled.LabelIcon>
                                <Styled.InputExercise
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
                                        color={theme.mayaBlue}
                                        weight="fill"
                                        size="100%"
                                    />
                                </Styled.LabelIcon>
                                <Styled.InputLifts
                                    type="button"
                                    value={calendarValue}
                                    onClick={handleCalendarShow}
                                />
                            </Styled.InputFieldContainer>
                        </Styled.LabelContainer>

                        <Styled.Submit
                            onClick={handleSubmitData}
                            color={theme.mayaBlue}
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

        </Styled.Container>
    );
}

export default StrengthStats;