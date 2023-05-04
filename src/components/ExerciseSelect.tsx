import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { X, MagnifyingGlass } from "@phosphor-icons/react";
import { exercises } from "../assets/data/MockData";

import { AppContext } from "./context/AppContext";
import { getExerciseIcon } from "./GetIcon";


const ExerciseSelect = () => {

  const {
    submitData,
    setExerciseSelected,
    showExercises,
    toggleExercises,
    setExercise,
  } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(exercises);
  const [filter, setFilter] = useState("any");
  const [bodyParts, setBodyParts] = useState(['Chest', 'Back', 'Biceps', 'Triceps', 'Shoulders', 'Legs'])

  const handleSearchChange = (e) => {
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
    <DropdownWrapper active={showExercises}>
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
          <Filter defaultValue="any">
            <FilterOption
              value="any"
              onClick={(e: any) => changeFilter(e.currentTarget.value)}
            >
              Any body part
            </FilterOption>
            {
              bodyParts.map((x) => {
                return (
                  <FilterOption
                    value={x}
                    key={x}
                    onClick={(e: any) => changeFilter(e.currentTarget.value)}
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
  position: absolute;
  max-width: 650px;
  padding: 15px;
  width: 0;
  top: -300%;
  z-index: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.richBlack};
  border: 1px solid ${props => props.theme.mayaBlueDark};
  border-radius: 8px;

  //Exercise select is active:
  ${props => props.active && `
    position: fixed;
    width: 60vw;
    z-index: 10;
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  `}

  @media (max-width: 700px) {
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
  padding: 15px;
  color: #fff;

  @media (max-width: 700px) {
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
  padding: 10px;
  border-radius: 8px;
  padding-left: 45px;
  border: 1px solid ${props => props.theme.mayaBlueDark};
  background-color: ${props => props.theme.richBlack};
  color: #fff;
  font-size: 18px;
  &:focus {
    outline: none;
  }

  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

const SearchIcon = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 8px;
  top: 5%;
`;

const FilterTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 8px 0 25px 0;
`;

const Filter = styled.select`
  padding: 10px;
  background-color: ${props => props.theme.richBlack};
  border: 1px solid ${props => props.theme.mayaBlueDark};
  border-radius: 8px;
  font-size: 15px;
  color: #ffffff80;
  margin-right: 10px;
`;

const FilterOption = styled.option`
  background-color: ${props => props.theme.richBlack};
  border: 1px solid ${props => props.theme.mayaBlueDark};
`;

export const DropdownList = styled.div`
  z-index: 1;
  background-color: transparent;
  border-top: none;
  color: #fff;
  max-height: 370px;
  overflow-y: auto;
  width: 100%;

  @media (max-width: 700px) {
    max-height: 300px;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #cccccc50;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background-color: #222;
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
  height: 40px;
  filter: invert(100%);

  @media (max-width: 700px) {
    height: 30px;
  }

  @media (max-width: 500px) {
    height: 25px;
  }
`;

const DropdownExercise = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 5px;

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

const DropdownCategory = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: darkgray;

  @media (max-width: 550px) {
    font-size: 14px;
  }
`;

const Close = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;