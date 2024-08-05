import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    padding: 1rem 2rem;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 1rem 0;
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
        width: 70%;
    }

    @media (max-width: 550px) {
        width: 80%;
    }
`;


export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

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

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column-reverse;
        margin-top: 2rem;
        animation: slideIn .456s ease 1;
        border-radius: 60px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        background-color: ${props => props.theme.secondary};
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
    

    @media (max-width: 768px) {
        font-weight: 900;
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        color: #fff;
    }
`;

export const Fancy = styled.span`
    color: ${props => props.color};
    margin: 0 6px;
    text-align: center;

    @media (max-width: 768px) {
        color: ${props => props.color};
        margin: 7px 0;
        border-radius: 8px;
        padding: 8px;
        color: #fff;
    }
`;

export const Icon = styled.div`
    margin-left: 6px;
    width: 0;
    height: 0;

    @media (max-width: 768px) {
        width: 90px;
        height: 90px;
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
    justify-content: flex-start;
    margin-top: 2.5rem;

    @media (max-width: 768px) {
        padding: 0 2rem;
    }
`;

export const Inputs = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
`;

export const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.4rem;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const InputFieldContainer = styled.div`
    font-size: 16px;
    padding: .5rem 1rem;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    user-select: none;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

export const LabelText = styled.div`
    font-size: 18px;
    color: ${props => props.theme.text};
    width: 35%;


    @media (max-width: 768px) {
        width: 100%;
        text-align: left;
        padding-left: .5rem;
        font-size: 17px;
        margin-bottom: .4rem;
    }
`;

export const SelectField = styled.select`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    border: none;
    font-size: 18px;
    padding: .5rem;
    padding-left: 60px;
    border-radius: 16px;
    width: 100%;
    border: transparent;
`;

export const SelectOption = styled.option`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    border: none;
`;


export const InputExercise = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputLifts = styled(InputExercise)`
    cursor: pointer;

    border-color: ${props => props.color};

    &:hover {
        background-color: ${props => props.theme.secondary};
    }
`;

export const LabelIcon = styled.div`
    width: 22px;
    height: 22px;
    margin-right: 1rem;

    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;


export const Submit = styled.div`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    padding: .5rem .7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border-radius: 16px;
    font-weight: 600;
    position: relative;
    cursor: pointer;
    user-select: none;
    width: 100%;
`;

export const SubmitIcon = styled.div`
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`;


export const ErrorMessage = styled.div`
    font-size: 15px;
    color: #fa2a2a;
    font-weight: 300;
    position: absolute;
    bottom: -25px;
`;