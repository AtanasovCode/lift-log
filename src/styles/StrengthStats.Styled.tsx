import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 35px;
    margin-top: 30px;
    color: #fff;
`;

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
`;

export const Fancy = styled.span`
    color: ${props => props.theme.mayaBlue};
    margin: 0 6px;
`;

export const Month = styled.select`
    background-color: ${props => props.theme.richBlackDark};
    color: #fff;
    border: 1px solid #fff;
    font-size: 18px;
    padding: 10px;
    padding-right: 25px;
`;