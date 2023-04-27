import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import * as Styled from '../styles/Result.Styled';
import { tips } from '../assets/data/MockData';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { Barbell } from '@phosphor-icons/react';

const Result = ({
    userData,
    setUserData,
    exerciseSelected,
    setExerciseSelected,
    getExerciseIcon,
}) => {

    //We use this to use our theme
    //Outside of styled-components
    const theme = useContext(ThemeContext);

    const [YAxisHighestValue, setYAxisHighestValue] = useState(0);
    const [YAxisLowestValue, setYAxisLowestValue] = useState(0);
    const [tip, setTip] = useState("");

    const [strongestLift, setStrongestLift] = useState(0);
    const [weakestLift, setWeakestLift] = useState(0);
    const [weakestMonth, setWeakestMonth] = useState("");
    const [strongestMonth, setStrongestMonth] = useState("");
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
        let weakest = 999999;

        let firstLift = 0;
        let lastLift = 0;
        let indexFirst = -1;
        let indexLast = -1;

        let strongestM = "";
        let weakestM = "";

        let data = sessionStorage.getItem("userDataStrength");
        if (data != null) {

            setCurrentData(JSON.parse(data));

            //Need to parse the data to be able to map it
            JSON.parse(data).map((lift: any, index: number) => {

                //Get the very first and very last lift
                //To calculate percentage of progress made
                if(lift.weight > 0) {
                    if(indexFirst === -1) {
                        indexFirst = lift.index;
                        firstLift = lift.weight;
                    }
                    indexLast = lift.index;
                    lastLift = lift.weight;
                }


                //Get the strongest and weakest lift
                if (lift.weight > strongest) {
                    strongest = lift.weight
                    strongestM = lift.month;
                }
                if (lift.weight != 0 && lift.weight < weakest) {
                    weakest = lift.weight;
                    weakestM = lift.month;
                }
            })
        }

        //Setting the highest value for the YAxis
        setYAxisHighestValue(strongest + 10);

        //Set the lowest value for the YAxis
        weakest >= 5 ? setYAxisLowestValue(weakest - 5) : setYAxisLowestValue(weakest);

        //Get the improvement in percentage
        //Calculated based on the very first lift, and 
        //the very last lift
        setPercentImproved(calculateImprovement(firstLift, lastLift));


        setStrongestLift(strongest);
        setStrongestMonth(strongestM);

        setWeakestLift(weakest);
        setWeakestMonth(weakestM);

    }, [])

    return (
        <Styled.Container>
            <Styled.LiftInfo>
                <Styled.LiftIcon
                    src={getExerciseIcon(currentExercise)}
                />
                <Styled.LiftText>
                    <Styled.LiftName>
                        {currentExercise}
                    </Styled.LiftName>
                    <Styled.LiftData>
                        <Styled.LiftStats>
                            <Styled.Stat>
                                Strongest Lift: {strongestLift}kg,
                            </Styled.Stat>
                            <Styled.Stat>
                                Lifted In: {strongestMonth}
                            </Styled.Stat>
                        </Styled.LiftStats>
                        <Styled.LiftStats>
                            <Styled.Stat>
                                Weakest Lift: {weakestLift}kg,
                            </Styled.Stat>
                            <Styled.Stat>
                                Lifted In: {weakestMonth}
                            </Styled.Stat>
                        </Styled.LiftStats>
                    </Styled.LiftData>
                    <Styled.Improved>
                        You improved your strength by:
                        <Styled.Percent positive={percentImproved >= 0 ? true : false}>
                            {percentImproved}%
                        </Styled.Percent>
                    </Styled.Improved>
                </Styled.LiftText>
            </Styled.LiftInfo>

            <Styled.ChartContainer>
                <ResponsiveContainer width="99%" height={350}>
                    <LineChart>
                        <Line data={currentData} dataKey="weight" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[YAxisLowestValue, YAxisHighestValue]} />
                        <Tooltip />
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