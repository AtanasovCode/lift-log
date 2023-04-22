import styled from "styled-components";
import image from '../assets/images/header-s.jpg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    color: #fff;
    background-color: ${props => props.theme.richBlackDark};
`;

export const ImageContainer = styled.div`
`;


export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${props => props.theme.richBlackDark};
    padding: 35px 50px;
    width: 100%;

    @media (max-width: 700px) {
        padding: 35px;
    }

    @media (max-width: 550px) {
        padding: 0;
    }
`;

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    padding: 25px;
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

    @media (max-width: 550px) {
        flex-direction: column-reverse;
        margin-top: 35px;
        animation: slideIn .456s ease 1;
        border-radius: 55px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

export const HeadingGreen = styled(Heading)`
    background-color: ${props => props.theme.lightGreen};
`;

export const HeadingBlue = styled(Heading)`
    background-color: ${props => props.theme.mayaBlue};
`;

export const HeadingOrange = styled(Heading)`
    background-color: ${props => props.theme.lightPurple};
`;


export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: #000;
    
    @media (max-width: 750px) {
        font-size: 24px;
    }

    @media (max-width: 550px) {
        font-weight: 900;
        font-size: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const Fancy = styled.span`
    color: ${props => props.theme.mayaBlue};
    margin: 0 6px;
    background-color: ${props => props.theme.richBlackDark};
    padding: 8px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 550px) {
        margin: 7px 0;
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
    width: 60px;
    height: 60px;

    @media (max-width: 750px) {
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
`;

export const InputExercise = styled.input`
    border: 1px solid ${props => props.theme.mayaBlue};
    background-color: transparent;
    margin-left: 10px;
    color: #fff;
    font-size: 18px;
    padding: 5px;
    padding-left: 7px;
`;

export const LabelText = styled.div`
    font-size: 18px;
    color: #fff;
`;