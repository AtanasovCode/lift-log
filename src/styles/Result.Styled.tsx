import styled from "styled-components";


interface Props {
    positive: boolean
}

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.richBlackDark};
    color: #fff;
    padding: 45px;
`;

export const ChartContainer = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LiftInfo = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LiftIcon = styled.img`
    filter: invert(100%);
    margin-right: 20px;
    height: 80px;
`;

export const LiftText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const LiftName = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LiftData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const LiftStats = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

export const Stat = styled.div`
    margin-left: 5px;
`;

export const Improved = styled.div`
    display: flex;
`;

export const Percent = styled.div<Props>`
    color: ${props => props.positive ? "lime" : "red"};
    margin-left: 7px;
`;

export const Tip = styled.div`
    position: absolute;
    bottom: 25px;
    font-size: 15px;
    color: darkgray;
    opacity: .6;
    display: flex;
    align-items: center;
    justify-content: center;
`;