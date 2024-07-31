import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { X, MagnifyingGlass } from "@phosphor-icons/react";
import { exercises } from "../assets/data/MockData";

import { AppContext } from "./context/AppContext";
import { getExerciseIcon } from "./GetIcon";


const ExerciseSelect = () => {

  const {
    setExerciseSelected,
    showExercises,
    toggleExercises,
  } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(exercises);
  const [filter, setFilter] = useState("any");
  const [bodyParts, setBodyParts] = useState(['Chest', 'Back', 'Biceps', 'Triceps', 'Shoulders', 'Legs'])

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  //For filtering exercises based on search
  useEffect(() => {
    const filtered = exercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || // case-insensitive search
        exercise.category.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
    setFilteredOptions(filtered);
  }, [searchTerm]);

  //For filtering exercises based on category selected
  useEffect(() => {
    if (filter != "any") {
      const filtered = exercises.filter(x => x.category === filter);

      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(exercises);
    }
  }, [filter]);

  const changeFilter = (filter: string) => {
    setFilter(filter);
  }

  return (
    <DropdownWrapper>
      <Close onClick={toggleExercises}>
        <X
          color="#ccc"
          weight="light"
          size="100%"
        />
      </Close>
      <DropdownHeader>
        Select an exercise
      </DropdownHeader>

      <DropdownSearch>
        <DropdownInput
          type="text"
          placeholder="Search for an exercise"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <SearchIcon>
          <MagnifyingGlass
            size="100%"
            color="#ccc"
            weight="light"
          />
        </SearchIcon>

        <FilterTabs>
          <Filter 
            defaultValue="any"
            onChange={(e: any) => changeFilter(e.currentTarget.value)}
          >
            <FilterOption
              value="any"
            >
              Any body part
            </FilterOption>
            {
              bodyParts.map((x) => {
                return (
                  <FilterOption
                    value={x}
                    key={x}
                  >
                    {x}
                  </FilterOption>
                );
              })
            }
          </Filter>
        </FilterTabs>
      </DropdownSearch>

      <DropdownList>
        {filteredOptions.map((exercise) => (
          <DropdownItem
            key={exercise.name}
            className="dropdown-item"
            onClick={() => {
              setExerciseSelected(exercise.name);
              sessionStorage.setItem("exerciseSelectedStrength", exercise.name)
              toggleExercises();
            }}
          >
            <DropdownIcon
              src={getExerciseIcon(exercise.name)}
              alt="icon"
            />
            <DropdownText>
              <DropdownExercise>
                {exercise.name}
              </DropdownExercise>
              <DropdownCategory>
                {exercise.category}
              </DropdownCategory>
            </DropdownText>
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  );
};

export default ExerciseSelect;

export const DropdownWrapper = styled.div`
  max-width: 1024px;
  padding: 1rem;
  position: fixed;
  width: 50%;
  z-index: 99;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};
  border-radius: 16px;

  @media (max-width: 1024px) {
    width: 70%
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
  
`;

export const DropdownHeader = styled.div`
  width: 100%;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  padding: 1rem;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 550px) {
    font-size: 18px;
  }
`;

const DropdownSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const DropdownInput = styled.input`
  width: 100%;
  padding: .5rem;
  border-radius: 16px;
  padding-left: 50px;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.text};
  border: none;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

const SearchIcon = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 3%;
  top: 5%;
`;

const FilterTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: .5rem 0;
`;

const Filter = styled.select`
  padding: 1rem;
  background-color: ${props => props.theme.secondary};
  border: none;
  border-radius: 16px;
  font-size: 15px;
  color: #ffffff90;
`;

const FilterOption = styled.option`
  background-color: ${props => props.theme.background};
`;

export const DropdownList = styled.div`
  z-index: 1;
  background-color: transparent;
  color: ${props => props.theme.text};
  max-height: 60vh;
  overflow-y: auto;
  width: 100%;

  @media (max-width: 768px) {
    max-height: 70vh;
  }
`;

export const DropdownItem = styled.div`
  padding: .7rem;
  width: 100%;
  background-color: ${props => props.theme.secondary};
  border-radius: 16px;
  cursor: pointer;
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: .5rem;

  &:hover {
    background-color: ${props => props.theme.mayaBlueDark};
  }
`;

const DropdownText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 25px;
`;

const DropdownIcon = styled.img`
  height: 50px;
  filter: invert(100%);

  @media (max-width: 540px) {
    height: 40px;
  }
`;

const DropdownExercise = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin-bottom: .5rem;

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

const DropdownCategory = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #ccc9c9;

  @media (max-width: 550px) {
    font-size: 14px;
  }
`;

const Close = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;