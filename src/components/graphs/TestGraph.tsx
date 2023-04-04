import styled from "styled-components";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const TestGraph = () => {

    const data = [
        {
            month: "Jan",
            weight: 30
        },
        {
            month: "Feb",
            weight: 35
        },
        {
            month: "Mar",
            weight: 40
        },
        {
            month: "Apr",
            weight: 45
        },
        {
            month: "May",
            weight: 45
        },
        {
            month: "Jun",
            weight: 50
        },
        {
            month: "Jul",
            weight: 50
        },
        {
            month: "Aug",
            weight: 55
        },
        {
            month: "Sep",
            weight: 60
        },
        {
            month: "Oct",
            weight: 65
        },
        {
            month: "Nov",
            weight: 65
        },
        {
            month: "Dec",
            weight: 70
        },
    ]

    return (
        <Container>
            <LineChart
                width={550}
                height={150}
                data={data}
            >
                <Line 
                    type="monotone"
                    dataKey="weight"
                    stroke="dodgerblue"
                />
                <XAxis dataKey="month" />
                <YAxis domain={[25, 80]} />
                <Tooltip 
                    contentStyle={
                        {width: 300, 
                            background: "#222", 
                            borderColor: "#111",
                            color: "#fff",
                        }}
                />
            </LineChart>
        </Container>
    );
}

export default TestGraph;

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;