import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {

    const err: any = useRouteError();

    return (
        <Container>
            <Title>This is not good.</Title>
            <Subtitle>Sorry, something has not gone as planned.</Subtitle>
            <Error>
                <ErrTitle>ERROR:</ErrTitle>
                <ErrMessage>{err.statusText || err.message}</ErrMessage>
            </Error>
            <GoBack href="/">
                Go back?
            </GoBack>
        </Container>
    );
}

export default ErrorPage;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.richBlackDark};
    color: #fff;
    padding: 40px 65px;
`;

const Title = styled.div`
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 25px;
`;

const Subtitle = styled.div`
    text-align: center;
    font-size: 15px;
    color: darkgray;
    margin-bottom: 25px;
`;

const Error = styled.div`
    display: flex;
    align-items: center;
    justfiy-content: center;
`;

const ErrTitle = styled.span`
    font-size: 24px;
    font-weight: 700;
`;

const ErrMessage = styled.span`
    font-size: 16px;
    color: #ff7777;
    font-weight: 600;
    margin-left: 10px;
`;

const GoBack = styled.a`
    margin-top: 125px;
`;