import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { StrongestLifts } from "../../../assets/data/MockData";
import {
    PieChart,
    Pie,
    Cell,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

import bench from '../../../assets/icons/bench.png'
import deadlift from '../../../assets/icons/deadlift.png';
import ohp from '../../../assets/icons/ohp.png';
import curl from '../../../assets/icons/curl.png';
import squat from '../../../assets/icons/squat.png';
import lat from '../../../assets/icons/lat.png';


const StrongestLiftsChart = () => {

    //Grab theme from styled-components
    const theme = useContext(ThemeContext);

    //Pie Chart Colors
    const colors = [`#810101`, `#5f4a4a`, `#260072`, `#1f221f`, `#005e62`];

    //Custom Tooltip Content
    function CustomTooltip({ label, payload, active }) {

        //Get the src for the exercise icons
        const getExerciseIcon = (name: string) => {
            switch (name) {
                case "Bench Press": return bench;
                case "Overhead Press": return ohp;
                case "Deadlift": return deadlift;
                case "Squat": return squat;
                case "Barbell Curl": return curl;
                case "Lat Pulldown": return lat;
            }
        }

        if (active) {
            return (
                <TooltipContainer>
                        {payload.map((info) => {
                            return (
                                <TooltipExercise key={info.name}>
                                    <TooltipIcon src={getExerciseIcon(info.name)} />
                                    {info.name}:
                                </TooltipExercise>
                            );
                        })}
                        {payload.map((info) => {
                            return <TooltipLift key={info.name}>{info.value}kg</TooltipLift>
                        })}
                </TooltipContainer>
            );
        }
        return null;
    }



    return (
        <Container>
            <Info>
                <Title>
                    Track your strongest lifts!
                </Title>
                <Icons>
                    <IconsSplit>
                        <Icon src={bench} />
                        <Icon src={deadlift} />
                        <Icon src={squat} />
                    </IconsSplit>
                    <IconsSplit>
                        <Icon src={ohp} />
                        <Icon src={curl} />
                        <Icon src={lat} />
                    </IconsSplit>
                </Icons>
            </Info>
            <Chart>
                <PieChart
                    height={360}
                    width={300}
                >
                    <Pie
                        data={StrongestLifts}
                        dataKey="times"
                        innerRadius={60}
                        outerRadius={105}
                        fill="#000"
                        stroke="none"
                        paddingAngle={6}
                        label
                    >
                        {StrongestLifts.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Legend wrapperStyle={{ fontSize: "10px", bottom: "-10px" }} />
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </Chart>
        </Container>
    );
};

export default StrongestLiftsChart;

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 30px;
    background-color: #FF950A;
    color: #000;

    //This targets the legend items individually
    //.recharts-legend-wrapper targets the parent of the legend items
    .recharts-legend-item {
        margin: 5px;
    }
`;

const Chart = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 700;
    color: #fff;
`;

const Info = styled.div`
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
`;

const Icons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const IconsSplit = styled(Icons)`
    margin-top: 20px;
    flex-direction: row;
`;

const Icon = styled.img`
    width: 85px;
    height: 85px;
`;

const TooltipContainer = styled.div`
    padding: 5px;
    background-color: black;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 300;
`;

const TooltipIcon = styled.img`
    width: 20px;
    height: 20px;
    filter: invert(100%);
    margin-right: 6px;
`;

const TooltipExercise = styled.div`
    margin-right: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TooltipLift = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;