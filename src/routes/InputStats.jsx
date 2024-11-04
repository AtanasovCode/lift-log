import styled from "styled-components";
import { useStore } from "../../useStore";
import { Outlet, useNavigate } from "react-router-dom";

import Nav from "../components/Nav";
import LiftStats from "../components/input-stats/LiftStats";
import Tabs from "../components/input-stats/Tabs";
import StrengthStats from "../components/input-stats/StrengthStats";
import { useEffect } from "react";


const InputStats = () => {

    const navigate = useNavigate();

    const {
        activeTab,
        activeNav,
    } = useStore();

    useEffect(() => {
        console.log(`activeNav: ${activeNav}`)
    }, [activeNav])

    return (
        <Container $activeNav={activeNav}>
            {/* Outlet used for navigating to child routes */}
            <Outlet />
            <Nav />
            <Tabs />
            {
                activeTab === "lifts" ?
                    <LiftStats
                    />
                    :
                    <StrengthStats
                    />
            }
        </Container>
    );
}

export default InputStats;


const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${props => props.theme.background};

    ${props => props.$activeNav && `
        overflow: hidden;
        height: 100vh;
    `}
`;