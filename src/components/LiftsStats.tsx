import * as Styled from '../styles/Stats.Styled';
import {
    HandFist,
    ListNumbers,
    Barbell,
    ChartDonut,
    ChartBar,
    ChartBarHorizontal,
    ChartPieSlice,
} from '@phosphor-icons/react';
import { theme } from '../styles/Theme';

import { AppContext } from './context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import ChartSelect from './ChartSelect';

import illustration from '../assets/illustrations/group-yellow-bg.svg'
import MultipleExerciseSelect from './MultipleExerciseSelect';

const LiftsStats = () => {

    const navigate = useNavigate();

    const {
        numberOfExercises, setNumberOfExercises,
        showMultipleExercises, setShowMultipleExercises,
        exercisesData, setExercisesData,
        showCharts, setShowCharts,
        toggleCharts, toggleMultipleExercises,
    } = useContext(AppContext);

    const [numbers, setNumbers] = useState([2, 3, 4, 5, 6]);
    const [chartType, setChartType] = useState("");

    const submitData = () => {
        let chart = sessionStorage.getItem("chartType");
        let numExercises = sessionStorage.getItem("numberOfExercises");

        if (chart && numExercises) {
            navigate("/get-stats/lifts-stats");
        }
    }

    const getChartIcon = (name: string, weight: string, color: string) => {
        switch (name) {
            case "Pie Chart": return (
                <ChartPieSlice
                    size="100%"
                    color={color}
                    weight={weight}
                />
            );
            case "Donut Chart": return (
                <ChartDonut
                    size="100%"
                    color={color}
                    weight={weight}
                />
            );
            case "Bar Chart": return (
                <ChartBar
                    size="100%"
                    weight={weight}
                    color={color}
                />
            );
            case "H. Bar Chart": return (
                <ChartBarHorizontal
                    size="100%"
                    weight={weight}
                    color={color}
                />
            );
            default: return (
                <ChartBarHorizontal
                    size="100%"
                    weight={weight}
                    color={color}
                />
            );
        }
    }

    return (
        <Styled.Container>
            {showMultipleExercises && <Styled.Tint />}
            {showCharts && <Styled.Tint />}
            <Styled.ImageContainer>
                <Styled.Illustration
                    src={illustration}
                />
            </Styled.ImageContainer>


            {/*Components for selecting chart type, exercises...*/}
            {showCharts && <ChartSelect setChartType={setChartType} getChartIcon={getChartIcon} />}
            {showMultipleExercises && <MultipleExerciseSelect />}



            <Styled.TextContainer>
                <Styled.Heading color={theme.darkYellow}>
                    <Styled.Title>
                        <Styled.Fancy color={theme.darkYellow}>
                            Observe
                        </Styled.Fancy>
                        your
                        <Styled.Fancy color={theme.darkYellow}>
                            strongest
                        </Styled.Fancy>
                        lifts
                    </Styled.Title>
                    <Styled.Icon>
                        <HandFist
                            color={theme.richBlackDark}
                            size="100%"
                            weight="fill"
                        />
                    </Styled.Icon>
                </Styled.Heading>

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
                                        color={theme.darkYellow}
                                    />
                                </Styled.LabelIcon>
                                <Styled.SelectField
                                    defaultValue={2}
                                    color={theme.darkYellow}
                                >
                                    <Styled.SelectOption
                                        value="select"
                                        disabled
                                    >
                                        Exercises to track
                                    </Styled.SelectOption>
                                    {numbers.map((number) => {
                                        return (
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
                                        color={theme.darkYellow}
                                        weight="light"
                                    />
                                </Styled.LabelIcon>
                                <Styled.InputExercise
                                    type="button"
                                    value={exercisesData.length ? "Exercises Updated" : "Input Exercises"}
                                    color={theme.darkYellow}
                                    onClick={toggleMultipleExercises}
                                />
                            </Styled.InputFieldContainer>
                        </Styled.LabelContainer>

                        <Styled.LabelContainer>
                            <Styled.LabelText>
                                Chart type:
                            </Styled.LabelText>
                            <Styled.InputFieldContainer>
                                <Styled.LabelIcon>
                                    {getChartIcon(chartType, "light", theme.darkYellow)}
                                </Styled.LabelIcon>
                                <Styled.InputExercise
                                    type="button"
                                    value={chartType ? chartType : "Select Chart"}
                                    color={theme.darkYellow}
                                    onClick={toggleCharts}
                                />
                            </Styled.InputFieldContainer>
                        </Styled.LabelContainer>

                        <Styled.Submit
                            color={theme.darkYellow}
                            onClick={submitData}
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