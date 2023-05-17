import styled from "styled-components"
import { useState, useContext } from "react";
import { X } from "@phosphor-icons/react";
import { theme } from "../styles/Theme";

import { AppContext } from "./context/AppContext";

const CalendarInput = () => {


    const [activeError, setActiveError] = useState(false);

    const {
        userData, setUserData,
        toggleCalendar, showCalendar,
        calendarSubmit, calendarError,
    } = useContext(AppContext);


    //Updates the weight values based on the user input
    const handleInputChange = (value: number, idx: any) => {

        setUserData((prevMonths) =>
            prevMonths.map((month, i) =>
                i == idx ? { ...month, weight: value } : month
            )
        );

        return;
    }

    return (
        <Calendar>
            <Close onClick={toggleCalendar}>
                <X
                    size="100%"
                    color="#ccc"
                    weight="light"
                />
            </Close>
            <Heading>
                <Title>
                    Calendar
                </Title>
                <Description>
                    Input your heaviest lift for each month
                </Description>
                <Disclaimer>
                    If you don't have a lift for a certain month,
                    leave it empty.
                </Disclaimer>
            </Heading>
            <Months>
                {
                    userData.map((month: any, index: any) => {
                        return (
                            <Month key={month.month}>
                                <MonthName>{month.month}</MonthName>
                                <MonthInput
                                    type="text"
                                    placeholder="0"
                                    maxLength={3}
                                    value={month.weight > 0 ? month.weight : ""}
                                    onChange={(e) => {
                                        handleInputChange(parseInt(e.currentTarget.value), index);
                                    }}
                                />
                            </Month>
                        );
                    })
                }
            </Months>
            <Submit
                type="button"
                value="Submit Lifts"
                onClick={calendarSubmit}
            />
            {
                calendarError && <ErrorMsg>Atleast 3 lifts needed</ErrorMsg>
            }
        </Calendar>
    );
};

export default CalendarInput;

const Calendar = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 15;
    padding: 25px;
    background-color: ${props => props.theme.richBlackDark};
    border: 1px solid ${props => props.theme.mayaBlue};
    border-radius: 15px;
    max-width: 700px;
    width: 70vw;

    @media (max-width: 700px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }

    @media (max-width: 550px) {
        min-height: 100vh;
    }
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;

    @media (max-width: 700px) {
        margin-bottom: 20px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;

    @media (max-width: 700px) {
        font-size: 20px;
    }
`;

const Description = styled.div`
    font-size: 15px;
    margin-bottom: 10px;
    text-align: center;
`;

const Disclaimer = styled.div`
    font-size: 14px;
    color: darkgray;
    text-align: center;
`;

const Months = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    @media (max-width: 750px) {
        grid-gap: 10px;
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Month = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.theme.mayaBlueDark};
    border-radius: 8px;
    position: relative;
`;

const MonthName = styled.div`
    font-size: 17px;
    font-weight: 600;
    padding: 5px;
    background-color: ${props => props.theme.mayaBluePale};
    color: #fff;
    width: 100%;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 15px;
    }
`;

const MonthInput = styled.input`
    width: 100%;
    height: 35px;
    padding: 5px;
    padding-left: 12px;
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 16px;
`;

const UnitSelect = styled.div`
    font-size: 14px;
    color: darkgray;
    position: absolute;
    right: 10px;
    bottom: 10px;
`;

const Submit = styled.input`
    font-size: 16px;
    background-color: ${props => props.theme.mayaBluePale};
    color: #fff;
    text-align: center;
    width: 100%;
    height: 45px;
    margin-top: 40px;
    border-radius: 8px;
    border: none;

    &:hover {
        background-color: ${props => props.theme.mayaBlueDark};
    }


    @media (max-width: 500px) {
        font-size: 15px;
        height: 40px;
        margin-top: 25px;
    }
`;

const ErrorMsg = styled.div`
    font-size: 15px;
    color: #cf3838;
    text-align: center;
    margin-top: 10px;
`;

const Close = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    cursor: pointer;
`;