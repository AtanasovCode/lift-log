import { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Tooltip,
    XAxis, YAxis,
} from "recharts";
import { ChartContext } from "../../../routes/LiftsResults";
import { CustomTooltip } from "../CustomTooltip";

const HBarChartComponent = () => {

    const {
        exercises,
        theme
    } = useContext(ChartContext);

    return (
        <ResponsiveContainer width="99%" height={420}>
            <BarChart data={exercises} layout="vertical">
                <XAxis 
                    type="number" dataKey="pr" 
                    tick={{fill: "#000"}}
                />
                <YAxis
                    type="category" dataKey="exercise"
                    width={120}
                    tick={{fill: "#000"}}
                />
                <Bar
                    dataKey="pr"
                    fill={theme.richBlackDark}
                    barSize={50}
                />
                <Tooltip content={<CustomTooltip />} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default HBarChartComponent;