import { useState } from 'react';
import * as Styled from '../styles/GetStats.Styled';
import { Outlet, redirect } from 'react-router-dom';

import Nav from '../components/navigation/Nav';
import StrengthStats from '../components/StrengthStats';
import LiftsStats from '../components/LiftsStats';
import Consistency from '../components/Consistency';


const GetStats = ({
    userData,
    setUserData,
    exerciseSelected,
    setExerciseSelected,
    calendarValue,
    setCalendarValue,
}) => {

    const [activeTab, setActiveTab] = useState("strength");
    const [showCalendar, setShowCalendar] = useState(false);
    const [showExercises, setShowExercises] = useState(false);

    const handleCalendarShow = () => {
        setShowCalendar(!showCalendar);
    }

    const handleExerciseShow = () => {
        setShowExercises(!showExercises);
    }

    const handleExerciseSelected = (name: string) => {
        setExerciseSelected(name);
        handleExerciseShow();
    }

    const handleCalendarSubmit = () => {
        handleCalendarShow();
        setCalendarValue("Lifts Updated");
    }

    const handleChangeTab = (e) => {
        setActiveTab(e.currentTarget.id);
    }

    const handleSubmitData = () => {
        let lifts = 0;

        userData.map((lift: any) => {
            if(lift.weight > 0) lifts++;
        })

        if(lifts >= 3 && exerciseSelected != "Select an exercise") {
            return redirect("./get-stats/results");
        }
    }

    //Return correct component based on the active tab
    const getActiveComponent = () => {
        if (activeTab == "strength") {
            return (
                <StrengthStats
                    userData={userData}
                    setUserData={setUserData}
                    handleCalendarShow={handleCalendarShow}
                    handleExerciseShow={handleExerciseShow}
                    handleExerciseSelected={handleExerciseSelected}
                    showExercises={showExercises}
                    exerciseSelected={exerciseSelected}
                    showCalendar={showCalendar}
                    setShowCalendar={setShowCalendar}
                    calendarValue={calendarValue}
                    handleCalendarSubmit={handleCalendarSubmit}
                    handleSubmitData={handleSubmitData}
                />
            );
        }
        if (activeTab == "lifts") {
            return (
                <LiftsStats />
            );
        }
        if (activeTab == "consistency") {
            return (
                <Consistency
                    userData={userData}
                    setUserData={setUserData}
                    handleCalendarShow={handleCalendarShow}
                    handleExerciseShow={handleExerciseShow}
                    handleExerciseSelected={handleExerciseSelected}
                    showExercises={showExercises}
                    exerciseSelected={exerciseSelected}
                    showCalendar={showCalendar}
                    setShowCalendar={setShowCalendar}
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