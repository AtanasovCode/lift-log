import styled from "styled-components"
import { ArrowDown } from "@phosphor-icons/react";

const CalendarInput = () => {
    return (
        <Calendar>
            <Title>
                Calendar
            </Title>
            <Months>
                <Month>
                    <MonthName>Jan</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>Feb</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>Mar</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>Apr</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>May</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>Jun</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>Jul</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>Aug</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>Sep</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>Oct</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>Nov</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
                <Month>
                    <MonthName>Dec</MonthName>
                    <MonthInput type="text" placeholder="35" />
                </Month>
            </Months>
        </Calendar>
    );
};

export default CalendarInput;

const Calendar = styled.div`
    padding: 25px;
    border: 1px solid #fff;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
    font-weight: 700;
`;

const Months = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const Month = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
    border: 1px solid ${props => props.theme.lighterGreen};
    position: relative;
`;

const MonthName = styled.div`
    font-size: 17px;
    font-weight: 600;
    padding: 5px;
    background-color: ${props => props.theme.lighterGreen};
    color: #000;
    width: 100%;
    text-align: center;
`;

const MonthInput = styled.input`
    width: 100%;
    height: 35px;
    padding: 5px;
    padding-left: 8px;
    background-color: transparent;
    border: 1px solid #ffffff60;
    border-top: none;
    color: #ffffff;
`;

const UnitSelect = styled.div`
    font-size: 14px;
    color: darkgray;
    position: absolute;
    right: 10px;
    bottom: 10px;
`;