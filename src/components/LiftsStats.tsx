import * as Styled from '../styles/Stats.Styled';
import { 
    HandFist, 
    ListNumbers, 
    Barbell,
    ChartDonut,
} from '@phosphor-icons/react';
import { theme } from '../styles/Theme';

import { AppContext } from './context/AppContext';
import { useContext } from 'react';

import ChartSelect from './ChartSelect';

import illustration from '../assets/illustrations/group-green-bg.svg'

const LiftsStats = ({
    handleExerciseSelected,
    handleCalendarSubmit,
    handleSubmitData,
}) => {

    const {
        userData, setUserData,
        showExercises,
        showCalendar, setShowCalendar,
        calendarValue,
        exerciseSelected,
        showCharts, setShowCharts,
        toggleCalendar,
        toggleCharts,
        toggleExercises,
    } = useContext(AppContext);

    return (
        <Styled.Container>
            <Styled.ImageContainer>
                <Styled.Illustration
                    src={illustration}
                />
            </Styled.ImageContainer>


            {/*Components for selecting chart type, exercises*/}
            <ChartSelect 
                active={showCharts} 
                handleChartsShow={handleChartsShow}
                showCharts={showCharts}
            />

            <Styled.TextContainer>
                <Styled.HeadingGreen>
                    <Styled.Title>
                        <Styled.GreenFancy>
                            Observe
                        </Styled.GreenFancy>
                        your
                        <Styled.GreenFancy>
                            strongest
                        </Styled.GreenFancy>
                        lifts
                    </Styled.Title>
                    <Styled.Icon>
                        <HandFist
                            color={theme.richBlackDark}
                            size="100%"
                            weight="fill"
                        />
                    </Styled.Icon>
                </Styled.HeadingGreen>

                <Styled.InputContainer>
                    <Styled.Inputs>
                        <Styled.LabelContainer>
                            <Styled.LabelText>
                                Number of exercises:
                            </Styled.LabelText>
                            <Styled.InputFieldContainer>
                                <Styled.LabelIcon>
                                    <ListNumbers
                                        size="100%"
                                        weight="light"
                                        color={theme.lightGreen}
                                    />
                                </Styled.LabelIcon>
                                <Styled.SelectField
                                    defaultValue="select"
                                >
                                    <Styled.SelectOption
                                        value="select"
                                        disabled
                                    >
                                        Select a number
                                    </Styled.SelectOption>
                                    <Styled.SelectOption value="1">
                                        1
                                    </Styled.SelectOption>
                                    <Styled.SelectOption value="2">
                                        2
                                    </Styled.SelectOption>
                                    <Styled.SelectOption value="3">
                                        3
                                    </Styled.SelectOption>
                                    <Styled.SelectOption value="4">
                                        4
                                    </Styled.SelectOption>
                                </Styled.SelectField>
                            </Styled.InputFieldContainer>
                        </Styled.LabelContainer>

                        <Styled.LabelContainer>
                            <Styled.LabelText>
                                Exercises:
                            </Styled.LabelText>
                            <Styled.InputFieldContainer>
                                <Styled.LabelIcon>
                                    <Barbell
                                        size="100%"
                                        color={theme.lightGreen}
                                        weight="light"
                                    />
                                </Styled.LabelIcon>
                                <Styled.InputExercise
                                    type="button"
                                    value="Select exercise"
                                    onClick={toggleExercises}
                                />
                            </Styled.InputFieldContainer>
                        </Styled.LabelContainer>

                        <Styled.LabelContainer>
                            <Styled.LabelText>
                                Chart type:
                            </Styled.LabelText>
                            <Styled.InputFieldContainer>
                                <Styled.LabelIcon>
                                    <ChartDonut
                                        size="100%"
                                        color={theme.lightGreen}
                                        weight="light"
                                    />
                                </Styled.LabelIcon>
                                <Styled.InputExercise 
                                    type="button"
                                    value="Select Chart"
                                    onClick={toggleCharts}
                                />
                            </Styled.InputFieldContainer>
                        </Styled.LabelContainer>
                    </Styled.Inputs>
                </Styled.InputContainer>
            </Styled.TextContainer>
        </Styled.Container>
    );
}

export default LiftsStats;