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
    const colors = [`#1A4B4C`, `#404040`, `#00275b`, `#80014b`, `#2F2D2E`];



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
                    height={340}
                    width={300}
                >
                    <Pie
                        data={StrongestLifts}
                        dataKey="times"
                        innerRadius={60}
                        outerRadius={105}
                        fill="#000"
                        stroke="none"
                        paddingAngle={4}
                        label
                    >
                        {StrongestLifts.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Legend wrapperStyle={{ fontSize: "10px", bottom: "-25px" }} />
                    <Tooltip />
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
    padding: 80px 100px;
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