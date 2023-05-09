import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Tooltip,
    XAxis, YAxis,
} from "recharts";

const BarChartComponent = ({
    exercises
}) => {

    const theme = useContext(ThemeContext);

    return (
        <ResponsiveContainer width="99%" height={420}>
            <BarChart data={exercises}>
                <XAxis 
                    type="category" dataKey="exercise"
                    tick={{fontSize: 14}} 
                />
                <YAxis type="number" dataKey="pr" />
                <Bar
                    dataKey="pr"
                    fill={theme.lightGreen}
                    barSize={50}
                />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarChartComponent;