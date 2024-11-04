import { useStore } from "../../../useStore";

const Tabs = () => {

    const { setActiveTab } = useStore();

    return (
        <Tabs>
            <Tab
                id="lifts"
                onClick={() => setActiveTab("lifts")}
                active={activeTab == "lifts" ? true : false}
            >
                Lifts
            </Tab>

            <Tab
                id="strength"
                onClick={() => setActiveTab("strength")}
                active={activeTab == "strength" ? true : false}
            >
                Strength
            </Tab>
        </Tabs>
    );
}

export default Tabs;

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