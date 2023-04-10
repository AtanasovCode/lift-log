import { useState } from 'react';
import * as Styled from '../styles/GetStats.Styled';
import { Outlet } from 'react-router-dom';
import Nav from '../components/navigation/Nav';


const GetStats = () => {

    const [activeTab, setActiveTab] = useState("progress");

    const handleChangeTab = (e) => {
        setActiveTab(e.currentTarget.id);
    }

    return (
        <Styled.Container>
            {/* Outlet used for navigating to child routes */}
            <Outlet />
            <Nav />

            <Styled.Tabs>
                <Styled.Tab
                    id="progress"
                    onClick={(e) => handleChangeTab(e)}
                    active={activeTab == "progress" ? true : false}
                >
                    Strength
                </Styled.Tab>
                <Styled.Tab
                    id="visual"
                    onClick={(e) => handleChangeTab(e)}
                    active={activeTab == "visual" ? true : false}
                >
                    Lifts
                </Styled.Tab>
                <Styled.Tab
                    id="track"
                    onClick={(e) => handleChangeTab(e)}
                    active={activeTab == "track" ? true : false}
                >
                    Consistency
                </Styled.Tab>
            </Styled.Tabs>
        </Styled.Container>
    );
};

export default GetStats;