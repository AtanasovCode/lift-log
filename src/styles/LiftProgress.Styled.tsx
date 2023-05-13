import styled from "styled-components";
import bubbleSVG from '../assets/illustrations/bubble.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
    justify-content: space-between;
    background-color: ${props => props.theme.richBlackDark};
    color: ${props => props.theme.defaultFontColor};
    padding: 50px 100px 190px 100px;

    @media (max-width: 1000px) {
        padding: 80px;
        padding-bottom: 190px;
    }
    
    @media (max-width: 900px) {
        padding: 80px 20px;
        padding-bottom: 190px;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 500px) {
        padding-bottom: 120px;
    }
`;

export const Info = styled.div`
    flex: 100%;


    font-size: 32px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 900px) {
        font-size: 26px;
    }

    @media (max-width: 700px) {
        font-size: 23px;
        display: flex;
        flex-direction: column;
        margin-bottom: 55px;
    }
`;


export const OrangeWord = styled.span`
    color: ${props => props.theme.softOrange};
    color: #000;
    -webkit-text-stroke: 1px ${props => props.theme.softOrange};
    padding-left: 5px;
    font-size: 44px;
    transition: color .3s ease;

    &:hover {
        color: ${props => props.theme.softOrange};
        cursor: pointer;
    }
`;


export const Chart = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 70px;

    @media (max-width: 700px) {
        margin: 0 20px;
        width: 100%;
    }
`;

export const ChartDescription = styled.div`
    position: absolute;
    bottom: -15px;
    font-size: 12px;
    font-weight: 300;
    color: darkgray;

    @media (max-width: 700px) {
        opacity: 0;
        user-select: none;
        left: -200%;
    }
`;

export const TooltipContainer = styled.div`
    padding: 10px 12px;
    background-color: ${props => props.theme.defaultBackgroundColor};
    border: none;
`;

export const TooltipHeading = styled.div`
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 16px;
`;

export const TooltipDesc = styled.div`
    margin-bottom: 6px;
`;

export const TooltipBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const TooltipInfo = styled.span`
    font-size: 15px;
    margin-right: 7px;
    margin-bottom: 6px;
`;

export const TooltipDot = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    opacity: .5;
    background-color: black;
`;

export const Bubble = styled.div`
    height: 240px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -200px;
    z-index: 15;
    background-image: url(${bubbleSVG});
    background-repeat: no-repeat;
    background-size: cover;
`;