import styled from "styled-components";
import { Link } from "react-router-dom";
import image from '../assets/images/header-s.jpg';
import ExerciseSelect from "../components/ExerciseSelect";

interface Props {
    active: boolean,
}

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
    justify-content: center;
    margin-top: 30px;
    color: #fff;
    background-color: ${props => props.theme.richBlackDark};
    padding-bottom: 25px;

    @media (max-width: 700px) {
        flex-direction: column-reverse;
    }
`;

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 700px) {
        margin-top: 35px;
    }
`;

export const Illustration = styled.img`
    width: 57%;
    min-width: 300px;

    @media (max-width: 930px) {
        min-width: 230px;
    }

    @media (max-width: 700px) {
        width: 200px;
    }
`;


export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${props => props.theme.richBlackDark};
    padding: 0px 50px;

    @media (max-width: 700px) {
        padding: 0;
    }

    @media (max-width: 550px) {
        padding: 0;
    }
`;

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 15px;
    background-color: ${props => props.theme.richBlackDark};

    @keyframes slideIn {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        50% {
            opacity: .4;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @media (max-width: 700px) {
        width: 100%;
        flex-direction: column-reverse;
        margin-top: 35px;
        animation: slideIn .456s ease 1;
        border-radius: 55px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding: 25px 0;
    }
`;

export const HeadingGreen = styled(Heading)`
    @media (max-width: 700px) {
        background-color: ${props => props.theme.lightGreen};
    }
`;

export const HeadingBlue = styled(Heading)`
    @media (max-width: 700px) {
        background-color: ${props => props.theme.mayaBlue};
    }
`;

export const HeadingOrange = styled(Heading)`
    @media (max-width: 700px) {
        background-color: ${props => props.theme.lightPurple};
    }
`;


export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: #fff;

    @media (max-width: 930px) {
        font-size: 22px;
    }
    

    @media (max-width: 700px) {
        font-weight: 900;
        font-size: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        color: #000;
    }
`;

export const Fancy = styled.span`
    color: ${props => props.theme.mayaBlue};
    margin: 0 6px;
    text-align: center;

    @media (max-width: 700px) {
        margin: 7px 0;
        background-color: ${props => props.theme.richBlackDark};
        border-radius: 8px;
        padding: 8px;
    }
`;

export const GreenFancy = styled(Fancy)`
    color: ${props => props.theme.lightGreen};
`;

export const PurpleFancy = styled(Fancy)`
    color: ${props => props.theme.lightPurple};
`;

export const Icon = styled.div`
    margin-left: 6px;
    width: 0;
    height: 0;

    @media (max-width: 700px) {
        width: 50px;
        height: 50px;
    }
    
    @media (max-width: 550px) {
        width: 70px;
        height: 70px;

    }
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 45px;
    padding: 0 20px;
`;

export const Inputs = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (max-width: 550px) {
        width: 90%;
    }

    @media (max-width: 400px) {
        width: 90%;
    }
`;

export const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 25px;
    position: relative;

    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

export const InputFieldContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-width: 250px;
    margin-left: 10px;
`;

export const LabelText = styled.div`
    font-size: 18px;
    color: #fff;

    /* max-width: 180px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; */

    @media (max-width: 550px) {
        font-size: 17px;
    }
`;

export const SelectField = styled.select`
    width: 100%;
    border: 1px solid ${props => props.theme.mayaBlue};
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    padding-left: 55px;
    border-radius: 12px;
    color: darkgray;

    @media (max-width: 550px) {
        width: 100%;
        margin-top: 12px;
    }
`;

export const SelectOption = styled.option`
    background-color: ${props => props.theme.richBlackDark};
    color: #fff;
`;


export const InputExercise = styled.input`
    width: 100%;
    border: 1px solid ${props => props.theme.mayaBlue};
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    padding-left: 55px;
    border-radius: 12px;
    color: darkgray;
    text-align: left;

    @media (max-width: 550px) {
        width: 100%;
        margin-top: 12px;
    }
`;

export const InputExerciseGreen = styled(InputExercise)`border: 1px solid ${props => props.theme.lightGreen};`;

export const InputExerciseOrange = styled(InputExercise)`border: 1px solid ${props => props.theme.lightPurple};`;

export const InputLifts = styled(InputExercise)`
    cursor: pointer;

    border-color: ${props => props.color};

    &:hover {
        background-color: ${props => props.theme.mayaBluePale};
    }
`;

export const LabelIcon = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    left: 8%;

    @media (max-width: 550px) {
        width: 35px;
        height: 35px;
        bottom: 5%;
    }
`;


export const Submit = styled.div`
    background-color: ${props => props.color};
    color: #000;
    padding: 10px 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius: 12px;
    font-weight: 600;
    position: relative;
    cursor: pointer;
    user-select: none;
    width: 100%;
`;

export const SubmitGreen = styled(Submit)`
    background-color: ${props => props.theme.lightGreen};
`;

export const SubmitOrange = styled(Submit)`
    background-color: ${props => props.theme.lightPurple};
`;

export const SubmitIcon = styled.div`
    width: 35px;
    height: 35px;
    position: absolute;
    left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;