import * as Styled from '../styles/Stats.Styled';
import {
    HandFist,
    ListNumbers,
    Barbell,
    ChartDonut,
    ChartBar,
    ChartBarHorizontal,
    ChartPieSlice,
    IconWeight,
} from '@phosphor-icons/react';
import { theme } from '../styles/Theme';

import { AppContext } from './context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import ChartSelect from './ChartSelect';

import illustration from '../assets/illustrations/illustration-lifts.svg'
import MultipleExerciseSelect from './MultipleExerciseSelect';

interface Props {
    errorActive: boolean,
    setErrorActive: Function,
}

interface Exercises {
    name: string,
    pr: number,
}


const LiftsStats = ({
    errorActive, setErrorActive,
}: Props) => {

    const navigate = useNavigate();

    const {
        numberOfExercises, setNumberOfExercises,
        showMultipleExercises, setShowMultipleExercises,
        exercisesData, setExercisesData,
        showCharts, setShowCharts,
        toggleCharts, toggleMultipleExercises,
    } = useContext(AppContext);

    useEffect(() => {
        console.log(exercisesData);
    }, [exercisesData])

    const [numbers, setNumbers] = useState([2, 3, 4, 5, 6]);
    const [chartType, setChartType] = useState("");

    const submitData = (e: any) => {

        e.preventDefault();

        let chart = sessionStorage.getItem("chartType");
        let lifts = 0;
        let stringExercises = sessionStorage.getItem("lifts");
        let exercises = JSON.parse(stringExercises);

        exercises && exercises.map((lift: any) => {
            if (lift.name && lift.pr) {
                lifts++;
            }
        })

        if (chart && lifts == numberOfExercises) {
            setErrorActive(false);
            navigate("/get-stats/lifts-stats");
        } else {
            setErrorActive(true);
        }
    }

    type IconWeight = 'light' | 'regular' | 'bold' | 'duotone' | 'fill';

    const getChartIcon = (name: string, weight: IconWeight | undefined, color: string) => {
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
                <Styled.Heading color={theme.accent}>
                    <Styled.Title>
                        <Styled.Fancy color={theme.accent}>
                            Observe
                        </Styled.Fancy>
                        your
                        <Styled.Fancy color={theme.accent}>
                            strongest
                        </Styled.Fancy>
                        lifts
                    </Styled.Title>
                    <Styled.Icon>
                        <HandFist
                            color={theme.background}
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
                                        color={theme.accent}
                                    />
                                </Styled.LabelIcon>
                                <Styled.SelectField
                                    defaultValue={2}
                                    color={theme.accent}
                                    onChange={(e) => {
                                        setNumberOfExercises(e.currentTarget.value);
                                        sessionStorage.setItem("numberOfExercises", e.currentTarget.value.toString());
                                    }}
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
                                        color={theme.accent}
                                        weight="light"
                                    />
                                </Styled.LabelIcon>
                                <Styled.InputExercise
                                    type="button"
                                    value={sessionStorage.getItem("lifts") ? "Exercises Updated" : "Input Exercises"}
                                    color={theme.accent}
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
                                    {getChartIcon(chartType, "light", theme.accent)}
                                </Styled.LabelIcon>
                                <Styled.InputExercise
                                    type="button"
                                    value={chartType ? chartType : "Select Chart"}
                                    color={theme.accent}
                                    onClick={toggleCharts}
                                />
                            </Styled.InputFieldContainer>
                        </Styled.LabelContainer>

                        <Styled.Submit
                            color={theme.accent}
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

                            {
                                errorActive &&
                                <Styled.ErrorMessage>
                                    There is some data missing!
                                </Styled.ErrorMessage>
                            }
                        </Styled.Submit>

                    </Styled.Inputs>
                </Styled.InputContainer>
            </Styled.TextContainer>
        </Styled.Container>
    );
}

export default LiftsStats;