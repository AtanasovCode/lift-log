import { useState, useEffect, createContext } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../useStore";
import styled, { useTheme } from "styled-components";

//importing charts
import BarChartComponent from "../components/results/BarChart";
import HBarChart from "../components/results/HBarChart";
import PieChartComponent from '../components/results/PieChart';
import DonutChartComponent from '../components/results/DonutChart';


import Nav from "../components/Nav";

export const ChartContext = createContext({});

const LiftsResults = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const size = useWindowSize();

    const { activeNav } = useStore();


    const COLORS = [
        '#08f7af', // Red
        '#6ca9f8', // Brownish-grey
        '#0804eb', // Deep purple
        '#3c23ba', // Dark green
        '#694df6', // Teal
        '#e100ff' //Dark purple
    ];

    const [exercises, setExercises] = useState([]);
    const [chartHeight, setChartHeight] = useState(400);

    // Used to determine the font size of the axis tick and
    // the width of the axis
    const [AxisFontSize, setAxisFontSize] = useState(14);
    const [AxisWidth, setAxisWidth] = useState(110);

    // Used for the YAXIS for the horizontal bar chart
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

    const getChart = (name) => {
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
                <HBarChart />
            );
            default: return null;
        }
    }

    const handleRestartResults = () => {
        sessionStorage.removeItem("numberOfExercises");
        sessionStorage.removeItem("lifts");
        sessionStorage.removeItem("chartType");

        navigate("/input-stats", { replace: true });
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
            <Container $activeNav={activeNav}>

                <Nav />

                <ContentWrapper>
                    <LiftsContainer>
                        <LiftsWrapper>
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
                            <RestartButton
                                type="button"
                                value="New Results"
                                onClick={handleRestartResults}
                            />
                        </LiftsWrapper>
                    </LiftsContainer>

                    <ChartContainer>
                        {
                            sessionStorage.getItem("chartType") !== null &&
                            getChart(sessionStorage.getItem("chartType"))
                        }
                    </ChartContainer>
                </ContentWrapper>
            </Container>
        </ChartContext.Provider>
    );
}

export default LiftsResults;

const Container = styled.div`
    min-height: 100vh0;
    background-color: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    color: ${props => props.theme.text};
    padding: 1.5rem 2rem;

    ${props => props.$activeNav && `
        overflow: hidden;
        height: 100vh;
    `}

    @media (max-width: 1024px) {
        padding: 1rem .5rem;
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LiftsContainer = styled.div`
    width: 42%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 45px;
    }

    @media (max-width: 550px) {
        margin-bottom: 3rem;
    }
`;

const LiftsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    @media (max-width: 1300px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 550px) {
        width: 100%;
    }
`;

const LiftTitle = styled.div`
    text-align: center;
    font-size: 2.4rem;
    font-weight: 900;
    margin-bottom: 1.2rem;
    margin-top: 1.5rem;
    font-family: 'Dosis', sans-serif;

    @media (max-width: 1024px) {
        font-size: 1.8rem;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Lifts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 1024px) {
        grid-gap: 1rem;
    }

    @media (max-width: 768px) {
        grid-gap: 2rem;
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-gap: 1.5rem;
    }
`;

const Lift = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: flex-end;
`;

const LiftName = styled.div`
    font-size: 1rem;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media (max-width: 550px) {
        font-size: 1.3rem;
    }
`;

const LiftPR = styled.div`
    margin-right: 7px;
    font-size: 2rem;
    font-family: 'Dosis', sans-serif;
    font-weight: 900;
    color: ${props => props.theme.accent};

    @media (max-width: 1024px) {
        font-size: 1.8rem;
    }

    @media (max-width: 768px) {
        font-size: 1.8rem;
        margin-left: 6px;
    }

    @media (max-width: 550px) {
        font-size: 2.2rem;
        margin-left: 5px;
    }
`;

const ChartContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 850px) {
        width: 100%;
    }

    
    .recharts-legend-item {   // This targets the legend items individually
        margin: 5px;
    }
`;


const RestartButton = styled.input`
    width: 100%;
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
        background-color: ${props => props.theme.mayaBlueDark};
        animation: excited .3s 1;
    }

    @keyframes excited {
        50% {
            transform: scale(1.07) rotate(0.5deg);
        }
    }
`;