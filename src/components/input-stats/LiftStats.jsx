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
import styled from 'styled-components';

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
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

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

        if (chart && lifts === parseInt(numberOfExercises)) {
            navigate("/lift-result");
        } else {
            console.log("Missing data");
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
                                <DropdownContainer onClick={() => toggleDropdown()}>
                                    <DropdownValue>
                                        <DropdownIcon></DropdownIcon>
                                        <DropdownText>{numberOfExercises}</DropdownText>
                                    </DropdownValue>
                                    <DropdownMenu isOpen={isOpen}>
                                        <DropdownHeading>
                                            Exercises to track
                                        </DropdownHeading>
                                        {
                                            numbers.map((number) => {
                                                return (
                                                    <DropdownItem
                                                        onClick={() => {
                                                            sessionStorage.setItem("numberOfExercises", parseInt(number))
                                                            setNumberOfExercises(number);
                                                            toggleDropdown();
                                                        }}
                                                    >
                                                        {number}
                                                    </DropdownItem>
                                                );
                                            })
                                        }
                                    </DropdownMenu>
                                </DropdownContainer>
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

const DropdownContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: flex-start;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    padding: .5rem;
    border-radius: 16px;
`;

const DropdownIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
`;

const DropdownValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`;

const DropdownText = styled.div`
    font-size: 1rem;
`;

const DropdownMenu = styled.div`
    width: 100%;
    height: 0;
    display: none;
    user-select: none;
    padding: .5rem;
    background-color: transparent;
    z-index: 5;
    transition: all .4s ease-in-out;
    position: absolute;
    left: 0;
    top: 0;

    ${props => props.isOpen && `
        display: block;
        height: auto;
        top: 105%;
        background-color: ${props.theme.secondary};
        backdrop-filter: blur(20px);
        z-index: 9;
        border-radius: 16px;

    `}
`;

const DropdownHeading = styled.div`
    width: 100%;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 1rem;
`;

const DropdownItem = styled.div`
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: .5rem;

    &:hover {
        background-color: ${props => props.theme.mayaBlueDark};
    }
`;