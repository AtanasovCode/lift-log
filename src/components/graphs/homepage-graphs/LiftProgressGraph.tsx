import { useContext, useEffect, useState } from "react";
import useWindowSize from "../../hooks/UseWindow";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import {
    ComposedChart,
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
    Bar,
    CartesianAxis,
    ResponsiveContainer,
    BarChart,
} from "recharts";
import { LiftDataBench, LiftDataSquat, LiftDataDeadlift } from "../../../assets/data/MockData";


const LiftProgressGraph = () => {

    const [chartHeight, setChartHeight] = useState<number>();

    //We use this to use our theme
    //Outside of components
    const theme = useContext(ThemeContext);

    // Define general type for useWindowSize hook, which includes width and height
    interface Size {
        width: number | undefined;
        height: number | undefined;
    }

    const size: Size = useWindowSize();

    //Change the height of the chart, based on window size
    useEffect(() => {
        let w = size.width;

        if (w !== undefined) {
            if (w >= 1000) setChartHeight(280);
            else if (w < 1000 && w >= 500) setChartHeight(250);
            else if (w < 700 && w >= 500) setChartHeight(180);
            else if (w < 550) setChartHeight(160);
        }

    }, [size.width])

    //Custom Tooltip Content
    function CustomTooltip({ label, payload, active }) {

        const getFullMonth = (label) => {
            let month: string = "";
            switch (label) {
                case "Jan": month = "January"; break;
                case "Feb": month = "February"; break;
                case "Mar": month = "March"; break;
                case "Apr": month = "April"; break;
                case "May": month = "May"; break; //Unneeded but here for consistency
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
                    {payload.map((info) => {
                        return (
                            <TooltipBody>
                                <TooltipInfo>
                                    {info.payload.Exercise}:
                                </TooltipInfo>
                                <TooltipInfo>
                                    {info.payload.Lift}kg
                                </TooltipInfo>
                            </TooltipBody>
                        );
                    })}
                </TooltipContainer>
            );
        }
        return null;
    }

    function CustomDot(label) {
        return (
            <TooltipDot />
        );
    }

    return (
        <Container>
            <Info>
                Visualize your strength increase
                with <OrangeWord>ease</OrangeWord>
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
                            stroke={theme.mayaBlue}
                            xAxisId={"deadlift"}
                            yAxisId={"deadlift"}
                            dot={<CustomDot />}
                        />
                        <Line
                            data={LiftDataBench}
                            dataKey="Lift"
                            stroke={theme.softOrange}
                            xAxisId={"bench"}
                            yAxisId={"bench"}
                            dot={<CustomDot />}
                        />
                        <Line
                            data={LiftDataSquat}
                            dataKey="Lift"
                            stroke={theme.lighterGreen}
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

import wave from '../../../assets/illustrations/wave.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
    justify-content: space-between;
    background-color: ${props => props.theme.richBlackDark};
    color: ${props => props.theme.defaultFontColor};
    padding: 50px 100px;

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

export const Info = styled.div`
    flex: 100%;


    font-size: 32px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 900px) {
        font-size: 26px;
    }

    @media (max-width: 700px) {
        font-size: 23px;
        display: flex;
        flex-direction: column;
        margin-bottom: 55px;
    }
`;


export const OrangeWord = styled.span`
    color: ${props => props.theme.softOrange};
    color: #000;
    -webkit-text-stroke: 1px ${props => props.theme.softOrange};
    padding-left: 5px;
    font-size: 44px;
    transition: color .3s ease;

    &:hover {
        color: ${props => props.theme.softOrange};
        cursor: pointer;
    }
`;


export const Chart = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 70px;

    @media (max-width: 700px) {
        margin: 0 20px;
        width: 100%;
    }
`;

export const ChartDescription = styled.div`
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

export const TooltipContainer = styled.div`
    padding: 10px 12px;
    background-color: ${props => props.theme.defaultBackgroundColor};
    border: none;
`;

export const TooltipHeading = styled.div`
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 16px;
`;

export const TooltipDesc = styled.div`
    margin-bottom: 6px;
`;

export const TooltipBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const TooltipInfo = styled.span`
    font-size: 15px;
    margin-right: 7px;
    margin-bottom: 6px;
`;

export const TooltipDot = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    opacity: .5;
    background-color: black;
`;
