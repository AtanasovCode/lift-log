import styled from "styled-components";


interface Props {
    positive: boolean,
}

export const Container = styled.div`
    min-height: 100vh;
    padding: 80px 70px 50px 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};

    @media (max-width: 820px) {
        padding: 50px 20px 25px 20px;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        padding-top: 120px;
    }
`;

export const ChartContainer = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
        width: 80%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const LiftInfo = styled.div`
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
        width: 100%;
        margin-bottom: 60px;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const LiftIcon = styled.img`
    filter: invert(100%);
    margin-right: 10px;
    height: 40px;

    @media (max-width: 700px) {
        height: 55px;
    }
`;

export const LiftName = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 100%;

    @media (max-width: 700px) {
        width: 100%;
        font-size: 26px;
        }
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 100%;
`;

export const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LiftNumber = styled.div`
    font-size: 30px;
    font-weight: 800;
    color: ${props => props.theme.mayaBlue};
    margin-right: 7px;
    font-family: 'Dosis', sans-serif;
`;

export const LiftDesc = styled.div`
    font-size: 25px;
    font-weight: 900;
`;

export const Percent = styled.div<Props>`
    color: ${props => props.positive ? "lime" : "red"};
    margin-left: .5rem;
`;

export const Tip = styled.div`
    position: absolute;
    bottom: 1.5rem;
    font-size: 1rem;
    color: darkgray;
    opacity: .6;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
        transform: translateX(-300%);
    }
`;

export const ResetButton = styled.input`
    border-radius: 12px;
    background-color: ${props => props.theme.secondary};
    border: none;
    color: ${props => props.theme.text};
    font-weight: 600;
    text-align: center;
    padding: 10px;
    width: 40%;
    margin-top: 2rem;

    @media (max-width: 450px) {
        width: 70%;
    }

    &:hover {
        cursor: pointer;
    }
`;

export const Tooltip = styled.div`
    background-color: ${props => props.theme.richBlackDark};
    color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TooltipInfo = styled.div`
    font-size: 16px;
    margin-right: 7px;
`;

export const TooltipValue = styled.div`
    font-family: 'Dosis', sans-serif;
    color: ${props => props.theme.mayaBlue};
    font-size: 20px;
    font-weight: 900;
`;