import { useContext, useState, useRef, useEffect } from "react";
import useWindowSize from "./hooks/UseWindow";
import styled from "styled-components";
import { AppContext } from "./context/AppContext";
import { Cpu, X } from "@phosphor-icons/react";

import { exercises } from "../assets/data/MockData";
import DropdownSelect from "./DropdownSelect";

const MultipleExerciseSelect = () => {

    //Used for calculating height
    const parentRef = useRef<HTMLDivElement>(null);
    const size = useWindowSize();


    const {
        numberOfExercises,
        showMultipleExercises, setShowMultipleExercises,
        toggleMultipleExercises,
        exercisesData, setExercisesData,
    } = useContext(AppContext);

    const [unit, setUnit] = useState<string>("kg");
    const [dropdownPosition, setDropdownPosition] = useState<string>("bottom");
    const [errorMessage, setErrorMessage] = useState(false);
    const [mobileView, setMobileView] = useState(false);

    // Callback function to update exercisesData
    const handleExerciseDataUpdate = (index: number, name: string, pr: number) => {
        const updatedData = [...exercisesData];
        updatedData[index] = { name, pr };
        setExercisesData(updatedData);
    };

    useEffect(() => {
        let w = size.width;

        w <= 768 ? setMobileView(true) : setMobileView(false);
    }, [size])


    const returnInputs = () => {
        let inputs = [];
        for (let i = 0; i < numberOfExercises; i++) {
            inputs.push([
                <DropdownSelect
                    key={i}
                    index={i}
                    onExerciseDataUpdate={handleExerciseDataUpdate}
                    parentRef={parentRef}
                    mobileView={mobileView}
                />
            ])
        }

        return inputs;
    }


    const submitData = (e: any) => {

        let lifts = 0;

        exercisesData.map((lift) => {
            if(lift.name && lift.pr > 0) lifts++;
        })

        if (lifts == numberOfExercises) {
            sessionStorage.setItem("lifts", JSON.stringify(exercisesData));
            toggleMultipleExercises();
        } else {
            setErrorMessage(true);
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
            {
                errorMessage && <Error>Provide data to all input fields!</Error>
            }
        </Container>
    );
}

export default MultipleExerciseSelect;

const Container = styled.div`
    max-width: 1024px;
    position: fixed;
    width: 50%;
    top: 50%;        
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: ${props => props.theme.background};
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text};
    padding: 3rem;
    border-radius: 16px;

    @media (max-width: 1024px) {
        width: 70%;
        padding: 1.5rem;
    }

    @media (max-width: 768px) {
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        transform: translateX(0) translateY(0);
        padding: 1.5rem;
        border-radius: 0;
    }

    @media (max-width: 550px) {
        padding: 1rem;
    }
`;

const CloseIcon = styled.div`
    position: absolute;
    top: 5%;
    right: 3%;
    width: 30px;
    cursor: pointer;
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    position: relative;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1.2rem;
`;

const Subtitle = styled.div`
    text-align: center;
    font-size: 15px;
    color: darkgray;
    margin: 0 1rem;
`;


const InputsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
`;

const SubmitData = styled.input`
    width: 100%;
    border: none;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    font-weight: 600;
    margin-top: 3rem;
    font-size: 16px;
    padding: 1rem;
    border-radius: 16px;

    &:hover {
        cursor: pointer;
    }
`;

const Error = styled.div`
    font-size: 13px;
    font-weight: 300;
    color: #ff4c4c;
    margin-top: 10px;
    text-align: center;
`;