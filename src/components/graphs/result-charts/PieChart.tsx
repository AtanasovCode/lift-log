import { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";
import { ChartContext } from "../../../routes/LiftsResults";
import { CustomTooltip } from "../CustomTooltip";
import { getExerciseIcon } from "../../GetIcon";

const PieChartComponent = () => {

    const {
        exercises,
        COLORS,
        chartHeight,
    } = useContext(ChartContext);

    const customLabel = ({ value }) => {
        return <text fill="#000">{value}</text>
    }

    return (
        <ResponsiveContainer width="99%" height={chartHeight}>
            <PieChart>
                <Pie
                    data={exercises}
                    fill="red"
                    paddingAngle={0}
                    dataKey="pr"
                    label
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
                <Legend
                    wrapperStyle={{ fontSize: "12px", bottom: "-10px" }}
                    iconType="circle"
                />
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