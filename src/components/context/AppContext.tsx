import React, { createContext, useState } from "react";

interface AppContextProps {
    //State used for StrengthStats
    userData: { month: string; weight: number }[];
    setUserData: React.Dispatch<React.SetStateAction<{ month: string; weight: number }[]>>;
    exerciseSelected: string;
    setExerciseSelected: React.Dispatch<React.SetStateAction<string>>;

    showCalendar: boolean;
    setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
    calendarValue: string;
    calendarSubmit: () => void;
    setCalendarValue: React.Dispatch<React.SetStateAction<string>>;
    calendarError: boolean;
    setCalendarError: React.Dispatch<React.SetStateAction<boolean>>;
    showExercises: boolean;
    setShowExercises: React.Dispatch<React.SetStateAction<boolean>>;

    //State used in LiftsStats:
    exercisesData: { name: string, pr: number }[];
    setExercisesData: React.Dispatch<React.SetStateAction<{ name: string, pr: number }[]>>;
    showMultipleExercises: boolean;
    setShowMultipleExercises: React.Dispatch<React.SetStateAction<boolean>>;
    showCharts: boolean;
    setShowCharts: React.Dispatch<React.SetStateAction<boolean>>;
    numberOfExercises: number;
    setNumberOfExercises: React.Dispatch<React.SetStateAction<number>>;

    //Functions for toggling components on/off
    toggleCalendar: () => void;
    toggleExercises: () => void;
    toggleCharts: () => void;
    toggleMultipleExercises: () => void;
}

export const AppContext = createContext<AppContextProps>({
    userData: [],
    setUserData: () => { },
    exercisesData: [],
    setExercisesData: () => { },
    exerciseSelected: 'Select an exercise',
    setExerciseSelected: () => { },
    showCalendar: false,
    calendarValue: "Input your lifts",
    setCalendarValue: () => { },
    setShowCalendar: () => { },
    calendarError: false,
    setCalendarError: () => { },
    showExercises: false,
    setShowExercises: () => { },
    showMultipleExercises: false,
    setShowMultipleExercises: () => { },
    showCharts: false,
    numberOfExercises: 2,
    setNumberOfExercises: () => { },
    setShowCharts: () => { },
    toggleCalendar: () => { },
    toggleExercises: () => { },
    toggleMultipleExercises: () => { },
    toggleCharts: () => { },
    calendarSubmit: () => { },
});

export const AppProvider = ({ children }) => {

    const [userData, setUserData] = useState<{ month: string; weight: number }[]>([
        { month: 'Jan', weight: 0 },
        { month: 'Feb', weight: 0 },
        { month: 'Mar', weight: 0 },
        { month: 'Apr', weight: 0 },
        { month: 'May', weight: 0 },
        { month: 'Jun', weight: 0 },
        { month: 'Jul', weight: 0 },
        { month: 'Aug', weight: 0 },
        { month: 'Sep', weight: 0 },
        { month: 'Oct', weight: 0 },
        { month: 'Nov', weight: 0 },
        { month: 'Dec', weight: 0 },
    ]);
    const [exercisesData, setExercisesData] = useState<{ name: string, pr: number }[]>([]);

    const [exerciseSelected, setExerciseSelected] = useState<string>('Select an exercise');
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [calendarValue, setCalendarValue] = useState("Input your lifts");
    const [calendarError, setCalendarError] = useState(false);
    const [showExercises, setShowExercises] = useState<boolean>(false);
    const [showMultipleExercises, setShowMultipleExercises] = useState<boolean>(false)
    const [showCharts, setShowCharts] = useState<boolean>(false);
    const [numberOfExercises, setNumberOfExercises] = useState(2);
    sessionStorage.setItem("numberOfExercises", "2");

    const toggleCalendar = () => setShowCalendar(!showCalendar);
    const toggleExercises = () => setShowExercises(!showExercises);
    const toggleCharts = () => setShowCharts(!showCharts);
    const toggleMultipleExercises = () => {
        setShowMultipleExercises(!showMultipleExercises);
        setExercisesData([]);
    };

    const activateErrorMessage = (lifts: number) => {
        let error: boolean = false;

        if (lifts < 3) {
            error = true;
        } else {
            error = false;
        }

        return error;
    }

    //When the user clicks submit inside of the CalendarInput component
    const calendarSubmit = () => {

        let lifts = 0;

        userData.map((data) => {
            if (data.weight > 0) lifts++;
        })

        //Check to see if the user has provided data for atleast 3 input fields
        if (activateErrorMessage(lifts) == false) {
            //We need to stringify an array with objects to set it to session storage
            sessionStorage.setItem("userDataStrength", JSON.stringify(userData));

            toggleCalendar();
            setCalendarError(false);
            setCalendarValue("Lifts Updated");
        } else {
            setCalendarError(true);
        }
    }

    const contextValue = {
        userData,
        setUserData,
        exerciseSelected,
        setExerciseSelected,
        showCalendar,
        setShowCalendar,
        exercisesData,
        setExercisesData,
        calendarValue,
        setCalendarValue,
        showExercises,
        calendarError,
        toggleMultipleExercises,
        setShowExercises,
        showCharts,
        setShowCharts,
        toggleCalendar,
        toggleExercises,
        toggleCharts,
        calendarSubmit,
        numberOfExercises,
        setNumberOfExercises,
        showMultipleExercises,
        setShowMultipleExercises,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};