import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";

import { AppContext } from "./context/AppContext";
import {
    ChartPie,
    ChartDonut,
    ChartBarHorizontal,
    ChartBar,
    X,
} from "@phosphor-icons/react";

interface Props {
    setChartType: Function, 
    getChartIcon: Function,
}

const ChartSelect = ({ setChartType, getChartIcon }: Props) => {

    const {
        toggleCharts,
        showCharts,
    } = useContext(AppContext);

    const theme = useContext(ThemeContext);

    const [charts, setCharts] = useState(["Pie Chart", "Donut Chart", "Bar Chart", "H. Bar Chart"]);

    const selectChart = (name: string) => {
        sessionStorage.setItem("chartType", name);
        setChartType(name);
        toggleCharts();
    }

    return (
        <Container>
            <Heading>
                <Title>
                    Select your preferred chart type
                </Title>
            </Heading>

            <ChartsContainer>
                <CloseIcon onClick={toggleCharts}>
                    <X
                        size="100%"
                        color="#fff"
                        weight="light"
                    />
                </CloseIcon>
                {charts.map((chart) => {
                    return (
                        <ChartOption key={chart} onClick={() => selectChart(chart)}>
                            <ChartIcon>
                                {getChartIcon(chart, "fill", theme.accent)}
                            </ChartIcon>
                            <ChartName>{chart}</ChartName>
                        </ChartOption>
                    );
                })}
            </ChartsContainer>
        </Container>
    );
}

export default ChartSelect;

const Container = styled.div`
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 35px;
    background-color: ${props => props.theme.background};
    border-radius: 15px;
    border: 1px solid ${props => props.theme.accent};
    position: fixed;
    width: 60vw;
    z-index: 10;
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);


    @media (max-width: 1000px) {
        max-width: 700px;
        width: 70vw;
    }

    @media (max-width: 700px) {
        width: 100vw;
        height: 100%;
    }
`;

const CloseIcon = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 25px;
    cursor: pointer;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;

    @media (max-width: 550px) {
        font-size: 18px;
        text-align: center;
    }
`;

const ChartsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;

const ChartOption = styled.div`
    border: 1px solid ${props => props.theme.accent};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    min-width: 200px;
    border-radius: 8px;
    user-select: none;

    &:hover {
        cursor: pointer;
        background-color: #cccccc30;
    }
`;

const ChartName = styled.div`
    font-size: 16px;
`;

const ChartIcon = styled.div`
    height: 30px;
`;