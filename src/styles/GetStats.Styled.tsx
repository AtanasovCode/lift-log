import styled from "styled-components";

interface Props {
    active: boolean,
    color: string,
}

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.background};
    padding-top: 125px;
`;

export const Tabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 50px;

    @media (max-width: 700px) {
        padding: 0 15px;
        justify-content: center;
    }
`;

export const Tab = styled.div<Props>`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 18px;
    border-radius: 16px;
    background-color: #454242;
    color: #e0dddd;
    margin: 0 15px;
    cursor: pointer;
    user-select: none;

    //Tab is currently active:
    background-color: ${props => props.active && props.color};
    color: ${props => props.active && props.theme.background};
`;