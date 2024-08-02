import styled, { useTheme } from "styled-components";
import { useState } from "react";
import { useStore } from "../../../useStore";

import {
    X,
} from "@phosphor-icons/react";

const ChartSelect = ({ setChartType, getChartIcon }) => {

    const {
        toggleCharts,
        showCharts,
    } = useStore();

    const theme = useTheme();

    const [charts, setCharts] = useState(["Pie Chart", "Donut Chart", "Bar Chart", "H. Bar Chart"]);

    const selectChart = (name) => {
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
                {charts.map((chart) => (
                    <ChartOption key={chart} onClick={() => selectChart(chart)}>
                        <ChartIcon>
                            {getChartIcon(chart, "fill", theme.accent)}
                        </ChartIcon>
                        <ChartName>{chart}</ChartName>
                    </ChartOption>
                ))}
            </ChartsContainer>
        </Container>
    );
}

export default ChartSelect;

const Container = styled.div`
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding: 2rem;
    background-color: ${props => props.theme.background};
    position: fixed;
    width: 50%;
    z-index: 99;
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 1024px) {
        width: 70%;
    }

    @media (max-width: 768px) {
        width: 100vw;
        height: 100%;
    }
`;

const CloseIcon = styled.div`
    position: absolute;
    top: 5%;
    right: 5%;
    width: 30px;
    cursor: pointer;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.8rem;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;

    @media (max-width: 550px) {
        font-size: 18px;
        text-align: center;
    }
`;

const ChartsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;

const ChartOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    width: 100%;
    border-radius: 16px;
    user-select: none;
    background-color: ${props => props.theme.secondary};

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.mayaBlueDark};
    }
`;

const ChartName = styled.div`
    font-size: 16px;
    margin-left: .5rem;
`;

const ChartIcon = styled.div`
    height: 40px;

    @media (max-width: 550px) {
        height: 30px;
    }
`;
