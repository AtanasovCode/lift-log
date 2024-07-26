import { useState, useEffect, useContext, createContext } from "react";
import useWindowSize from "../components/hooks/UseWindow";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

import BarChartComponent from "../components/graphs/result-charts/BarChart";
import HBarChartComponent from "../components/graphs/result-charts/HBarChart";
import DonutChartComponent from "../components/graphs/result-charts/DonutChart";
import PieChartComponent from "../components/graphs/result-charts/PieChart";
import Nav from "../components/navigation/Nav";
import { getExerciseIcon } from "../components/GetIcon";

export const ChartContext = createContext({});

interface Lifts {
    name: string,
    pr: number,
}

const LiftsResults = () => {

    const theme = useContext(ThemeContext);
    const navigate = useNavigate();
    const size = useWindowSize();

    const COLORS: [string, string, string, string, string, string] = [
        '#e9a424', // Red
        '#e53b6b', // Brownish-grey
        '#f83bdf', // Deep purple
        '#616561', // Dark green
        '#08f7af', // Teal
        '#7c7afa' //Dark purple
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

    const handleRestartResults = () => {
        sessionStorage.removeItem("numberOfExercises");
        sessionStorage.removeItem("lifts");
        sessionStorage.removeItem("chartType");

        navigate("/get-stats", {replace: true});
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
                    <LiftTitle>
                        Your
                        strongest
                        lifts
                    </LiftTitle>
                    <Lifts>
                        {
                            exercises.map((lift: Lifts) => {
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
                    <RestartButton 
                        type="button"
                        value="New Results"
                        onClick={handleRestartResults}
                    />
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
    background-color: ${props => props.theme.background};
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    color: ${props => props.theme.text};
    padding: 1.5rem 2rem;
    margin-top: 125px;
    border-top-left-radius: 18%;

    @media (max-width: 1100px) {
        padding: 25px 20px 40px 20px;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }

    @media (max-width: 700px) {
        margin-top: 120px;
    }
`;

const LiftsContainer = styled.div`
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 850px) {
        width: 100%;
        margin-bottom: 45px;
    }

    @media (max-width: 550px) {
        margin-bottom: 45px;
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
    grid-gap: 2rem;

    @media (max-width: 1100px) {
        grid-gap: 1.5rem;
    }

    @media (max-width: 850px) {
        grid-gap: 2rem;
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-gap: 1.3rem;
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


const RestartButton = styled.input`
    width: 60%;
    text-align: center;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    border: none;
    font-size: 16px;
    font-weight: 600;
    margin-top: 40px;
    border-radius: 12px;
    padding: 10px;
    cursor: pointer;
    transition: all .3s ease-in;

    &:hover {
        cursor: pointer;
    }
`;