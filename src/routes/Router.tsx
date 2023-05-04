import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import { useState } from "react";

//Importing Error Page
import ErrorPage from "../components/errors/ErrorPage";

//Importing Routes
import Homepage from "./Homepage";
import GetStats from "./GetStats";
import Result from "./Results";


const Router = () => {

    //Important State
    const [userData, setUserData] = useState([
        { month: "Jan", weight: 0 },
        { month: "Feb", weight: 0 },
        { month: "Mar", weight: 0 },
        { month: "Apr", weight: 0 },
        { month: "May", weight: 0 },
        { month: "Jun", weight: 0 },
        { month: "Jul", weight: 0 },
        { month: "Aug", weight: 0 },
        { month: "Sep", weight: 0 },
        { month: "Oct", weight: 0 },
        { month: "Nov", weight: 0 },
        { month: "Dec", weight: 0 },
    ]);
    const [exerciseSelected, setExerciseSelected] = useState("Select an exercise");
    const [calendarValue, setCalendarValue] = useState("Input your lifts")

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />,
            errorElement: <ErrorPage />
        },
        {
            path: "/get-stats",
            element: <GetStats />,
            errorElement: <ErrorPage />
        },
        {
            path: "/get-stats/results",
            element: <Result
                userData={userData}
                setUserData={setUserData}
                exerciseSelected={exerciseSelected}
                setExerciseSelected={setExerciseSelected}
            />,
            errorElement: <ErrorPage />
        }
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Router;