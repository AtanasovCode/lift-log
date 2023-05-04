import { useContext, useState } from "react";
import { getExerciseIcon } from "./GetIcon";
import styled from "styled-components";
import { AppContext } from "./context/AppContext";
import { X } from "@phosphor-icons/react";

import { exercises } from "../assets/data/MockData";
import DropdownSelect from "./DropdownSelect";

interface Props {
    active: boolean,
}

const MultipleExerciseSelect = () => {

    const {
        numberOfExercises,
        showMultipleExercises, setShowMultipleExercises,
    } = useContext(AppContext);

    const [unit, setUnit] = useState("kg");

    const returnInputs = () => {
        let inputs = [];
        for (let i = 0; i < numberOfExercises; i++) {
            inputs.push([
                <Input key={i}>
                    <DropdownSelect />
                    <InputPR
                        type="text"
                        placeholder="Your PR"
                    />
                </Input>
            ])
        }

        return inputs;
    }

    return (
        <Container>
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

const Input = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;

    @media (max-width: 550px) {
        grid-template-columns: 1fr auto;
    }
`;

const InputPR = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    background-color: ${props => props.theme.richBlack};
    color: #fff;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;

    @media (max-width: 550px) {
        max-width: 80px;
    }
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