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
    active: boolean
}

const ChartSelect = () => {

    const {
        toggleCharts,
        showCharts,
    } = useContext(AppContext);

    const theme = useContext(ThemeContext);

    return (
        <Container active={showCharts}>
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
                <ChartOption>
                    <ChartIcon>
                        <ChartPie
                            size="100%"
                            color={theme.lightGreen}
                            weight="fill"
                        />
                    </ChartIcon>
                    <ChartName>Pie Chart</ChartName>
                </ChartOption>

                <ChartOption>
                    <ChartIcon>
                        <ChartDonut 
                            size="100%"
                            color={theme.lightGreen}
                            weight="fill"
                        />
                    </ChartIcon>
                    <ChartName>
                        Donut Chart
                    </ChartName>
                </ChartOption>

                <ChartOption>
                    <ChartIcon>
                        <ChartBar 
                            size="100%"
                            weight="fill"
                            color={theme.lightGreen}
                        />
                    </ChartIcon>
                    <ChartName>
                        Bar Chart
                    </ChartName>
                </ChartOption>

                <ChartOption>
                    <ChartIcon>
                        <ChartBarHorizontal
                            size="100%"
                            weight="fill"
                            color={theme.lightGreen}
                        />
                    </ChartIcon>
                    <ChartName>
                        H. Bar Chart
                    </ChartName>
                </ChartOption>
            </ChartsContainer>
        </Container>
    );
}

export default ChartSelect;

const Container = styled.div<Props>`
    max-width: 550px;
    position: absolute;
    width: 0;
    top: -2200px;
    z-index: 0;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 35px;
    background-color: ${props => props.theme.richBlack};

    //Exercise select is active:
    ${props => props.active && `
        position: fixed;
        width: 60vw;
        z-index: 10;
        opacity: 1;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    `}

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
    border: 1px solid ${props => props.theme.lightGreen};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    min-width: 200px;
    border-radius: 8px;
    user-select: none;

    &:hover {
        background-color: #cccccc30;
        cursor: pointer;
    }
`;

const ChartName = styled.div`
    font-size: 16px;
`;

const ChartIcon = styled.div`
    height: 30px;
`;