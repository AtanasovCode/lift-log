import { useStore } from "../../../useStore";
import styled from "styled-components";

const Tabs = () => {

    const { activeTab, setActiveTab } = useStore();

    return (
        <TabsContainer>
            <Tab
                id="lifts"
                onClick={() => setActiveTab("lifts")}
                $active={activeTab == "lifts" ? true : false}
            >
                Lifts
            </Tab>

            <Tab
                id="strength"
                onClick={() => setActiveTab("strength")}
                $active={activeTab == "strength" ? true : false}
            >
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
        width: 30%;
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
    ${props => props.$activeTab === "lifts" ? 
        `transform: translateX(0)` 
        : 
        `transform: translateX(100%)`}
`;