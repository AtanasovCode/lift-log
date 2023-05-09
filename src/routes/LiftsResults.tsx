import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";

import BarChartComponent from "../components/graphs/result-charts/BarChart";
import Nav from "../components/navigation/Nav";

const LiftsResults = () => {

    const theme = useContext(ThemeContext);

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        let lifts = sessionStorage.getItem("lifts");

        setExercises(JSON.parse(lifts));
    }, [])

    useEffect(() => {
        console.log(exercises);

    }, [exercises])

    return (
        <Container>

            <Nav />

            <LiftsContainer>
                <LiftTitle>
                    Your
                    <Fancy>strongest</Fancy>
                    lifts
                </LiftTitle>
                <Lifts>
                    {
                        exercises.map((lift) => {
                            return (
                                <Lift key={lift.exercise}>
                                    <LiftName>
                                        {lift.exercise}
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
                <BarChartComponent
                    exercises={exercises}
                />
            </ChartContainer>
        </Container>
    );
}

export default LiftsResults;


const Container = styled.div`
    min-height: 100vh;
    background-color: ${props => props.theme.richBlackDark};
    display: flex;
    align-items: stretch;
    justify-content: center;
    color: #fff;
    padding-top: 125px;
`;

const LiftsContainer = styled.div`
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LiftTitle = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 45px;
`;

const Fancy = styled.span`
    font-family: 'Dosis', sans-serif;
    color: ${props => props.theme.lightGreen};
    font-size: 30px;
    font-weight: 900;
    margin: 0 8px;
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
    color: ${props => props.theme.lightGreen};
`;

const ChartContainer = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;