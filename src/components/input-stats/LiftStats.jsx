import * as Styled from '../../styles/Styled.Stats';
import { useTheme } from 'styled-components';
import {
    HandFist,
    ListNumbers,
    Barbell,
    ChartDonut,
    ChartBar,
    ChartBarHorizontal,
    ChartPieSlice,
} from '@phosphor-icons/react';
import { useStore } from '../../../useStore';
import { getChartIcon } from '../../Utils';

import MultipleExerciseSelect from './MultipleExerciseSelect';
import ChartSelect from './ChartSelect';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';


import illustration from '../../assets/illustrations/illustration-lifts.svg';

const LiftStats = ({ errorActive, setErrorActive }) => {

    const navigate = useNavigate();
    const theme = useTheme();

    const {
        numberOfExercises, setNumberOfExercises,
        showMultipleExercises, setShowMultipleExercises,
        exercisesData, setExercisesData,
        showCharts, setShowCharts,
        toggleCharts, toggleMultipleExercises,
        chartType, setChartType,
    } = useStore();

    //used for selecting number of exercises to track
    const [numbers, setNumbers] = useState([2, 3, 4, 5, 6]);

    const submitData = (e) => {
        e.preventDefault();

        const chart = sessionStorage.getItem("chartType");
        let lifts = 0;
        const stringExercises = sessionStorage.getItem("lifts");
        const exercises = JSON.parse(stringExercises);

        exercises && exercises.map((lift) => {
            if (lift.name && lift.pr) {
                lifts++;
            }
        });

        if (chart && lifts === numberOfExercises) {
            navigate("/lift-result");
        } else {
        }
    };

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
                <Styled.TextWrapper>
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
                                            weight="fill"
                                            color={theme.text}
                                        />
                                    </Styled.LabelIcon>
                                    <Styled.SelectField
                                        defaultValue={2}
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
                                        {numbers.map((number) => (
                                            <Styled.SelectOption
                                                value={number}
                                                key={number}
                                            >
                                                {number} Exercises
                                            </Styled.SelectOption>
                                        ))}
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
                                            color={theme.text}
                                            weight="fill"
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
                                        {getChartIcon(chartType, "fill", theme.text)}
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
                                        color={theme.text}
                                        weight="fill"
                                    />
                                </Styled.SubmitIcon>
                                Get Results

                                {errorActive &&
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
};

export default LiftStats;
