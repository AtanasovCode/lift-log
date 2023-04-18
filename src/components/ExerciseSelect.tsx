import styled from "styled-components";
import { useState, useEffect } from "react";

import bench from '../assets/icons/bench.png';
import curl from '../assets/icons/curl.png';
import ohp from '../assets/icons/ohp.png';
import lat from '../assets/icons/lat.png';
import squat from '../assets/icons/squat.png';
import deadlift from '../assets/icons/deadlift.png';
import frontRaise from '../assets/icons/front-raise.png';
import hammer from '../assets/icons/hammer.png';
import chinUp from '../assets/icons/chin-up.png';
import calfRaise from '../assets/icons/calf-raise.png';
import pullUp from '../assets/icons/pull-up.png';
import pushUp from '../assets/icons/push-up.png';
import latRaise from '../assets/icons/lat-raise.png';
import inclineBench from '../assets/icons/incline-bp.png';
import dips from '../assets/icons/dips.png';
import cableCrossover from '../assets/icons/cable-crossover.png';
import bentRow from '../assets/icons/row.png';
import lowSeatedRow from '../assets/icons/cable-seated-row.png';
import lunges from '../assets/icons/lunges.png';
import legPress from '../assets/icons/leg-press.png';
import ropePushdown from '../assets/icons/rope-extension.png';
import kickbacks from '../assets/icons/tri-kickback.png';

const exercises = [
  { name: 'Bench Press', category: 'Chest' },
  { name: 'Incline Bench Press', category: 'Chest' },
  { name: 'Cable Crossover', category: 'Chest' },
  { name: 'Push-up', category: 'Chest' },
  { name: 'Bent-over Row', category: 'Back' },
  { name: 'Low Seated Row', category: 'Back' },
  { name: 'Pull-up', category: 'Back' },
  { name: 'Deadlift', category: 'Back' },
  { name: 'Lat Pulldown', category: 'Back' },
  { name: 'Squat', category: 'Legs' },
  { name: 'Lunges', category: 'Legs' },
  { name: 'Leg Press', category: 'Legs' },
  { name: 'Calf Raise', category: 'Legs' },
  { name: 'Bicep Curl', category: 'Biceps' },
  { name: 'Hammer Curl', category: 'Biceps' },
  { name: 'Chin-up', category: 'Biceps' },
  { name: 'Tricep Kickback', category: 'Triceps' },
  { name: 'Skull Crusher', category: 'Triceps' },
  { name: 'Dips', category: 'Triceps' },
  { name: 'Rope Pushdown', category: 'Triceps' },
  { name: 'Shoulder Press', category: 'Shoulders' },
  { name: 'Lateral Raise', category: 'Shoulders' },
  { name: 'Front Raise', category: 'Shoulders' },
  { name: 'Rear Delt Fly', category: 'Shoulders' },
];

const ExerciseSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(exercises);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filtered = exercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || // case-insensitive search
        exercise.category.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
    setFilteredOptions(filtered);
  }, [searchTerm]);

  const getExerciseIcon = (name: string) => {
    switch (name) {
      case "Bench Press": return bench;
      case "Incline Bench Press": return inclineBench;
      case "Cable Crossover": return cableCrossover;
      case "Push-up": return pushUp;
      case "Bent-over Row": return bentRow;
      case "Low Seated Row": return lowSeatedRow;
      case "Pull-up": return pullUp;
      case "Deadlift": return deadlift;
      case "Lat Pulldown": return lat;
      case "Squat": return squat;
      case "Lunges": return lunges;
      case "Leg Press": return legPress;
      case "Calf Raise": return calfRaise;
      case "Rope Pushdown": return ropePushdown;
      case "Tricep Kickback": return kickbacks;
      case "Bicep Curl": return curl;
      case "Hammer Curl": return hammer;
      case "Chin-up": return chinUp;
      case "Tricep Extension": break;
      case "Skull Crusher": break;
      case "Dips": return dips;
      case "Shoulder Press": return ohp;
      case "Lateral Raise": return latRaise;
      case "Front Raise": return frontRaise;
      case "Rear Delt Fly": break;
    }
  }

  return (
    <DropdownWrapper className="dropdown">
      <DropdownHeader className="dropdown-header" onClick={toggleDropdown}>
        Select an exercise
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          <DropdownInput
            type="text"
            placeholder="Search for an exercise"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {filteredOptions.map((exercise) => (
            <DropdownItem key={exercise.name} className="dropdown-item">
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
      )}
    </DropdownWrapper>
  );
};

export default ExerciseSelect;

export const DropdownWrapper = styled.div`
  position: relative;
  margin: 20px;
`;

export const DropdownHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  max-width: 30%;
  border: 1px solid #cccccc60;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  &:hover {
    background-color: #222;
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  width: 30%;
  top: 100%;
  left: 0;
  z-index: 1;
  background-color: transparent;
  border: 1px solid #cccccc50;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 350px;
  overflow-y: auto;
`;

export const DropdownInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #cccccc50;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  &:focus {
    outline: none;
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
  margin-left: 15px;
`;

const DropdownIcon = styled.img`
  height: 65px;
  filter: invert(100%);
`;

const DropdownExercise = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 5px;
`;

const DropdownCategory = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: darkgray;
`;