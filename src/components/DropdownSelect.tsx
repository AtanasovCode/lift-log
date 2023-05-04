import { useState } from 'react';
import styled from 'styled-components';
import { exercises } from '../assets/data/MockData';
import { getExerciseIcon } from './GetIcon';
import {
    DotOutline,
    MagnifyingGlass,
} from '@phosphor-icons/react';



interface Exercise {
    name: string;
    category: string;
}


const DropdownSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [exercise, setExercise] = useState("");
    const filteredExercises = exercises.filter((exercise: Exercise) =>
        exercise.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const handleItemClick = (name: string) => {
        setIsOpen(false);
        setExercise(name);
        setSearchText("");
    };

    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    return (
        <Dropdown>
            <Search
                onClick={toggleDropdown}
                placeholder="Search exercises..."
                value={isOpen ? searchText : exercise}
                onChange={handleSearchTextChange}
            />
            {
                isOpen != true && exercise != "" ?
                    <SearchExercise
                        src={getExerciseIcon(exercise)}
                    />
                    :
                    <SearchIcon>
                        <MagnifyingGlass
                            size="100%"
                            weight="light"
                            color="#ccc"
                        />
                    </SearchIcon>
            }
            {isOpen === true && (
                <List>
                    {filteredExercises.map((exercise: Exercise) => (
                        <Option
                            key={exercise.name}
                            onClick={() => handleItemClick(exercise.name)}
                        >
                            <OptionIcon
                                src={getExerciseIcon(exercise.name)}
                            />
                            <OptionName>{exercise.name}</OptionName>
                            <DotDevide>
                                <DotOutline
                                    size={25}
                                    color="#ccc"
                                    weight="light"
                                />
                            </DotDevide>
                            <OptionCategory>{exercise.category}</OptionCategory>
                        </Option>
                    ))}
                </List>
            )}
        </Dropdown>
    );
};

export default DropdownSelect;



const Dropdown = styled.div`
    min-width: 22px;
    border: 1px solid #ccc;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;


const Search = styled.input`
    padding: 7px 15px;
    padding-left: 30px;
    width: 100%;
    border: none;
    height: 100%;
    background-color: ${props => props.theme.richBlack};
    color: darkgray;
    font-size: 16px;
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
    top: 7px;
    left: 15px;
    transform: translateX(-50%);
    width: 20px;
    filter: invert(100%);
`;

const List = styled.div`
    max-height: 220px;
    overflow-y: auto;
    background-color: ${props => props.theme.richBlack};
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    right: 0;
`;

const Option = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    border-bottom: 1px solid #cccccc50;
`;

const OptionName = styled.div`
    font-size: 15px;
`;

const OptionCategory = styled.div`
    font-size: 13px;
    color: darkgray;
    font-weight: 300;
`;

const OptionIcon = styled.img`
    width: 25px;
    filter: invert(100%);
    margin-right: 10px;
`;

const DotDevide = styled.div`
    margin: 0 1px;
    display: flex;
    align-items: center;
    justify-content: center;
`;