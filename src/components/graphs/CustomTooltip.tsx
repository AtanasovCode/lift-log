import { getExerciseIcon } from "../GetIcon";
import styled from "styled-components";

export const CustomTooltip = ({ payload, active, chartType }) => {

    if (active) {
        const {name, pr, value } = payload[0];

        if (chartType === 'Donut Chart' || chartType == "Pie Chart") {
            return (
                <TooltipContainer>
                    <TooltipExercise>
                        <TooltipIcon src={getExerciseIcon(name)} />
                        {name}:
                    </TooltipExercise>
                    <TooltipLift>{pr ? pr : value}kg</TooltipLift>
                </TooltipContainer>
            );
        } else if (chartType === "Bar Chart" || chartType =="H. Bar Chart") {
            const { name, pr } = payload[0].payload;
            return (
                <TooltipContainer>
                    <TooltipExercise>
                        <TooltipIcon src={getExerciseIcon(name)} />
                        {name}:
                    </TooltipExercise>
                    <TooltipLift>{pr}kg</TooltipLift>
                </TooltipContainer>
            );
        }
    }

    return null;
}


const TooltipContainer = styled.div`
    padding: 10px;
    background-color: ${props => props.theme.richBlackDark};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 300;
    border: none;
`;

const TooltipIcon = styled.img`
    width: 20px;
    height: 20px;
    filter: invert(100%);
    margin-right: 6px;
`;

const TooltipExercise = styled.div`
    margin-right: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TooltipLift = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;