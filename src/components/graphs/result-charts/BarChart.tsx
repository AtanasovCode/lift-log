import { useContext, useEffect } from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Tooltip,
    XAxis, YAxis,
    CartesianGrid,
} from "recharts";
import { ChartContext } from "../../../routes/LiftsResults";
import { AppContext } from "../../context/AppContext";
import { CustomTooltip } from "../CustomTooltip";

const BarChartComponent = () => {

    const {
        exercises,
        theme
    } = useContext(ChartContext);

    const numberOfExercises = useContext(AppContext);


    return (
        <ResponsiveContainer width="99%" height={420}>
            <BarChart data={exercises}>
                <XAxis
                    type="category" dataKey="exercise"
                    tick={{ fontSize: 14, fill: "#000" }}
                />
                <YAxis
                    type="number" dataKey="pr"
                    tick={{ fill: "#000" }}
                />
                <Bar
                    dataKey="pr"
                    fill={theme.richBlackDark}
                />
                <Tooltip content={<CustomTooltip />} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarChartComponent;