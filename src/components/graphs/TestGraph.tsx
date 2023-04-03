import styled from "styled-components";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const TestGraph = () => {

    const data = [
        {
            month: "January",
            weight: 110
        },
        {
            month: "February",
            weight: 115
        },
        {
            month: "March",
            weight: 108
        },
        {
            month: "April",
            weight: 107
        },
        {
            month: "May",
            weight: 124
        },
        {
            month: "June",
            weight: 112
        },
        {
            month: "July",
            weight: 105
        },
        {
            month: "August",
            weight: 101
        },
        {
            month: "September",
            weight: 94
        },
        {
            month: "October",
            weight: 97
        },
        {
            month: "November",
            weight: 90
        },
        {
            month: "December",
            weight: 84
        },
    ]

    return (
        <Container>
            <LineChart
                width={400}
                height={400}
                data={data}
            >
                <Line 
                    type="monotone"
                    dataKey="weight"
                    stroke="dodgerblue"
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
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