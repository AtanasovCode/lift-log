import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    color: #fff;
`;

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 25px;
    position: relative;
    animation: slideIn .456s ease 1;

    @keyframes slideIn {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        50% {
            opacity: .4;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @media (max-width: 550px) {
        flex-direction: column-reverse;
        margin-top: 35px;
    }
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    
    @media (max-width: 750px) {
        font-size: 24px;
    }

    @media (max-width: 550px) {
        font-size: 36px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const Fancy = styled.span`
    color: ${props => props.theme.mayaBlue};
    margin: 0 6px;

    @media (max-width: 500px) {
        margin: 0;
    }
`;

export const GreenFancy = styled(Fancy)`
    color: ${props => props.theme.lightGreen};
`;

export const PurpleFancy = styled(Fancy)`
    color: ${props => props.theme.lightPurple};
`;

export const Icon = styled.div`
    margin-left: 6px;
    width: 60px;
    height: 60px;

    @media (max-width: 750px) {
        width: 50px;
        height: 50px;
    }
    
    @media (max-width: 550px) {
        width: 70px;
        height: 70px;

    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const DataInput = styled.input`
    padding: 7px;
    color: #fff;
    border: 1px solid #ffffff50;
    background-color: transparent;
`;

export const InputInfo = styled.div`
    color: darkgray;
    font-size: 15px;
`;

export const Month = styled.select`
    background-color: ${props => props.theme.richBlackDark};
    color: #fff;
    border: 1px solid #fff;
    font-size: 18px;
    padding: 10px;
    padding-right: 25px;
`;