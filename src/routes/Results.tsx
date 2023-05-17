import { useState, useEffect, useContext } from 'react';
import useWindowSize from '../components/hooks/UseWindow';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import * as Styled from '../styles/Result.Styled';

import { tips } from '../assets/data/MockData';
import { getExerciseIcon } from '../components/GetIcon';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { Barbell } from '@phosphor-icons/react';

import Nav from '../components/navigation/Nav';
import { AppContext } from '../components/context/AppContext';

const Result = () => {

    //We use this to use our theme
    //Outside of styled-components
    const theme = useContext(ThemeContext);

    const navigate = useNavigate();

    const {
        setExerciseSelected,
        setCalendarValue,
        setUserData,
    } = useContext(AppContext)

    //Changing appearance of the chart
    const [YAxisHighestValue, setYAxisHighestValue] = useState(0);
    const [YAxisLowestValue, setYAxisLowestValue] = useState(0);
    const [chartHeight, setChartHeight] = useState(300);
    const [yAxisWidth, setYAxisWidth] = useState(42);
    const [axisFontSize, setAxisFontSize] = useState(15);

    //Random gym tips
    const [tip, setTip] = useState("");

    const [strongestLift, setStrongestLift] = useState(0);
    const [brokenPBs, setBrokenPBs] = useState(0);
    const [percentImproved, setPercentImproved] = useState(0);

    const [currentExercise, setCurrentExercise] = useState(sessionStorage.getItem("exerciseSelectedStrength"));
    const [currentData, setCurrentData] = useState([]);

    //Generates a random tip for the users
    useEffect(() => {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        setTip(randomTip);
    }, []);


    //Calculate improvement in %
    //Based on the first lift and the last lift
    const calculateImprovement = (min: number, max: number): number => {
        const improvement = ((max - min) / min) * 100;
        return parseInt(improvement.toFixed(2)); // round to 2 decimal places
    }


    //Hook used for:
    //getting first and last lift
    //calculating strongest and weakest lift
    //calculating the progress in %
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

            //Need to parse the data to be able to map it
            JSON.parse(data).map((lift: any, index: number) => {

                //Get the very first and very last lift
                //To calculate percentage of progress made
                if (lift.weight > 0) {
                    if (indexFirst === -1) {
                        indexFirst = lift.index;
                        firstLift = lift.weight;
                    }
                    indexLast = lift.index;
                    lastLift = lift.weight;
                }


                //Get the strongest and weakest lift
                if (lift.weight > strongest) {
                    strongest !== 0 && brokenPBs++;
                    strongest = lift.weight
                }
                if (lift.weight != 0 && lift.weight < weakest) {
                    weakest = lift.weight;
                    console.log(weakest);
                }
            })
        }

        //Setting the highest value for the YAxis
        setYAxisHighestValue(strongest + 10);

        //Set the lowest value for the YAxis
        weakest >= 5 ? setYAxisLowestValue(weakest - 5) : setYAxisLowestValue(weakest);

        console.log("lowest value: " + YAxisLowestValue + " Highest: " + YAxisHighestValue);

        //Get the improvement in percentage
        //Calculated based on the very first lift, and 
        //the very last lift
        setPercentImproved(calculateImprovement(firstLift, lastLift));


        setStrongestLift(strongest);
        setBrokenPBs(brokenPBs);

    }, []);



    // Define general type for useWindowSize hook, which includes width and height
    interface Size {
        width: number | undefined;
        height: number | undefined;
    }

    const size: Size = useWindowSize();

    //Used for re-sizing the chart's height based 
    //on the device's width
    useEffect(() => {
        let w = size.width;

        if (w !== undefined) {
            if (w >= 1000) setChartHeight(300);
            else if (w < 1000 && w >= 700) {
                setChartHeight(250);
                setYAxisWidth(42);
                setAxisFontSize(15);
            }
            else if (w < 700 && w >= 500) {
                setChartHeight(220);
                setYAxisWidth(32);
                setAxisFontSize(13);
            }
            else if (w < 550 && w > 420) {
                setChartHeight(200);
                setYAxisWidth(42);
                setAxisFontSize(15);
            }
            else if (w <= 420) {
                setChartHeight(200);
                setYAxisWidth(26);
                setAxisFontSize(12);
            }
        }
    }, [size.width])


    const resetValues = () => {
        //Remove the selected exercise and 
        //the values for it
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

        //navigate back to the selected tab
        navigate("/get-stats");
    }

    interface TooltipProps {
        payload: any,
        active: boolean,
        label: string,
    }

    const CustomTooltip = ({payload, active, label}: TooltipProps) => {
        if(active) {
            let weight = payload[0].payload.weight;
            let month = payload[0].payload.month;

            return (
                <Styled.Tooltip>
                    <Styled.TooltipInfo>
                        {month}:
                    </Styled.TooltipInfo>
                    <Styled.TooltipValue>
                        {weight}kg
                    </Styled.TooltipValue>
                </Styled.Tooltip>
            );
        }
    }

    return (
        <Styled.Container>
            <Nav />
            <Styled.LiftInfo>
                <Styled.InfoContainer>
                    <Styled.LiftName>
                        <Styled.LiftIcon
                            src={getExerciseIcon(currentExercise)}
                        />
                        {currentExercise}
                    </Styled.LiftName>

                    <Styled.StatsContainer>
                        <Styled.Stats>
                            <Styled.LiftNumber>
                                {strongestLift}kg
                            </Styled.LiftNumber>
                            <Styled.LiftDesc>
                                strongest lift
                            </Styled.LiftDesc>
                        </Styled.Stats>

                        <Styled.Stats>
                            <Styled.LiftNumber>
                                {brokenPBs}
                            </Styled.LiftNumber>
                            <Styled.LiftDesc>
                                broken PBs
                            </Styled.LiftDesc>
                        </Styled.Stats>

                        <Styled.Stats>
                            <Styled.LiftNumber>
                                {percentImproved}%
                            </Styled.LiftNumber>
                            <Styled.LiftDesc>
                                improved
                            </Styled.LiftDesc>
                        </Styled.Stats>
                    </Styled.StatsContainer>
                </Styled.InfoContainer>
                <Styled.ResetButton
                    type="button"
                    value="New Results"
                    onClick={resetValues}
                />
            </Styled.LiftInfo>

            <Styled.ChartContainer>
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
            </Styled.ChartContainer>

            <Styled.Tip>
                <Barbell
                    size={22}
                    weight="fill"
                    color={theme.mayaBlue}
                    style={{ marginRight: "6px" }}
                />
                Gym Pro Tip: {tip}
            </Styled.Tip>
        </Styled.Container>
    );
}

export default Result;