import { getExerciseIcon } from "../GetIcon";
import styled from "styled-components";

export const CustomTooltip = ({ payload, active }) => {

    if (active) {
        console.log(payload);
        return (
            <TooltipContainer>
                {payload.map((info) => {
                    return (
                        <TooltipExercise key={info.name}>
                            <TooltipIcon src={getExerciseIcon(info.name)} />
                            {info.name}:
                        </TooltipExercise>
                    );
                })}
                {payload.map((info: any) => {
                    return <TooltipLift key={info.name}>{info.value}kg</TooltipLift>
                })}
            </TooltipContainer>
        );
    }
    return null;
}


const TooltipContainer = styled.div`
    padding: 5px;
    background-color: black;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 300;
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