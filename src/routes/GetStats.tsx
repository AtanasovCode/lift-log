import { useState } from 'react';
import * as Styled from '../styles/GetStats.Styled';
import { Outlet } from 'react-router-dom';

import Nav from '../components/navigation/Nav';
import StrengthStats from '../components/StrengthStats';


const GetStats = () => {

    const [activeTab, setActiveTab] = useState("strength");

    const handleChangeTab = (e) => {
        setActiveTab(e.currentTarget.id);
    }

    //Return correct component based on the active tab
    const getActiveComponent = () => {
        if(activeTab == "strength") return <StrengthStats />
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
                <Styled.Tab
                    id="lifts"
                    onClick={(e) => handleChangeTab(e)}
                    active={activeTab == "lifts" ? true : false}
                >
                    Lifts
                </Styled.Tab>
                <Styled.Tab
                    id="consistency"
                    onClick={(e) => handleChangeTab(e)}
                    active={activeTab == "consistency" ? true : false}
                >
                    Consistency
                </Styled.Tab>
            </Styled.Tabs>
            {getActiveComponent()}
        </Styled.Container>
    );
};

export default GetStats;