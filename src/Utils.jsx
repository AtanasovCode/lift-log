import { useStore } from "../useStore";
import { 
    ChartBar, 
    ChartBarHorizontal, 
    ChartPieSlice, 
    ChartDonut,
} from "@phosphor-icons/react";

export const getChartIcon = (name, weight, color) => {
    switch (name) {
        case "Pie Chart": return (
            <ChartPieSlice
                size="100%"
                color={color}
                weight={weight}
            />
        );
        case "Donut Chart": return (
            <ChartDonut
                size="100%"
                color={color}
                weight={weight}
            />
        );
        case "Bar Chart": return (
            <ChartBar
                size="100%"
                weight={weight}
                color={color}
            />
        );
        case "H. Bar Chart": return (
            <ChartBarHorizontal
                size="100%"
                weight={weight}
                color={color}
            />
        );
        default: return (
            <ChartBarHorizontal
                size="100%"
                weight={weight}
                color={color}
            />
        );
    }
};

export const closePopupWithTint = (setValue) => {
    setValue(false);
}
