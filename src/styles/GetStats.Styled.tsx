import styled from "styled-components";

interface Props {
    active: boolean
}

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.richBlackDark};
    padding-top: 135px;
`;

export const Title = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #fff;
`;

export const Tabs = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 30px;

    @media (max-width: 600px) {
        padding: 0 15px;
    }

    @media (max-width: 500px) {
        justify-content: center;
    }
`;

export const Tab = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 18px;
    user-select: none;
    cursor: pointer;
    border-radius: 16px;
    background-color: ${props => props.theme.richBlack};
    color: #ffffff70;
    margin: 0 15px;

    //Tab is currently active:
    background-color: ${props => props.active && props.theme.mayaBlue};
    color: ${props => props.active && "#000"};

    @media (max-width: 900px) {
        font-size: 14px;
    }

    @media (max-width: 600px) {
        margin: 0 10px;
        padding: 10px;
    }
`;