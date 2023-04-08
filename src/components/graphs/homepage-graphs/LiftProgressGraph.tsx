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
import { LiftData } from "../../../assets/data/MockData";


const LiftProgressGraph = () => {

    const [chartHeight, setChartHeight] = useState<number>();

    //We use this to use our thene
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
            }

            return month;
        }

        if (active) {
            return (
                <Styled.TooltipContainer>
                    <Styled.TooltipHeading>
                        Barbell Bench Press
                    </Styled.TooltipHeading>
                    <Styled.TooltipDesc>
                        Lifted in: {getFullMonth(label)}
                    </Styled.TooltipDesc>
                    <Styled.TooltipDesc>
                        Weight: {payload[0].value}kg
                    </Styled.TooltipDesc>
                </Styled.TooltipContainer>
            );
        }
        return null;
    }

    return (
        <Styled.Container>
            <Styled.Info>
                Visualize your strength increase
                with <Styled.OrangeWord>ease</Styled.OrangeWord>
            </Styled.Info>
            <Styled.Chart>
                <ResponsiveContainer width={'99%'} height={chartHeight}>
                    <BarChart
                        data={LiftData}
                        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    >
                        <XAxis dataKey="Month" />
                        <YAxis domain={[35, 100]} width={40} />
                        <Bar
                            dataKey="Lift"
                            stroke={theme.softOrange}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={false}
                        />
                    </BarChart>
                </ResponsiveContainer>
                <Styled.ChartDescription>
                    *Hover over chart to see data
                </Styled.ChartDescription>
            </Styled.Chart>
        </Styled.Container>
    );
}

export default LiftProgressGraph;