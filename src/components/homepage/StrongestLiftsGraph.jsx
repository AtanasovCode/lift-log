import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { useContext, useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { StrongestLifts } from "../../assets/data/MockData";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

import { CustomTooltip } from "../CustomTooltip";

import bench from '../../assets/icons/bench.svg';
import deadlift from '../../assets/icons/deadlift.svg';
import ohp from '../../assets/icons/ohp.svg';
import curl from '../../assets/icons/curl.svg';
import squat from '../../assets/icons/squat.svg';
import lat from '../../assets/icons/lat.svg';

const StrongestLiftsGraph = () => {

    const [pieH, setPieH] = useState();

    // Grab theme from styled-components
    const theme = useContext(ThemeContext);

    // Pie Chart Colors
    const colors = [`#f84040`, `#bfdde3`, `#6316fd`, `#666c66`, `#ff00aa`, '#00f895dd'];

    const size = useWindowSize();

    // Change chart height based on window size
    useEffect(() => {
        let w = size.width;

        if (w !== undefined) {
            if (w >= 1000) setPieH(330);
            else if (w < 1000 && w >= 500) setPieH(300);
            else if (w < 700 && w >= 500) setPieH(180);
            else if (w < 550) setPieH(160);
        }

    }, [size.width]);

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
                <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }} width={300} height={330}>
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
                    <Tooltip content={<CustomTooltip chartType="Donut Chart" />} />
                </PieChart>
            </Chart>
        </Container>
    );
};

export default StrongestLiftsGraph;

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem;
    min-height: 90vh;
    background-color: ${props => props.theme.secondary};
    position: relative;
    color: ${props => props.theme.text};

    //targets the parent of the legend items -> .recharts-legend-wrapper 

    .recharts-legend-item {   //This targets the legend items individually
        margin: 5px;
    }
    
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const Chart = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.text};

    @media (max-width: 900px) {
        font-size: 16px;
    }

    @media (max-width: 700px) {
        font-size: 20px;
    }
`;

const Info = styled.div`
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
        margin-bottom: 35px;
    }
`;

const Title = styled.div`
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    
    @media (max-width: 900px) {
        font-size: 1.5rem;
    }

    @media (max-width: 700px) {
        font-size: 30px;
    }
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
    filter: invert(100%);

    @media (max-width: 900px) {
        width: 65px;
        height: 65px;
    }

    @media (max-width: 700px) {
        width: 50px;
        height: 50px;
    }
`;