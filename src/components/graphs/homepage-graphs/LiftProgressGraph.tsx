import { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import {
    ComposedChart,
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
    Bar,
    CartesianAxis
} from "recharts";
import { LiftData } from "../../../assets/data/MockData";


const LiftProgressGraph = () => {

    const [barFill, setBarFill] = useState("#000");

    //We use this to use our thene
    //Outside of styled-components
    const theme = useContext(ThemeContext);

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
                <TooltipContainer>
                    <TooltipHeading>
                        Barbell Bench Press
                    </TooltipHeading>
                    <TooltipDesc>
                        Lifted in: {getFullMonth(label)}
                    </TooltipDesc>
                    <TooltipDesc>
                        Weight: {payload[0].value}kg
                    </TooltipDesc>
                </TooltipContainer>
            );
        }
        return null;
    }

    return (
        <Container>
            <Info>
                Track your strength increase
                with <OrangeWord>ease</OrangeWord>
            </Info>
            <Chart>
                <ComposedChart
                    width={420}
                    height={220}
                    data={LiftData}
                >
                    <XAxis dataKey="Month" />
                    <YAxis domain={[35, 105]} />
                    <Bar 
                        dataKey="Lift" 
                        stroke={theme.softOrange}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={false}
                    />
                </ComposedChart>
                <ChartDescription>
                    *Hover over chart to see data
                </ChartDescription>
            </Chart>
        </Container>
    );
}

export default LiftProgressGraph;

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    background-color: #000;
    color: ${props => props.theme.defaultFontColor};
    padding: 80px 100px;
    margin-top: 30px;
`;

const Info = styled.div`
    flex: 100%;

    font-size: 32px;
    font-weight: 700;
    margin-left: 120px;
    text-align: center;
`;


const OrangeWord = styled.span`
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


const Chart = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const ChartDescription = styled.div`
    position: absolute;
    bottom: -15px;
    font-size: 12px;
    font-weight: 300;
    color: darkgray;
`;

const TooltipContainer = styled.div`
    padding: 10px 12px;
    background-color: ${props => props.theme.defaultBackgroundColor};
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