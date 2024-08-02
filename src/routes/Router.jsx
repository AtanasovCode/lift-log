import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { night, dark } from "../Theme";
import { useStore } from "../../useStore";
import { GlobalStyle } from '../GlobalStyle';

//routes
import Homepage from "./Homepage";
import InputStats from "./InputStats";
import StrengthResult from "./StrengthResult";
import LiftsResults from "./LiftResult";

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/input-stats",
            element: <InputStats />,
        },
        {
            path: "/strength-result",
            element: <StrengthResult />,
        },
        {
            path: "/lift-result",
            element: <LiftsResults />,
        },
    ]);

    const getTheme = () => {
        return useStore((state) => state.theme) === "night" ? night : dark;
    }

    return (
        <ThemeProvider theme={getTheme()}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default Router;