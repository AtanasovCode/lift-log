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
import { ChartContext } from "../../../routes/LiftsResults";
import { CustomTooltip } from "../CustomTooltip";

const DonutChartComponent = () => {

    const {
        exercises,
        COLORS,
    } = useContext(ChartContext);

    return (
        <ResponsiveContainer width="99%" height={420}>
            <PieChart>
                <Pie
                    data={exercises}
                    innerRadius={50}
                    outerRadius={160}
                    paddingAngle={3}
                    fill="#8884d8"
                    dataKey="pr"
                    paddingAngle={3}
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
                <Tooltip content={
                    <CustomTooltip
                        chartType={sessionStorage.getItem("chartType")}
                    />
                } />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default DonutChartComponent;