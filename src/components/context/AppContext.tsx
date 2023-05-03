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
    numberOfExercises: number;
    setNumberOfExercises: React.Dispatch<React.SetStateAction<number>>;
    toggleCalendar: () => void;
    toggleExercises: () => void;
    toggleCharts: () => void;
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
    numberOfExercises: 0,
    setNumberOfExercises: () => { },
    setShowCharts: () => { },
    toggleCalendar: () => { },
    toggleExercises: () => { },
    toggleCharts: () => { },
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
    const [numberOfExercises, setNumberOfExercises] = useState(2);

    const toggleCalendar = () => setShowCalendar(!showCalendar);
    const toggleExercises = () => setShowExercises(!showExercises);
    const toggleCharts = () => setShowCharts(!showCharts);

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
        calendarSubmit,
        numberOfExercises,
        setNumberOfExercises,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};