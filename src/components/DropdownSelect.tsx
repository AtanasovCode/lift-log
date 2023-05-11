import { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { exercises } from '../assets/data/MockData';
import { getExerciseIcon } from './GetIcon';
import {
    DotOutline,
    MagnifyingGlass,
    X,
} from '@phosphor-icons/react';

import { AppContext } from './context/AppContext';
import { checkDistance } from './CheckDistance';



interface Exercise {
    name: string;
    category: string;
}

interface Props {
    position: string,
}

const DropdownSelect = ({
    index,
    onExerciseDataUpdate,
    parentRef,
}) => {

    const {
        exercisesData,
        toggleMultipleExercises,
    } = useContext(AppContext);

    const childRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const filteredExercises = exercises.filter((exercise: Exercise) =>
        exercise.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const [name, setName] = useState("");
    const [PR, setPR] = useState(0);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleExerciseChange = (name: string) => {
        setName(name);
        onExerciseDataUpdate(index, name, PR);
    };

    const handlePrChange = (event: any) => {
        setPR(parseInt(event.currentTarget.value));
        onExerciseDataUpdate(index, name, parseInt(event.currentTarget.value));
    };

    return (
        <Input>
            <Dropdown
                ref={childRef}
                onClick={toggleDropdown}
            >
                {
                    isOpen != true && name != "" ?
                        <Heading>
                            <SearchExercise
                                src={getExerciseIcon(name)}
                            />
                            {name}
                        </Heading>
                        :
                        <SearchContainer>
                            <Search
                                placeholder="Search exercises..."
                                value={isOpen ? searchText : name}
                                onChange={handleSearchTextChange}
                            />
                            <SearchIcon>
                                <MagnifyingGlass
                                    size="100%"
                                    weight="light"
                                    color="#ccc"
                                />
                            </SearchIcon>
                        </SearchContainer>
                }
                {isOpen == true && (
                    <List position={checkDistance(parentRef, childRef)}>
                        <CloseList onClick={toggleMultipleExercises}>
                            <X
                                size={32}
                                color="#ccc"
                                weight="light"
                            />
                        </CloseList>
                        {filteredExercises.map((exercise: Exercise) => (
                            <Option
                                key={exercise.name}
                                onClick={() => handleExerciseChange(exercise.name)}
                            >
                                <OptionIcon
                                    src={getExerciseIcon(exercise.name)}
                                />
                                <OptionName>{exercise.name}</OptionName>
                                <DotDevide>
                                    <DotOutline
                                        size={25}
                                        color="#cccccc70"
                                        weight="fill"
                                    />
                                </DotDevide>
                                <OptionCategory>{exercise.category}</OptionCategory>
                            </Option>
                        ))}
                    </List>
                )}
            </Dropdown>
            <InputPR
                type="text"
                placeholder="Your RP"
                value={PR != 0 ? PR : ""}
                onChange={handlePrChange}
            />
        </Input>
    );
};

export default DropdownSelect;


const Input = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;

    @media (max-width: 550px) {
        grid-template-columns: 1fr auto;
    }
`;

const InputPR = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    background-color: ${props => props.theme.richBlack};
    color: #fff;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;

    @media (max-width: 550px) {
        max-width: 80px;
    }
`;


const Dropdown = styled.div`
    min-width: 220px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    @media (max-width: 550px) {
        min-width: auto;
    }
`;

const Heading = styled.div`
    width: 100%;
    padding: 7px 15px;
    padding-left: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #ccc;
    position: relative;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;

    @media (max-width: 550px) {
        font-size: 14px;
    }
`;

const SearchContainer = styled.div`
    width: 100%;
    border: 1px solid #ccc;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
`;

const Search = styled.input`
    width: 100%;
    padding: 7px 15px;
    padding-left: 30px;
    border: none;
    background-color: ${props => props.theme.richBlack};
    color: darkgray;
    font-size: 16px;
    border-bottom-left-radius: 12px;
    border-top-left-radius: 12px;
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 7px;
    left: 15px;
    transform: translateX(-50%);
    width: 20px;
`;

const SearchExercise = styled.img`
    position: absolute;
    top: 5px;
    left: 15px;
    height: 25px;
    filter: invert(100%);

    @media (max-width: 550px) {
        height: 20px;
    }
`;

const List = styled.div<Props>`
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: ${props => props.theme.richBlack};
    border: 1px solid #bbbbbb90;
    position: absolute;
    z-index: 15;

    ${props => props.position == "bottom" && `
        top: 100%;
        left: 0;
        right: 0;
    `}

    //When there is not enough space below the dropdown
    //display the list above
    ${props => props.position == "top" && `
        bottom: 100%;
        left: 0;
        right: 0; 
    `}

    @media (max-width: 550px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 20;
        max-height: 100vh;
    }
`;

const CloseList = styled.div`
    opacity: 0;
    position: absolute;
    right: -500%;

    @media (max-width: 550px) {
        opacity: 1;
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 15;
    }
`;

const Option = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    border-bottom: 1px solid #cccccc50;
    cursor: pointer;

    @media (max-width: 550px) {
        padding: 15px;
    }
`;

const OptionName = styled.div`
    font-size: 15px;

    @media (max-width: 550px) {
        font-size: 17px;
    }
`;

const OptionCategory = styled.div`
    font-size: 13px;
    color: darkgray;
    font-weight: 300;

    @media (max-width: 550px) {
        font-size: 14px;
    }
`;

const OptionIcon = styled.img`
    height: 35px;
    filter: invert(100%);
    margin-right: 10px;

    @media (max-width: 550px) {
        height: 35px;
        margin-right: 15px;
    }
`;

const DotDevide = styled.div`
    margin: 0 1px;
    display: flex;
    align-items: center;
    justify-content: center;
`;