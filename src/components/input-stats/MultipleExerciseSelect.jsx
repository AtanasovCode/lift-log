import { useContext, useState, useRef, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import { X } from "@phosphor-icons/react";
import { useStore } from "../../../useStore";

import DropdownSelect from "./DropdownSelect";

const MultipleExerciseSelect = () => {

    // Used for calculating height
    const parentRef = useRef(null);
    const size = useWindowSize();

    const {
        numberOfExercises,
        showMultipleExercises, setShowMultipleExercises,
        toggleMultipleExercises,
        exercisesData, setExercisesData,
    } = useStore();

    const [errorMessage, setErrorMessage] = useState(false);
    const [mobileView, setMobileView] = useState(false);

    // Callback function to update exercisesData
    const handleExerciseDataUpdate = (index, name, pr) => {
        const updatedData = [...exercisesData];
        updatedData[index] = { name, pr };
        setExercisesData(updatedData);
    };

    useEffect(() => {
        const w = size.width;
        setMobileView(w <= 768);
    }, [size]);

    const returnInputs = () => {
        const inputs = [];
        for (let i = 0; i < numberOfExercises; i++) {
            inputs.push(
                <DropdownSelect
                    key={i}
                    index={i}
                    onExerciseDataUpdate={handleExerciseDataUpdate}
                    parentRef={parentRef}
                    mobileView={mobileView}
                />
            );
        }

        return inputs;
    };

    const submitData = (e) => {
        let lifts = 0;

        exercisesData.forEach((lift) => {
            if (lift.name && lift.pr > 0) lifts++;
        });

        if (lifts === parseInt(numberOfExercises)) {
            sessionStorage.setItem("lifts", JSON.stringify(exercisesData));
            toggleMultipleExercises();
        } else {
            setErrorMessage(true);
        }
    };

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
                {returnInputs()}
            </InputsContainer>
            <SubmitData
                type="button"
                value="Submit"
                onClick={submitData}
                $error={errorMessage}
            />
            {errorMessage && <Error>Please fill in all empty fields</Error>}
        </Container>
    );
};

export default MultipleExerciseSelect;

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100dvh;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.background};
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text};
    padding: 1.2rem;

    @media (min-width: 768px) {
        width: 80%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 16px;
        padding: 1.5rem;
    }

    @media (min-width: 1024px) {
        width: 50%;
        max-width: 60rem;
        padding: 2rem;
    }

    @media (min-width: 1330px) {
        width: 45%;
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
        background-color: ${props => props.theme.mayaBlueDark};
    }

    ${props => props.$error && `
        border: 1px solid ${props.theme.error};
    `}
`;

const Error = styled.div`
    font-size: 13px;
    font-weight: 300;
    color: ${props => props.theme.error};
    margin-top: 10px;
    text-align: center;
`;
