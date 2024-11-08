import { useStore } from "../../../useStore";
import styled from "styled-components";
import { RocketLaunch, HandFist } from "@phosphor-icons/react";

const Tabs = () => {

    const { activeTab, setActiveTab } = useStore();

    return (
        <TabsContainer>
            <Tab
                id="lifts"
                onClick={() => setActiveTab("lifts")}
                $active={activeTab == "lifts" ? true : false}
            >
                <TabIcon>
                    <HandFist size={28} weight="fill" color={activeTab === "lifts" ? "#FFF" : "#797575"} />
                </TabIcon>
                Lifts
            </Tab>

            <Tab
                id="strength"
                onClick={() => setActiveTab("strength")}
                $active={activeTab == "strength" ? true : false}
            >
                <TabIcon>
                    <RocketLaunch size={28} weight="fill" color={activeTab === "strength" ? "#FFF" : "#797575"} />
                </TabIcon>
                Strength
            </Tab>
            <ActiveTabBorder $activeTab={activeTab} />
        </TabsContainer>
    );
}

export default Tabs;

const TabsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;

    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
    }

    @media (min-width: 1024px) {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        flex-direction: column;
        align-items: stretch;
        width: auto;
    }
`;

const Tab = styled.div`
    text-align: center;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d5d4d4;
    cursor: pointer;
    user-select: none;

    @media (min-width: 1024px) {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
        min-width: 12vw;
        padding: 1.1rem 1.5rem;
        background-color: ${props => props.$active ? props.theme.secondary : props.theme.background};
        color: ${props => props.$active ? props.theme.text : "#aba4a4"};
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        align-items: center;
        justify-content: flex-start;
    }
`;

const TabIcon = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: .5rem;
    }
`;

const ActiveTabBorder = styled.div`
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: ${props => props.theme.accent};
    transform: translateX(0);
    transition: all .288s ease-in-out;
    ${props => props.$activeTab === "lifts" ? `transform: translateX(0)` : `transform: translateX(100%)`};
    
    @media (min-width: 1024px) {
        display: none;
    }
`;