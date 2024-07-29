import { getExerciseIcon } from "../GetIcon";
import styled from "styled-components";

export const CustomTooltip = ({ payload, active, chartType }) => {

    if (active) {
        const {name, pr, value } = payload[0];

        if (chartType === 'Donut Chart' || chartType == "Pie Chart") {
            return (
                <TooltipContainer key={name}>
                    <TooltipExercise>
                        <TooltipIcon src={getExerciseIcon(name)} />
                        {name}
                    </TooltipExercise>
                    <TooltipLift>{pr ? pr : value}kg</TooltipLift>
                </TooltipContainer>
            );
        } else if (chartType === "Bar Chart" || chartType =="H. Bar Chart") {
            const { name, pr } = payload[0].payload;
            return (
                <TooltipContainer key={name}>
                    <TooltipExercise>
                        <TooltipIcon src={getExerciseIcon(name)} />
                        {name}
                    </TooltipExercise>
                    <TooltipLift>{pr}kg</TooltipLift>
                </TooltipContainer>
            );
        }
    }

    return null;
}


const TooltipContainer = styled.div`
    padding: .5rem;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 16px;
    border: transparent;
`;

const TooltipIcon = styled.img`
    width: 32px;
    height: 32px;
    filter: invert(100%);
    margin-right: 7px;
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
    color: ${props => props.theme.accent};
    font-family: 'Dosis', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
`;