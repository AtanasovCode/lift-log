import { useState, useEffect, useContext, createContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

import BarChartComponent from "../components/graphs/result-charts/BarChart";
import HBarChartComponent from "../components/graphs/result-charts/HBarChart";
import DonutChartComponent from "../components/graphs/result-charts/DonutChart";
import PieChartComponent from "../components/graphs/result-charts/PieChart";
import Nav from "../components/navigation/Nav";
import { getExerciseIcon } from "../components/GetIcon";

interface ChartContextType {
    COLORS: [string, string, string, string, string, string],
    exercises: any[]
}

export const ChartContext = createContext({});

const LiftsResults = () => {

    const theme = useContext(ThemeContext);

    const COLORS: [string, string, string, string, string, string] = [
        '#493636', // black
        '#874c00', // orange
        '#9e0000', // light grey
        '#3c008b', // dark grey
        '#5C5C5E', // medium grey
        '#008009', // light green
    ];

    const [exercises, setExercises] = useState([]);

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
        <ChartContext.Provider value={{ COLORS, exercises, theme }}>
            <Container>

                <Nav />

                <LiftsContainer>
                    <LiftsIcons>
                        {exercises.map((lift) => {
                            return (
                                <LiftIconHeading
                                    key={lift.name}
                                    src={getExerciseIcon(lift.name)}
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
    justify-content: center;
    color: #fff;
    padding: 0 40px 40px 40px;
    margin-top: 125px;
`;

const LiftsContainer = styled.div`
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 35px;
    color: #000;
    border-radius: 16px;
`;

const LiftsIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
`;

const LiftIconHeading = styled.img`
    width: 70px;
    margin: 0 15px;
`;

const LiftTitle = styled.div`
    text-align: center;
    font-size: 34px;
    font-weight: 900;
    margin-bottom: 15px;
    font-family: 'Dosis', sans-serif;
`;

const Lifts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 35px;
`;

const Lift = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const LiftName = styled.div`
    font-size: 17px;
    font-weight: 600;
`;

const LiftPR = styled.div`
    margin-left: 10px;
    font-size: 30px;
    font-family: 'Dosis', sans-serif;
    font-weight: 900;
`;

const ChartContainer = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;