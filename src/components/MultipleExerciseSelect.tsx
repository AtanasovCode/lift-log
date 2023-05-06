import { useContext, useState, useRef, useEffect } from "react";
import { getExerciseIcon } from "./GetIcon";
import styled from "styled-components";
import { AppContext } from "./context/AppContext";
import { Cpu, X } from "@phosphor-icons/react";

import { exercises } from "../assets/data/MockData";
import DropdownSelect from "./DropdownSelect";

interface Props {
    active: boolean,
}

const MultipleExerciseSelect = () => {

    //Used for calculating height
    const parentRef = useRef<HTMLDivElement>(null);


    const {
        numberOfExercises,
        showMultipleExercises, setShowMultipleExercises,
    } = useContext(AppContext);

    const [unit, setUnit] = useState<string>("kg");
    const [dropdownPosition, setDropdownPosition] = useState<string>("bottom");
    const [exerciseData, setExerciseData] = useState([]);


    //Used to check the distance between the bottom of the 
    //child element (the dropdown component) and the bottom of this component
    //If there is not enough space, it tells the dropdown component to 
    //display it's list of exercise above and not below.
    const checkDistance = (childBottom: number) => {
        const parentBottom: any = parentRef.current != null && parentRef.current.getBoundingClientRect().bottom;
        const distance = parentBottom - childBottom;

        let result: string = distance >= 120 ? "bottom" : "top";

        setDropdownPosition(result);
    }

    const submitData = () => {

        let lifts = 0;
        exerciseData.map(() => {
            lifts++;
        })

        if (lifts == numberOfExercises) {
            sessionStorage.setItem("userDataLifts", JSON.stringify(exerciseData));
            setShowMultipleExercises(false);
        } else {
            console.log("not enough info");
        }

    }

    const returnInputs = () => {
        let inputs = [];
        for (let i = 0; i < numberOfExercises; i++) {
            inputs.push([
                <DropdownSelect
                    key={i}
                    checkDistance={checkDistance}
                    dropdownPosition={dropdownPosition}
                    setExerciseData={setExerciseData}
                    exerciseData={exerciseData}
                />
            ])
        }


        useEffect(() => {
            console.log(exerciseData);
        }, [exerciseData])

        return inputs;
    }

    return (
        <Container ref={parentRef}>
            <CloseIcon onClick={() => setShowMultipleExercises(false)}>
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
            <input type="button" onClick={submitData} value="click" />
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