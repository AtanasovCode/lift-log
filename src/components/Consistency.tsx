import { useState } from 'react';
import CalendarInput from './CalendarInput';
import ExerciseSelect from './ExerciseSelect';
import * as Styled from '../styles/Stats.Styled';
import { CalendarX, Calendar, Barbell } from '@phosphor-icons/react';
import { theme } from '../styles/Theme';

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
}) => {
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

                    <Styled.LabelContainer>
                        <Styled.LabelText>
                            Exercise:
                            <Styled.LabelIcon>
                                <Barbell
                                    color={theme.lightPurple}
                                    weight="fill"
                                    size="100%"
                                />
                            </Styled.LabelIcon>
                        </Styled.LabelText>
                        <Styled.InputExerciseOrange
                            type="input"
                            value={exerciseSelected}
                            readOnly
                            onClick={handleExerciseShow}
                        />
                    </Styled.LabelContainer>

                    <Styled.LabelContainer>
                        <Styled.LabelText>
                            Lifts:
                            <Styled.LabelIcon>
                                <Calendar
                                    color={theme.lightPurple}
                                    weight="fill"
                                    size="100%"
                                />
                            </Styled.LabelIcon>
                        </Styled.LabelText>
                        <Styled.InputLifts
                            type="button"
                            value="Input lift data"
                            onClick={handleCalendarShow}
                        />
                    </Styled.LabelContainer>

                    <Styled.SubmitOrange
                        type="button"
                        to="/get-stats/your-stats"
                    >
                        Submit Data
                    </Styled.SubmitOrange>

                </Styled.InputContainer>

            </Styled.TextContainer>
        </Styled.Container >
    );
}

export default Consistency;