import { useContext, useState, useRef, useEffect } from "react";
import { getExerciseIcon } from "./GetIcon";
import styled from "styled-components";
import { AppContext } from "./context/AppContext";
import { Cpu, X } from "@phosphor-icons/react";

import { exercises } from "../assets/data/MockData";
import DropdownSelect from "./DropdownSelect";

const MultipleExerciseSelect = () => {

    //Used for calculating height
    const parentRef = useRef<HTMLDivElement>(null);


    const {
        numberOfExercises,
        showMultipleExercises, setShowMultipleExercises,
        toggleMultipleExercises,
        exercisesData, setExercisesData,
    } = useContext(AppContext);

    const [unit, setUnit] = useState<string>("kg");
    const [dropdownPosition, setDropdownPosition] = useState<string>("bottom");

    // Callback function to update exercisesData
    const handleExerciseDataUpdate = (index: number, name: string, pr: number) => {
        const updatedData = [...exercisesData];
        updatedData[index] = { name, pr };
        setExercisesData(updatedData);
    };



    const returnInputs = () => {
        let inputs = [];
        for (let i = 0; i < numberOfExercises; i++) {
            inputs.push([
                <DropdownSelect
                    key={i}
                    index={i}
                    onExerciseDataUpdate={handleExerciseDataUpdate}
                    parentRef={parentRef}
                />
            ])
        }

        return inputs;
    }


    const submitData = () => {
        let lifts = 0;

        exercisesData.map((lift) => {
            lift.name != "" && lift.pr > 0 && lifts++;
        })

        if (lifts == numberOfExercises) {
            sessionStorage.setItem("lifts", JSON.stringify(exercisesData));
            toggleMultipleExercises();
        }
    }

    return (
        <Container ref={parentRef}>
            <CloseIcon onClick={toggleMultipleExercises}>
                <X
                    size="100%"
                    weight="light"
                    color="#ccc"
                />
            </CloseIcon>
            <Heading>
                <Title>
                    Input your exercise PRs
                </Title>
                <Subtitle>
                    Enter your personal record (PR) for each lift in
                    <InputUnit defaultValue={unit}>
                        <UnitOption value="kg">kg</UnitOption>
                        <UnitOption value="lbs">lbs</UnitOption>
                    </InputUnit>
                </Subtitle>
            </Heading>

            <InputsContainer>
                {
                    returnInputs()
                }
            </InputsContainer>
            <SubmitData 
                type="button" 
                value="Submit" 
                onClick={submitData}
            />
        </Container>
    );
}

export default MultipleExerciseSelect;

const Container = styled.div`
    max-width: 650px;
    position: fixed;
    width: 60%;
    top: 50%;        
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: ${props => props.theme.richBlack};
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 35px;



    @media (max-width: 950px) {
        width: 80vw;
        max-width: 700px;
        padding: 25px;
    }

    @media (max-width: 700px) {
        width: 100vw;
        height: 100%;
        padding: 20px;
    }

    @media (max-width: 550px) {
        padding: 15px;
    }
`;

const CloseIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    cursor: pointer;
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    position: relative;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
`;

const Subtitle = styled.div`
    text-align: center;
    font-size: 15px;
    color: darkgray;
    margin: 0 15px;
`;


const InputsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
`;


const InputUnit = styled.select`
    background-color: ${props => props.theme.richBlack};
    border: none;
    color: darkgray;
    font-size: 14px;
    margin-left: 7px;
`;

const UnitOption = styled.option`
    background-color: ${props => props.theme.richBlack};
`;

const SubmitData = styled.input`
    min-width: 40%;
    border: none;
    background-color: ${props => props.theme.lightGreen};
    color: #000;
    font-weight: 600;
    margin-top: 40px;
    font-size: 16px;
    padding: 15px;
    border-radius: 12px;

    &:hover {
        background-color: ${props => props.theme.lighterGreen};
        cursor: pointer;
    }
`;