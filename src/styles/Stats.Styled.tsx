import styled from "styled-components";
import { Link } from "react-router-dom";
import image from '../assets/images/header-s.jpg';

interface Props{
    active: boolean,
    tint: boolean,
}

interface PropsHeading {
    color: string,
}

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    padding-bottom: 1.5rem;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding-bottom: 1rem;
    }
`;

export const Tint = styled.div`
    background-color: rgba(0, 0, 0, .8);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 6;
`;

export const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
        margin-top: 3rem;
    }
`;

export const Illustration = styled.img`
    width: 60%;

    @media (max-width: 1024px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        width: 50%;
    }
`;


export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Heading = styled.div<PropsHeading>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 15px;

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

    @media (max-width: 625px) {
        width: 100%;
        flex-direction: column-reverse;
        margin-top: 35px;
        animation: slideIn .456s ease 1;
        border-radius: 55px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        background-color: ${props => props.color};
        padding: 25px 0;
    }
`;


export const Title = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.text};

    @media (max-width: 930px) {
        font-size: 1.5rem;
    }
    

    @media (max-width: 625px) {
        font-weight: 900;
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        color: #000;
    }
`;

export const Fancy = styled.span`
    color: ${props => props.color};
    margin: 0 6px;
    text-align: center;

    @media (max-width: 625px) {
        color: ${props => props.color};
        margin: 7px 0;
        background-color: ${props => props.theme.background};
        border-radius: 8px;
        padding: 8px;
    }
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
    padding: 0 1.2rem;
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
    color: ${props => props.theme.text};


    @media (max-width: 550px) {
        font-size: 17px;
    }
`;

export const SelectField = styled.select`
    width: 100%;
    border: 1px solid ${props => props.color};
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-size: 18px;
    padding: .5rem;
    padding-left: 55px;
    border-radius: 12px;
    color: darkgray;

    @media (max-width: 550px) {
        width: 100%;
        margin-top: 12px;
        padding-left: 65px;
    }
`;

export const SelectOption = styled.option`
    background-color: ${props => props.theme.background};
    color: #fff;
`;


export const InputExercise = styled.input`
    width: 100%;
    border: 1px solid ${props => props.color};
    background-color: transparent;
    font-size: 18px;
    padding: 10px;
    padding-left: 55px;
    border-radius: 12px;
    color: darkgray;
    text-align: left;

    @media (max-width: 550px) {
        width: 100%;
        margin-top: 12px;
        padding-left: 65px;
    }
`;

export const InputLifts = styled(InputExercise)`
    cursor: pointer;

    border-color: ${props => props.color};

    &:hover {
        background-color: ${props => props.theme.secondary};
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

export const SubmitIcon = styled.div`
    width: 35px;
    height: 35px;
    position: absolute;
    left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const ErrorMessage = styled.div`
    font-size: 15px;
    color: #fa2a2a;
    font-weight: 300;
    position: absolute;
    bottom: -25px;
`;