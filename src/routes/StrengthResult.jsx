import { useState, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { useStore } from '../../useStore';
import useWindowSize from '../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';

import { getExerciseIcon } from '../components/GetIcon';

import {
    ResponsiveContainer,
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import Nav from '../components/Nav';

const StrengthResult = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    const {
        setExerciseSelected,
        setCalendarValue,
        setUserData,
    } = useStore();

    const [YAxisHighestValue, setYAxisHighestValue] = useState(0);
    const [YAxisLowestValue, setYAxisLowestValue] = useState(0);
    const [chartHeight, setChartHeight] = useState(300);
    const [yAxisWidth, setYAxisWidth] = useState(42);
    const [axisFontSize, setAxisFontSize] = useState(15);

    const [tip, setTip] = useState("");

    const [strongestLift, setStrongestLift] = useState(0);
    const [brokenPBs, setBrokenPBs] = useState(0);
    const [percentImproved, setPercentImproved] = useState(0);

    const [currentExercise, setCurrentExercise] = useState(sessionStorage.getItem("exerciseSelectedStrength"));
    const [currentData, setCurrentData] = useState([]);

    const calculateImprovement = (min, max) => {
        const improvement = ((max - min) / min) * 100;
        return parseFloat(improvement.toFixed(2)); // round to 2 decimal places
    };

    useEffect(() => {
        let strongest = 0;
        let weakest = 99999;
        let brokenPBs = 0;

        let firstLift = 0;
        let lastLift = 0;
        let indexFirst = -1;
        let indexLast = -1;

        let data = sessionStorage.getItem("userDataStrength");
        if (data != null) {
            let filteredData = JSON.parse(data).filter((lift) => lift.weight !== 0);
            setCurrentData(filteredData);

            JSON.parse(data).forEach((lift, index) => {
                if (lift.weight > 0) {
                    if (indexFirst === -1) {
                        indexFirst = lift.index;
                        firstLift = lift.weight;
                    }
                    indexLast = lift.index;
                    lastLift = lift.weight;
                }

                if (lift.weight > strongest) {
                    strongest !== 0 && brokenPBs++;
                    strongest = lift.weight;
                }
                if (lift.weight !== 0 && lift.weight < weakest) {
                    weakest = lift.weight;
                }
            });
        }

        setYAxisHighestValue(strongest + 10);
        setYAxisLowestValue(weakest >= 5 ? weakest - 5 : weakest);
        setPercentImproved(calculateImprovement(firstLift, lastLift));
        setStrongestLift(strongest);
        setBrokenPBs(brokenPBs);
    }, []);

    const size = useWindowSize();

    useEffect(() => {
        let w = size.width;

        if (w !== undefined) {
            if (w >= 1000) setChartHeight(300);
            else if (w < 1000 && w >= 700) {
                setChartHeight(250);
                setYAxisWidth(42);
                setAxisFontSize(15);
            } else if (w < 700 && w >= 500) {
                setChartHeight(220);
                setYAxisWidth(32);
                setAxisFontSize(13);
            } else if (w < 550 && w > 420) {
                setChartHeight(200);
                setYAxisWidth(42);
                setAxisFontSize(15);
            } else if (w <= 420) {
                setChartHeight(200);
                setYAxisWidth(26);
                setAxisFontSize(12);
            }
        }
    }, [size.width]);

    const resetValues = () => {
        sessionStorage.removeItem("exerciseSelectedStrength");
        sessionStorage.removeItem("userDataStrength");
        setExerciseSelected("Select an exercise");
        setCalendarValue("Input your lifts");
        setUserData([
            { month: 'Jan', weight: 0 },
            { month: 'Feb', weight: 0 },
            { month: 'Mar', weight: 0 },
            { month: 'Apr', weight: 0 },
            { month: 'May', weight: 0 },
            { month: 'Jun', weight: 0 },
            { month: 'Jul', weight: 0 },
            { month: 'Aug', weight: 0 },
            { month: 'Sep', weight: 0 },
            { month: 'Oct', weight: 0 },
            { month: 'Nov', weight: 0 },
            { month: 'Dec', weight: 0 },
        ]);

        navigate("/input-stats");
    };

    const CustomTooltip = ({ payload, active, label }) => {
        if (active) {
            let weight = payload[0].payload.weight;
            let month = payload[0].payload.month;

            return (
                <TooltipContainer>
                    <TooltipInfo>
                        {month}:
                    </TooltipInfo>
                    <TooltipValue>
                        {weight}kg
                    </TooltipValue>
                </TooltipContainer>
            );
        }
        return null;
    };

    return (
        <Container>
            <Nav />
            <ContentContainer>
                <LiftInfo>
                    <InfoWrapper>
                        <InfoContainer>
                            <LiftName>
                                <LiftIcon
                                    src={getExerciseIcon(currentExercise)}
                                />
                                {currentExercise}
                            </LiftName>

                            <StatsContainer>
                                <Stats>
                                    <LiftNumber>
                                        {strongestLift}kg
                                    </LiftNumber>
                                    <LiftDesc>
                                        strongest lift
                                    </LiftDesc>
                                </Stats>

                                <Stats>
                                    <LiftNumber>
                                        {brokenPBs}
                                    </LiftNumber>
                                    <LiftDesc>
                                        broken PBs
                                    </LiftDesc>
                                </Stats>

                                <Stats>
                                    <LiftNumber>
                                        {percentImproved}%
                                    </LiftNumber>
                                    <LiftDesc>
                                        improved
                                    </LiftDesc>
                                </Stats>
                            </StatsContainer>
                        </InfoContainer>
                        <ResetButton
                            type="button"
                            value="New Results"
                            onClick={resetValues}
                        />
                    </InfoWrapper>
                </LiftInfo>

                <ChartContainer>
                    <ResponsiveContainer width={"99%"} height={chartHeight}>
                        <LineChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                            <Line data={currentData} dataKey="weight" fill={theme.mayaBlue} />
                            <XAxis
                                dataKey="month"
                                tick={{ fontSize: `${axisFontSize}` }}
                            />
                            <YAxis
                                domain={[YAxisLowestValue, YAxisHighestValue]}
                                width={yAxisWidth}
                                tick={{ fontSize: `${axisFontSize}` }}
                            />
                            <Tooltip content={<CustomTooltip />} />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </ContentContainer>
        </Container>
    );
};

export default StrengthResult;

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};

    @media (max-width: 768px) {
        
    }

    @media (max-width: 700px) {
        flex-direction: column;
        padding-top: 120px;
    }
`;

export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    padding: 0 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ChartContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 80vw;
    }

    @media (max-width: 525px) {
        width: 90vw;
    }
`;

export const LiftInfo = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        width: 30%;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 4rem;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const LiftIcon = styled.img`
    filter: invert(100%);
    margin-right: 12px;
    height: 80px;

    @media (max-width: 768px) {
        height: 75px;
    }
`;

export const LiftName = styled.div`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LiftNumber = styled.div`
    font-size: 2rem;
    font-weight: 900;
    color: ${props => props.theme.accent};
    margin-right: 7px;
    font-family: 'Dosis', sans-serif;

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const LiftDesc = styled.div`
    font-size: 1.5rem;
    font-weight: 800;

    @media (max-width: 1024px) {
        font-size: 1.2rem;
    }

    @media (max-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const Percent = styled.div`
    color: ${props => props.positive ? props.theme.accent : "red"};
    margin-left: .5rem;
`;

export const Tip = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2%;
    font-size: 1rem;
    color: #959292;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
        transform: translateX(-300%);
    }
`;

export const ResetButton = styled.input`
    border-radius: 16px;
    background-color: ${props => props.theme.secondary};
    border: none;
    color: ${props => props.theme.text};
    font-weight: 700;
    text-align: center;
    padding: .7rem 1.2rem; 
    width: 100%;
    margin-top: 2rem;

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

export const TooltipContainer = styled.div`
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    border-radius: 16px;
    padding: .6rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TooltipInfo = styled.div`
    margin-right: 7px;
`;

export const TooltipValue = styled.div`
    font-family: 'Dosis', sans-serif;
    color: ${props => props.theme.accent};
    font-size: 20px;
    font-weight: 900;
`;
