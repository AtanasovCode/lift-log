import { useState, useContext, useEffect } from 'react';
import * as Styled from '../styles/GetStats.Styled';
import { Outlet, useNavigate } from 'react-router-dom';

import { AppContext } from '../components/context/AppContext';

import Nav from '../components/navigation/Nav';
import StrengthStats from '../components/StrengthStats';
import LiftsStats from '../components/LiftsStats';
import Consistency from '../components/Consistency';


const GetStats = () => {

    const navigate = useNavigate();

    const [defaultTab, setDefaultTab] = useState("strength");
    const [activeTab, setActiveTab] = useState(
        sessionStorage.getItem("activeTab") || defaultTab
    );
    const [errorActive, setErrorActive] = useState(false);

    const {
        userData, setUserData,
        exerciseSelected, setExerciseSelected,
        calendarValue, setCalendarValue,
        toggleCalendar, toggleExercises,
    } = useContext(AppContext);


    useEffect(() => {
        sessionStorage.setItem("activeTab", activeTab);
    }, [activeTab])

    const handleChangeTab = (e: any) => {
        setActiveTab(e.currentTarget.id);
    }

    //Return correct component based on the active tab
    const getActiveComponent = () => {
        if (activeTab == "strength") {
            return (
                <StrengthStats
                    errorActive={errorActive}
                    setErrorActive={setErrorActive}
                />
            );
        }
        if (activeTab == "lifts") {
            return (
                <LiftsStats 
                    errorActive={errorActive}
                    setErrorActive={setErrorActive}
                />
            );
        }
    }


    return (
        <Styled.Container>
            {/* Outlet used for navigating to child routes */}
            <Outlet />
            <Nav />

            <Styled.Tabs>
                <Styled.Tab
                    id="strength"
                    onClick={(e) => handleChangeTab(e)}
                    active={activeTab == "strength" ? true : false}
                >
                    Strength
                </Styled.Tab>
                <Styled.TabGreen
                    id="lifts"
                    onClick={(e) => handleChangeTab(e)}
                    active={activeTab == "lifts" ? true : false}
                >
                    Lifts
                </Styled.TabGreen>
            </Styled.Tabs>
            {getActiveComponent()}
        </Styled.Container>
    );
};

export default GetStats;
