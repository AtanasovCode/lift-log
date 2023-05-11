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

const PieChartComponent = () => {

    const {
        exercises,
        COLORS
    } = useContext(ChartContext);

    return (
        <ResponsiveContainer width="99%" height={420}>
            <PieChart>
                <Pie
                    data={exercises}
                    fill="#8884d8"
                    paddingAngle={0}
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
                <Tooltip content={
                    <CustomTooltip
                        chartType={sessionStorage.getItem("chartType")}
                    />
                } />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default PieChartComponent;