import * as Styled from '../styles/Stats.Styled';
import { useState } from 'react';
import RocketLaunch from '@phosphor-icons/react/dist/icons/RocketLaunch';
import { Calendar, Barbell, ChartLine } from '@phosphor-icons/react';
import { theme } from '../styles/Theme';
import CalendarInput from './CalendarInput';
import ExerciseSelect from './ExerciseSelect';

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
}) => {
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
                            <Styled.LabelIcon>
                                <Barbell
                                    color={theme.mayaBlue}
                                    weight="fill"
                                    size="100%"
                                />
                            </Styled.LabelIcon>
                        </Styled.LabelText>
                        <Styled.InputExercise
                            type="text"
                            value={exerciseSelected}
                            placeholder="chose exercise..."
                            onClick={handleExerciseShow}
                        />
                    </Styled.LabelContainer>

                    <Styled.LabelContainer>
                        <Styled.LabelText>
                            Lifts:
                            <Styled.LabelIcon>
                                <Calendar
                                    color={theme.mayaBlue}
                                    weight="fill"
                                    size="100%"
                                />
                            </Styled.LabelIcon>
                        </Styled.LabelText>
                        <Styled.InputLifts
                            type="input"
                            value="Input lift data"
                            onClick={handleCalendarShow}
                        />
                    </Styled.LabelContainer>

                    <Styled.Submit
                        type="button"
                        to="/get-stats/your-stats"
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

                </Styled.InputContainer>

            </Styled.TextContainer>

        </Styled.Container>
    );
}

export default StrengthStats;