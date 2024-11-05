import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    margin-top: 4rem;
    
    @media (min-width: 1024px) {
        width: 75%;
        max-width: 75rem;
        margin-top: 3rem;
    }

    
    @media (min-width: 1330px) {
        width: 50%;
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


export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    width: 100%;
    animation: slideIn .456s ease-in-out 1;
    border-radius: 60px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: ${props => props.theme.secondary};
    padding: 1.5rem 2.5rem;


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

    @media (min-width: 1024px) {
        flex-direction: row;
        position: relative;
        animation: none;
        flex-direction: row-reverse;
        border-radius: 16px;
        width: 100%;
        margin-bottom: 2.5rem;
    }
`;


export const Title = styled.div`
    font-size: 2rem;
    font-weight: 900;
    color: ${props => props.theme.text};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (min-width: 1024px) {
        font-size: 2rem;
        font-weight: 900;
        flex-direction: row;
        align-items: center;
    }
    

    @media (max-width: 768px) {

    }
`;

export const Fancy = styled.span`
    color: ${props => props.color};
    margin: 7px 0;
    border-radius: 8px;
    padding: 8px;
    color: ${props => props.color};

    @media (min-width: 1024px) {
        margin: 0 6px;
        text-align: center;
    }
`;

export const Icon = styled.div`
    margin-left: 6px;
    width: 70px;
    height: 70px;

    @media (min-width: 550px) {
        width: 90px;
        height: 90px;

    }

    @media (min-width: 1024px) {
        width: 75px;
        height: 75px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 1.5rem;

    @media (min-width: 768px) {
        padding: 3.5rem;
    }
    
    @media (min-width: 1024px) {
        padding: 0;
    }
`;

export const Inputs = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
`;

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 1.4rem;
    position: relative;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 2.3rem;
    }

    @media (min-width: 1024px) {
        margin-bottom: 1.5rem;
    }
`;

export const InputFieldContainer = styled.div`
    font-size: 1rem;
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    user-select: none;
    cursor: pointer;

    @media (min-width: 768px) {
        padding: 1.1rem 1.6rem;
    }

    @media (min-width: 768px) {
        padding: .9rem 1.3rem;
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
    width: 100%;
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
    color: ${props => props.theme.error};
    font-weight: 300;
    position: absolute;
    bottom: -25px;
`;