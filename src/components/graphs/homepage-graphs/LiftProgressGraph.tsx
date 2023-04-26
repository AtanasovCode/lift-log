import { useContext, useEffect, useState } from "react";
import useWindowSize from "../../hooks/UseWindow";
import { ThemeContext } from "styled-components";
import * as Styled from '../../../styles/LiftProgress.Styled';
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
    //Outside of styled-components
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
                <Styled.TooltipContainer key={label}>
                    <Styled.TooltipHeading>
                        {getFullMonth(label)}
                    </Styled.TooltipHeading>
                    {payload.map((info) => {
                        return (
                            <Styled.TooltipBody>
                                <Styled.TooltipInfo>
                                    {info.payload.Exercise}:
                                </Styled.TooltipInfo>
                                <Styled.TooltipInfo>
                                    {info.payload.Lift}kg
                                </Styled.TooltipInfo>
                            </Styled.TooltipBody>
                        );
                    })}
                </Styled.TooltipContainer>
            );
        }
        return null;
    }

    function CustomDot(label) {
        return (
            <Styled.TooltipDot />
        );
    }

    return (
        <Styled.Container>
            <Styled.Info>
                Visualize your strength increase
                with <Styled.OrangeWord>ease</Styled.OrangeWord>
            </Styled.Info>
            <Styled.Chart>
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
            </Styled.Chart>
        </Styled.Container>
    );
}

export default LiftProgressGraph;