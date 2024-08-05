import styled from "styled-components";
import { useStore } from "../../useStore";
import { Outlet, useNavigate } from "react-router-dom";

import Nav from "../components/Nav";
import LiftStats from "../components/input-stats/LiftStats";
import StrengthStats from "../components/input-stats/StrengthStats";
import { useEffect } from "react";


const InputStats = () => {

    const navigate = useNavigate();

    const {
        activeTab,
        setActiveTab,
        activeNav,
    } = useStore();

    const handleChangeTab = (e) => {
        setActiveTab(e.currentTarget.id);
    }

    useEffect(() => {
        console.log(`activeNav: ${activeNav}`)
    }, [activeNav])

    return (
        <Container $activeNav={activeNav}>
            {/* Outlet used for navigating to child routes */}
            <Outlet />
            <Nav />

            <Tabs>
                <Tab
                    id="lifts"
                    onClick={(e) => handleChangeTab(e)}
                    active={activeTab == "lifts" ? true : false}
                >
                    Lifts
                </Tab>

                <Tab
                    id="strength"
                    onClick={(e) => handleChangeTab(e)}
                    active={activeTab == "strength" ? true : false}
                >
                    Strength
                </Tab>
            </Tabs>
            \            {
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

const Tabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 2rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        padding: 0 1rem;
        justify-content: center;
        width: 100%;
        margin-bottom: 2rem;
    }
`;

const Tab = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem 1rem;
    border-radius: 16px;
    background-color: ${props => props.theme.secondary};
    color: #d5d4d4;
    margin: 0 .5rem;
    cursor: pointer;
    user-select: none;

    //Tab is currently active:
    background-color: ${props => props.active && props.theme.accent};
    color: ${props => props.active && props.theme.background};
`;