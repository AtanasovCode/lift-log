import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AppContextProps {
    userData: { month: string; weight: number }[];
    setUserData: React.Dispatch<React.SetStateAction<{ month: string; weight: number }[]>>;
    exerciseSelected: string;
    setExerciseSelected: React.Dispatch<React.SetStateAction<string>>;
    showCalendar: boolean;
    calendarValue: string;
    setCalendarValue: React.Dispatch<React.SetStateAction<string>>;
    setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
    showExercises: boolean;
    setShowExercises: React.Dispatch<React.SetStateAction<boolean>>;
    showCharts: boolean;
    setShowCharts: React.Dispatch<React.SetStateAction<boolean>>;
    toggleCalendar: () => void;
    toggleExercises: () => void;
    toggleCharts: () => void;
    submitData: () => void;
    calendarSubmit: () => void;
}

export const AppContext = createContext<AppContextProps>({
    userData: [],
    setUserData: () => { },
    exerciseSelected: 'Select an exercise',
    setExerciseSelected: () => { },
    showCalendar: false,
    calendarValue: "Input your lifts",
    setCalendarValue: () => { },
    setShowCalendar: () => { },
    showExercises: false,
    setShowExercises: () => { },
    showCharts: false,
    setShowCharts: () => { },
    toggleCalendar: () => { },
    toggleExercises: () => { },
    toggleCharts: () => { },
    submitData: () => { },
    calendarSubmit: () => { },
});

export const AppProvider: React.FC = ({ children }) => {

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

    const [exerciseSelected, setExerciseSelected] = useState<string>('Select an exercise');
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const [calendarValue, setCalendarValue] = useState("Input your lifts")
    const [showExercises, setShowExercises] = useState<boolean>(false);
    const [showCharts, setShowCharts] = useState<boolean>(false);

    const toggleCalendar = () => setShowCalendar(!showCalendar);
    const toggleExercises = () => setShowExercises(!showExercises);
    const toggleCharts = () => setShowCharts(!showCharts);

    //Checks to see if user has selected an exercise
    //and has values for at least 3 lifts
    //If true, the function navigates to the results page
    const submitData = (navigate) => {
        let lifts = 0;

        userData.map((lift: any) => {
            if (lift.weight > 0) lifts++;
        })

        if (lifts >= 3 && exerciseSelected != "Select an exercise") {
            navigate("/get-stats/results");
        }
    }

    //When the user clicks submit inside of the CalendarInput component
    const calendarSubmit = () => {
        //We need to stringify an array with objects to set it to session storage
        sessionStorage.setItem("userDataStrength", JSON.stringify(userData));


        toggleCalendar();
        setCalendarValue("Lifts Updated");
    }

    const contextValue = {
        userData,
        setUserData,
        exerciseSelected,
        setExerciseSelected,
        showCalendar,
        setShowCalendar,
        calendarValue,
        setCalendarValue,
        showExercises,
        setShowExercises,
        showCharts,
        setShowCharts,
        toggleCalendar,
        toggleExercises,
        toggleCharts,
        submitData,
        calendarSubmit,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};