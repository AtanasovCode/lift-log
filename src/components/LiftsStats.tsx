import * as Styled from '../styles/Stats.Styled';
import { 
    HandFist, 
    ListNumbers, 
    Barbell,
    ChartDonut,
} from '@phosphor-icons/react';
import { theme } from '../styles/Theme';

import { AppContext } from './context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import ChartSelect from './ChartSelect';

import illustration from '../assets/illustrations/group-green-bg.svg'
import MultipleExerciseSelect from './MultipleExerciseSelect';

const LiftsStats = () => {

    const navigate = useNavigate();

    const {
        userData, setUserData,
        showExercises, setShowExercises,
        calendarValue,
        exerciseSelected,
        numberOfExercises, setNumberOfExercises,
        showMultipleExercises, setShowMultipleExercises,
        showCharts, setShowCharts,
        toggleCharts,
        toggleExercises,
    } = useContext(AppContext);

    const [numbers, setNumbers] = useState([2, 3, 4, 5, 6]);


    return (
        <Styled.Container>
            <Styled.ImageContainer>
                <Styled.Illustration
                    src={illustration}
                />
            </Styled.ImageContainer>


            {/*Components for selecting chart type, exercises*/}
            <ChartSelect />
            {showMultipleExercises == true && <MultipleExerciseSelect />}
           


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
                                Track:
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
                                        Exercises to track
                                    </Styled.SelectOption>
                                   {numbers.map((number) => {
                                    return  (
                                        <Styled.SelectOption 
                                            value={number}
                                            key={number}
                                            onClick={() => {
                                                setNumberOfExercises(number);
                                                sessionStorage.setItem("numberOfExercises", numberOfExercises);
                                            }}
                                        >
                                            {number} Exercises
                                        </Styled.SelectOption>
                                    );
                                   })}
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
                                    value="Select exercises"
                                    onClick={() => setShowMultipleExercises(true)}
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

                        <Styled.Submit
                            color={theme.lightGreen}
                        >
                            <Styled.SubmitIcon>
                                <ChartDonut
                                    size="100%"
                                    color={theme.richBlackDark}
                                    weight="fill"
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

export default LiftsStats;