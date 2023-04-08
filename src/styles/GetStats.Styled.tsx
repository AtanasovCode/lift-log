import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.richBlackDark};
`;

export const Title = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #fff;
`;