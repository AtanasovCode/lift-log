import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const DonutChartComponent = ({
    theme,
    exercises
}) => {

    const COLORS = [
        theme.lightGreen,
        theme.darkPurple,
        theme.softOrange,
        theme.lightPurple,
        theme.darkGreen,
        theme.mayaBlue,
    ];

    return (
        <ResponsiveContainer width="99%" height={420}>
            <PieChart>
                <Pie
                    data={exercises}
                    innerRadius={50}
                    outerRadius={160}
                    fill="#8884d8"
                    paddingAngle={4}
                    dataKey="pr"
                >
                    {
                        exercises.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`} 
                                fill={COLORS[index % COLORS.length]} 
                                stroke="none"
                            />
                        ))
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default DonutChartComponent;