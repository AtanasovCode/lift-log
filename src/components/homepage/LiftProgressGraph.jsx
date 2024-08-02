import { useContext, useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import {
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

import { LiftDataBench, LiftDataSquat, LiftDataDeadlift } from "../../assets/data/MockData";

const LiftProgressGraph = () => {

    const [chartHeight, setChartHeight] = useState();

    const theme = useContext(ThemeContext);

    const size = useWindowSize();

    useEffect(() => {
        let w = size.width;

        if (w !== undefined) {
            if (w >= 1000) setChartHeight(280);
            else if (w < 1000 && w >= 500) setChartHeight(250);
            else if (w < 700 && w >= 500) setChartHeight(180);
            else if (w < 550) setChartHeight(160);
        }

    }, [size.width]);

    function CustomTooltip({ label, payload, active }) {
        const getFullMonth = (label) => {
            let month = "";
            switch (label) {
                case "Jan": month = "January"; break;
                case "Feb": month = "February"; break;
                case "Mar": month = "March"; break;
                case "Apr": month = "April"; break;
                case "May": month = "May"; break;
                case "Jun": month = "June"; break;
                case "Jul": month = "July"; break;
                case "Aug": month = "August"; break;
                case "Sep": month = "September"; break;
                case "Oct": month = "October"; break;
                case "Nov": month = "November"; break;
                case "Dec": month = "December"; break;
            }

            return month;
        }

        if (active) {
            return (
                <TooltipContainer key={label}>
                    <TooltipHeading>
                        {getFullMonth(label)}
                    </TooltipHeading>
                    {payload.map((info) => (
                        <TooltipBody key={info.payload.Exercise}>
                            <TooltipInfo>
                                {info.payload.Exercise}:
                            </TooltipInfo>
                            <TooltipInfo>
                                {info.payload.Lift}kg
                            </TooltipInfo>
                        </TooltipBody>
                    ))}
                </TooltipContainer>
            );
        }
        return null;
    }

    function CustomDot() {
        return (
            <TooltipDot />
        );
    }

    return (
        <Container>
            <Info>
                Visualize your strength increase with <Fancy>ease</Fancy>
            </Info>
            <Chart>
                <ResponsiveContainer width={'99%'} height={chartHeight}>
                    <LineChart
                        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    >
                        <XAxis dataKey="Month" xAxisId={"bench"} tick={{ fontSize: 10 }} />
                        <XAxis xAxisId={"squat"} hide />
                        <XAxis xAxisId={"deadlift"} hide />
                        <YAxis domain={[35, 240]} width={40} yAxisId={"bench"} />
                        <YAxis domain={[35, 240]} width={40} yAxisId={"squat"} hide />
                        <YAxis domain={[35, 240]} width={40} yAxisId={"deadlift"} hide />
                        <Line
                            data={LiftDataDeadlift}
                            dataKey="Lift"
                            stroke={"#FFF"}
                            xAxisId={"deadlift"}
                            yAxisId={"deadlift"}
                            dot={<CustomDot />}
                        />
                        <Line
                            data={LiftDataBench}
                            dataKey="Lift"
                            stroke={"#0099ff"}
                            xAxisId={"bench"}
                            yAxisId={"bench"}
                            dot={<CustomDot />}
                        />
                        <Line
                            data={LiftDataSquat}
                            dataKey="Lift"
                            stroke={"#fc65f7"}
                            xAxisId={"squat"}
                            yAxisId={"squat"}
                            dot={<CustomDot />}
                        />
                        <Tooltip content={<CustomTooltip />} />
                    </LineChart>
                </ResponsiveContainer>
            </Chart>
        </Container>
    );
}

export default LiftProgressGraph;

const Container = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
    justify-content: space-between;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    padding: 2.5rem;
    margin: 2rem 0; 
    width: 100vw;

    @media (max-width: 1000px) {
        padding: 80px;
        padding-bottom: 190px;
    }
    
    @media (max-width: 900px) {
        padding: 80px 20px;
        padding-bottom: 190px;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 500px) {
        padding-bottom: 120px;
    }
`;

const Info = styled.div`
    flex: 1;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    max-width: 35%;

    @media (max-width: 1200px) {
        max-width: 55%;
    }

    @media (max-width: 900px) {
        font-size: 1.7rem;
        max-width: 85%;
    }

    @media (max-width: 700px) {
        font-size: 23px;
        display: flex;
        flex-direction: column;
        margin-bottom: 55px;
    }
`;


const Fancy = styled.span`
    color: ${props => props.theme.accent};
    color: ${props => props.theme.background};
    -webkit-text-stroke: 1px ${props => props.theme.accent};
    font-size: 2rem;
    transition: color .3s ease;

    &:hover {
        color: ${props => props.theme.accent};
        cursor: pointer;
    }
`;


const Chart = styled.div`
    width: 33vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 2.5rem;

    @media (max-width: 700px) {
        margin: 0 20px;
        width: 100%;
    }
`;

const ChartDescription = styled.div`
    position: absolute;
    bottom: -15px;
    font-size: 12px;
    font-weight: 300;
    color: darkgray;

    @media (max-width: 700px) {
        opacity: 0;
        user-select: none;
        left: -200%;
    }
`;

const TooltipContainer = styled.div`
    padding: 10px 12px;
    background-color: ${props => props.theme.background};
    border: none;
`;

const TooltipHeading = styled.div`
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 16px;
`;

const TooltipDesc = styled.div`
    margin-bottom: 6px;
`;

const TooltipBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const TooltipInfo = styled.span`
    font-size: 15px;
    margin-right: 7px;
    margin-bottom: 6px;
`;

const TooltipDot = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    opacity: .5;
    background-color: ${props => props.theme.background};
`;
