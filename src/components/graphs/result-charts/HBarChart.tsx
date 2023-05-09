import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Tooltip,
    XAxis, YAxis,
} from "recharts";

const HBarChartComponent = ({
    exercises,
    theme,
}) => {
    return (
        <ResponsiveContainer width="99%" height={420}>
            <BarChart data={exercises} layout="vertical">
                <XAxis type="number" dataKey="pr" />
                <YAxis 
                    type="category" 
                    dataKey="exercise" 
                    width={120}
                />
                <Bar
                    dataKey="pr"
                    fill={theme.lightGreen}
                    barSize={50}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default HBarChartComponent;