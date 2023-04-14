import styled from "styled-components";

const ExerciseSelect = () => {
    return (
        <Container>
            <Select>
                <Option value="test">
                    <OptionName>Bench Press</OptionName>
                    <OptionCategory>Chest</OptionCategory>
                </Option>
            </Select>
        </Container>
    );
}

export default ExerciseSelect;

const Container = styled.div`
`;

const Select = styled.select`
    border: 1px solid #ffffff50;
    color: #ffffff;
    padding: 10px;
    background-color: transparent;
`;

const Option = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const OptionName = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const OptionCategory = styled.div`
    font-size: 15px;
    color: darkgray;
`;