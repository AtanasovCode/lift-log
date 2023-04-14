import { useState } from 'react';
import * as Styled from '../styles/GetStats.Styled';
import { Outlet } from 'react-router-dom';

import Nav from '../components/navigation/Nav';
import StrengthStats from '../components/StrengthStats';
import LiftsStats from '../components/LiftsStats';
import Consistency from '../components/Consistency';


const GetStats = () => {

    const [activeTab, setActiveTab] = useState("strength");

    const handleChangeTab = (e) => {
        setActiveTab(e.currentTarget.id);
    }

    //Return correct component based on the active tab
    const getActiveComponent = () => {
        if(activeTab == "strength") return <StrengthStats />;
        if(activeTab == "lifts") return <LiftsStats />
        if(activeTab == "consistency") return <Consistency />
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