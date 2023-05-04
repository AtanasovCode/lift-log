import { useContext, useState } from "react";
import { getExerciseIcon } from "./GetIcon";
import styled from "styled-components";

import { exercises } from "../assets/data/MockData";
import DropdownSelect from "./DropdownSelect";

const MultipleExerciseSelect = () => {
    return (
        <Container>
            <Heading>
                <Title>
                    Input your exercise stats
                </Title>
            </Heading>

            <InputsContainer>
                <DropdownSelect />
            </InputsContainer>
        </Container>
    );
}

export default MultipleExerciseSelect;

const Container = styled.div`
    max-width: 650px;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: ${props => props.theme.richBlack};
    color: #fff;
    padding: 35px;
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
`;


const InputsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Input = styled.div``;