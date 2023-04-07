import { useContext, useEffect, useState } from "react";
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
    CartesianAxis,
    ResponsiveContainer,
    BarChart,
} from "recharts";
import { LiftData } from "../../../assets/data/MockData";


const LiftProgressGraph = () => {

    const [barFill, setBarFill] = useState("#000");
    const [chartHeight, setChartHeight] = useState<number>();

    //We use this to use our thene
    //Outside of styled-components
    const theme = useContext(ThemeContext);

    const size: Size = useWindowSize();

    //Change the height of the chart, based on window size
    useEffect(() => {
        let w = size.width;
        
        if(w !== undefined) {
            if(w >= 1000) setChartHeight(280);
            else if(w < 1000 && w >= 700) setChartHeight(250);
            else if(w < 700 && w >= 500) setChartHeight(250);
            else if(w < 500) setChartHeight(160);
        }

    }, [size.width])

    useEffect(() => {
        console.log(chartHeight);
    }, [chartHeight])

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

    @media (max-width: 1000px) {
        padding: 80px;
    }
    
    @media (max-width: 900px) {
        padding: 80px 20px;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Info = styled.div`
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
    margin-right: 70px;

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


// Define general type for useWindowSize hook, which includes width and height
interface Size {
    width: number | undefined;
    height: number | undefined;
}

// Hook
function useWindowSize(): Size {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}