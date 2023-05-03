import { useState, useContext } from 'react';
import * as Styled from '../styles/GetStats.Styled';
import { Outlet, useNavigate } from 'react-router-dom';

import { AppContext } from '../components/context/AppContext';

import Nav from '../components/navigation/Nav';
import StrengthStats from '../components/StrengthStats';
import LiftsStats from '../components/LiftsStats';
import Consistency from '../components/Consistency';


const GetStats = () => {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("strength");

    const {
        userData, setUserData,
        exerciseSelected, setExerciseSelected,
        calendarValue, setCalendarValue,
        toggleCalendar, toggleExercises,
    } = useContext(AppContext);

    const handleChangeTab = (e) => {
        setActiveTab(e.currentTarget.id);
    }


    //Checks to see if user has selected an exercise
    //and has values for at least 3 lifts
    //If true, the function navigates to the results page
    const submitData = () => {
        let lifts = 0;

        userData.map((lift: any) => {
            if (lift.weight > 0) lifts++;
        })

        if (lifts >= 3 && exerciseSelected != "Select an exercise") {
            navigate("/get-stats/results");
        }
    }

    //Return correct component based on the active tab
    const getActiveComponent = () => {
        if (activeTab == "strength") {
            return (
                <StrengthStats
                    submitData={submitData}
                />
            );
        }
        if (activeTab == "lifts") {
            return (
                <LiftsStats
                    submitData={submitData}
                />
            );
        }
        if (activeTab == "consistency") {
            return (
                <Consistency
                    submitData={submitData}
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
                <Styled.TabPurple
                    id="consistency"
                    onClick={(e) => handleChangeTab(e)}
                    active={activeTab == "consistency" ? true : false}
                >
                    Consistency
                </Styled.TabPurple>
            </Styled.Tabs>
            {getActiveComponent()}
        </Styled.Container>
    );
};

export default GetStats;
