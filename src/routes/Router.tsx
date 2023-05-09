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
import LiftsResults from "./LiftsResults";


const Router = () => {

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
            element: <Result />,
            errorElement: <ErrorPage />
        },
        {
            path: "/get-stats/lifts-stats",
            element: <LiftsResults />,
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