import styled from "styled-components"
import { useState } from "react";
import { X } from "@phosphor-icons/react";
import { theme } from "../styles/Theme";

const CalendarInput = ({
    userData, 
    setUserData,
    showCalendar,
    setShowCalendar,
    handleCalendarShow,
}) => {
    const [activeError, setActiveError] = useState(false);


    //Updates the weight values based on the user input
    const handleInputChange = (value: number, idx: any) => {

        setUserData((prevMonths) =>
            prevMonths.map((month, i) =>
                i == idx ? { ...month, weight: value } : month
            )
        );

        return;
    }

    const activateErrorMessage = () => {
        let lifts = 0;

        userData.map((data) => {
            if(data.weight > 0 && data.weight != "") lifts++;
        })

        if(lifts < 3) {
            setActiveError(true);
        }else {
            setActiveError(false);
        }
    }



    const test = () => {
        activateErrorMessage();

        activeError ? console.log("Error") : console.log(userData);
    }

    return (
        <Calendar active={showCalendar}>
            <Close onClick={handleCalendarShow}>
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
                    userData.map((month, index) => {
                        return (
                            <Month key={month.month}>
                                <MonthName>{month.month}</MonthName>
                                <MonthInput
                                    type="text"
                                    placeholder="0"
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
            {
                activeError && 
                <Error>
                    You need to have at least 3 lifts!
                </Error>
            }
            <Submit 
                type="button" 
                value="Submit Lifts" 
                onClick={test}
            />
        </Calendar>
    );
};

export default CalendarInput;

const Calendar = styled.div`
    padding: 25px;
    border: 1px solid #ffffff50;
    border-radius: 12px;
    position: absolute;
    top: -200%;
    width: 0;
    height: 0;
    opacity: 0;
    background-color: ${props => props.theme.richBlackDark};
    z-index: 10;
    max-width: 650px;

    //calendar is active 
    ${props => props.active && `
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: auto;
        height: auto;
        opacity: 1;
    `}
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const Description = styled.div`
    font-size: 15px;
    margin-bottom: 6px;
`;

const Disclaimer = styled.div`
    font-size: 14px;
    color: darkgray;
`;

const Months = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`;

const Month = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid ${props => props.theme.mayaBluePale};
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
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
`;

const MonthInput = styled.input`
    width: 100%;
    height: 35px;
    padding: 5px;
    padding-left: 12px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.mayaBluePale};
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    border-top: none;
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

    &:hover {
        background-color: ${props => props.theme.mayaBlueDark};
    }
`;

const Error = styled.div`
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