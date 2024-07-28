import styled from "styled-components";

interface Props {
    active: boolean,
    color: string,
}

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${props => props.theme.background};
`;

export const Tabs = styled.div`
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

export const Tab = styled.div<Props>`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .6rem 1rem;
    border-radius: 16px;
    background-color: ${props => props.theme.secondary};
    color: #e0dddd;
    margin: 0 15px;
    cursor: pointer;
    user-select: none;

    //Tab is currently active:
    background-color: ${props => props.active && props.color};
    color: ${props => props.active && props.theme.background};
`;