import styled from "styled-components";


interface Props {
    positive: boolean,
}

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};

    @media (max-width: 768px) {
        
    }

    @media (max-width: 700px) {
        flex-direction: column;
        padding-top: 120px;
    }
`;

export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    padding: 0 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ChartContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 80vw;
    }

    @media (max-width: 525px) {
        width: 90vw;
    }
`;

export const LiftInfo = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        width: 30%;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 4rem;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const LiftIcon = styled.img`
    filter: invert(100%);
    margin-right: 12px;
    height: 80px;

    @media (max-width: 768px) {
        height: 75px;
    }
`;

export const LiftName = styled.div`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LiftNumber = styled.div`
    font-size: 2rem;
    font-weight: 900;
    color: ${props => props.theme.accent};
    margin-right: 7px;
    font-family: 'Dosis', sans-serif;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const LiftDesc = styled.div`
    font-size: 1.5rem;
    font-weight: 800;

    @media (max-width: 1024px) {
        font-size: 1.2rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const Percent = styled.div<Props>`
    color: ${props => props.positive ? props.theme.accent : "red"};
    margin-left: .5rem;
`;

export const Tip = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2%;
    font-size: 1rem;
    color: #959292;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
        transform: translateX(-300%);
    }
`;

export const ResetButton = styled.input`
    border-radius: 16px;
    background-color: ${props => props.theme.secondary};
    border: none;
    color: ${props => props.theme.text};
    font-weight: 700;
    text-align: center;
    padding: .7rem 1.2rem; 
    width: 100%;
    margin-top: 2rem;

    &:hover {
        background-color: ${props => props.theme.mayaBlueDark};
        animation: excited .3s 1;
    }

    @keyframes excited {
        50% {
            transform: scale(1.07) rotate(0.5deg);
        }
    }
`;

export const Tooltip = styled.div`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    border-radius: 16px;
    padding: .6rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TooltipInfo = styled.div`
    margin-right: 7px;
`;

export const TooltipValue = styled.div`
    font-family: 'Dosis', sans-serif;
    color: ${props => props.theme.accent};
    font-size: 20px;
    font-weight: 900;
`;