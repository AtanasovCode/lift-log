import * as Styled from '../styles/GetStats.Styled';
import { Outlet } from 'react-router-dom';


const GetStats = () => {
    return (
        <Styled.Container>
            {/* Outlet used for navigating to child routes */}
            <Outlet />
            <Styled.Title>
                Get Your Stats
            </Styled.Title>
        </Styled.Container>
    );
};

export default GetStats;