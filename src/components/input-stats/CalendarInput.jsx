import styled from "styled-components"
import { useState } from "react";
import { useStore } from "../../../useStore";
import { X } from "@phosphor-icons/react";

const CalendarInput = () => {

    const [activeError, setActiveError] = useState(false);

    const {
        userData, setUserData,
        toggleCalendar, showCalendar,
        calendarSubmit, calendarError,
    } = useStore();

    // Updates the weight values based on the user input
    const handleInputChange = (value, idx) => {
        // Parse the input value and set it to 0 if NaN (e.g., if the input is cleared)
        const parsedValue = parseInt(value, 10) || 0;

        // Update the userData state
        setUserData(value, idx);
    };


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
                <Title>Weight Input</Title>
                <Description>Input your heaviest lift for each month</Description>
                <Disclaimer>If you don't have a lift for a certain month, leave it empty.</Disclaimer>
            </Heading>
            <Months>
                {Array.isArray(userData) && userData.map((month, index) => (
                    <Month key={month.month}>
                        <MonthName>{month.month}</MonthName>
                        <MonthInput
                            type="text"
                            placeholder="0"
                            maxLength={4}
                            value={month.weight > 0 ? month.weight : ""}
                            onChange={(e) => handleInputChange(parseInt(e.currentTarget.value), index)}
                        />
                    </Month>
                ))}

            </Months>
            <Submit
                type="button"
                value="Submit Lifts"
                onClick={calendarSubmit}
            />
            {calendarError && <ErrorMsg>At least 3 lifts needed</ErrorMsg>}
        </Calendar>
    );
};

export default CalendarInput;

const Calendar = styled.div`
    max-width: 1024px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 99;
    padding: 1.5rem;
    background-color: ${props => props.theme.background};
    border-radius: 16px;
    width: 50%;

    @media (max-width: 1024px) {
        width: 80%;
        overflow-y: auto;
    }

    @media (max-width: 768px) {
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
    margin-bottom: 2.2rem;

    @media (max-width: 700px) {
        margin-bottom: 20px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: .6rem;

    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

const Description = styled.div`
    font-size: 17px;
    margin-bottom: .6rem;
    text-align: center;

    @media (max-width: 550px) {
        font-size: 16px;
        padding: 0 2rem;
    }
`;

const Disclaimer = styled.div`
    font-size: 14px;
    color: #c1bfbf;
    text-align: center;

    @media (max-width: 550px) {
        font-size: 13px;
        padding: 0 2rem;
    }
`;

const Months = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: .5rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: .4rem;
    }
`;

const Month = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.secondary};
    border-radius: 16px;
    position: relative;
`;

const MonthName = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    padding: .5rem;
    color: ${props => props.theme.text};
    width: 100%;
    text-align: center;
    margin-bottom: .5rem;

    @media (max-width: 550px) {
        font-size: .9rem;
        padding: .3rem;
    }
`;

const MonthInput = styled.input`
    width: 100%;
    height: 35px;
    padding: .5rem;
    text-align: center;
    background-color: transparent;
    border: none;
    color: ${props => props.theme.text};
    font-size: 16px;

    @media (max-width: 550px) {
        padding: .3rem;
    }
`;

const Submit = styled.input`
    font-size: 16px;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    text-align: center;
    width: 100%;
    padding: 1rem 2rem;
    margin-top: 3rem;
    border-radius: 16px;
    border: none;

    &:hover {
        background-color: ${props => props.theme.mayaBlueDark};
    }

    @media (max-width: 550px) {
        font-size: 15px;
        padding: .5rem 1rem;
        margin-top: 2rem;
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
    top: 5%;
    right: 5%;
    width: 30px;
    cursor: pointer;
`;
