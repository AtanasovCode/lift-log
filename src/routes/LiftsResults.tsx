import { useState, useEffect, useContext, createContext } from "react";
import useWindowSize from "../components/hooks/UseWindow";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

import BarChartComponent from "../components/graphs/result-charts/BarChart";
import HBarChartComponent from "../components/graphs/result-charts/HBarChart";
import DonutChartComponent from "../components/graphs/result-charts/DonutChart";
import PieChartComponent from "../components/graphs/result-charts/PieChart";
import Nav from "../components/navigation/Nav";
import { getExerciseIcon } from "../components/GetIcon";

export const ChartContext = createContext({});

const LiftsResults = () => {

    const theme = useContext(ThemeContext);

    const size = useWindowSize();

    const COLORS: [string, string, string, string, string, string] = [
        '#810101', // Red
        '#4e3939', // Brownish-grey
        '#260072', // Deep purple
        '#1f221f', // Dark green
        '#005e62', // Teal
        '#9b00a7' //Dark purple
    ];

    const [exercises, setExercises] = useState([]);
    const [chartHeight, setChartHeight] = useState<number>(400);

    //Used to determine the font size of the axis tick and
    //the width of the axis
    const [AxisFontSize, setAxisFontSize] = useState(14);
    const [AxisWidth, setAxisWidth] = useState(110);

    //Used for the YAXIS for the horizontal bar chart
    const [HAxisWidth, setHAxisWidth] = useState(110);

    useEffect(() => {
        let w = size.width;

        if (w > 550) {
            setAxisWidth(110);
            setAxisFontSize(14);
            setHAxisWidth(110);
        }

        if (w <= 550) {
            setAxisWidth(20);
            setAxisFontSize(11);
            setHAxisWidth(60);
        }
    }, [size])

    useEffect(() => {
        let lifts = sessionStorage.getItem("lifts");

        setExercises(JSON.parse(lifts));
    }, [])


    const getChart = (name: string) => {
        switch (name) {
            case "Pie Chart": return (
                <PieChartComponent />
            );
            case "Donut Chart": return (
                <DonutChartComponent />
            );
            case "Bar Chart": return (
                <BarChartComponent />
            );
            case "H. Bar Chart": return (
                <HBarChartComponent />
            );
            default: return null;
        }
    }

    return (
        <ChartContext.Provider value={{
            COLORS,
            exercises,
            chartHeight,
            setChartHeight,
            theme,
            AxisFontSize,
            AxisWidth,
            HAxisWidth,
        }}>
            <Container>

                <Nav />

                <LiftsContainer>
                    <LiftsIcons>
                        {exercises.map((lift) => {
                            let iconSrc = getExerciseIcon(lift.name);
                            console.log(iconSrc);
                            console.log("Exercises: " + lift.name)
                            return (
                                <LiftIconHeading
                                    key={lift.name}
                                    src={iconSrc}
                                    alt={lift.name}
                                />
                            );
                        })}
                    </LiftsIcons>
                    <LiftTitle>
                        Your
                        strongest
                        lifts
                    </LiftTitle>
                    <Lifts>
                        {
                            exercises.map((lift) => {
                                return (
                                    <Lift key={lift.name}>
                                        <LiftName>
                                            {lift.name}
                                        </LiftName>
                                        <LiftPR>
                                            {lift.pr}kg
                                        </LiftPR>
                                    </Lift>
                                );
                            })
                        }
                    </Lifts>
                </LiftsContainer>

                <ChartContainer>
                    {
                        sessionStorage.getItem("chartType") !== null &&
                        getChart(sessionStorage.getItem("chartType") as string)
                    }
                </ChartContainer>
            </Container>
        </ChartContext.Provider>
    );
}

export default LiftsResults;


const Container = styled.div`
    min-height: calc(100vh - 125px);
    background-color: ${props => props.theme.darkYellow};
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    color: #fff;
    padding: 25px 40px 40px 40px;
    margin-top: 125px;

    @media (max-width: 1100px) {
        padding: 25px 20px 40px 20px;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 700px) {
        margin-top: 80px;
    }
`;

const LiftsContainer = styled.div`
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;

    @media (max-width: 850px) {
        width: 100%;
        margin-bottom: 45px;
    }

    @media (max-width: 550px) {
        margin-bottom: 45px;
    }
`;

const LiftsIcons = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    justify-content: center;
    grid-gap: 15px;
`;

const LiftIconHeading = styled.img`
    width: 100%;
    max-width: 60px;

    @media (max-width: 1100px) {
        max-width: 45px;
    }

    @media (max-width: 850px) {
        max-width: 70px;
    }

    @media (max-width: 550px) {
        max-width: 50px;
    }
`;

const LiftTitle = styled.div`
    text-align: center;
    font-size: 34px;
    font-weight: 900;
    margin-bottom: 15px;
    margin-top: 20px;
    font-family: 'Dosis', sans-serif;

    @media (max-width: 1100px) {
        font-size: 30px;
    }

    @media (max-width: 850px) {
        font-size: 32px;
    }

    @media (max-width: 550px) {
        font-size: 25px;
    }
`;

const Lifts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 35px;

    @media (max-width: 1100px) {
        grid-gap: 20px;
    }

    @media (max-width: 850px) {
        grid-gap: 35px;
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

const Lift = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const LiftName = styled.div`
    font-size: 17px;
    font-weight: 600;

    @media (max-width: 1100px) {
        font-size: 15px;
    }

    @media (max-width: 850px) {
        font-size: 17px;
    }
`;

const LiftPR = styled.div`
    margin-left: 10px;
    font-size: 30px;
    font-family: 'Dosis', sans-serif;
    font-weight: 900;

    @media (max-width: 1100px) {
        font-size: 24px;
        margin-left: 5px;
    }

    @media (max-width: 850px) {
        font-size: 30px;
        margin-left: 8px;
    }
`;

const ChartContainer = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 850px) {
        width: 100%;
    }

    
    .recharts-legend-item {   //This targets the legend items individually
        margin: 5px;
    }
`;