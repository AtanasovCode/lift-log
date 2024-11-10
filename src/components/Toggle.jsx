import styled from "styled-components";
import { useStore } from "../../useStore";
import moon from '../assets/moon.svg';

const Toggle = () => {

  const { theme, setTheme } = useStore();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "night" : "dark");
  };

  return (
    <ToggleContainer
      onClick={handleToggle}
      $isChecked={theme === "dark"}
    >
      <ToggleWrapper
        $isChecked={theme === "dark"}
      >
        <MoonIcon
          src={moon}
          alt="moon icon toggle for amoled theme"
          $isChecked={theme === "dark"}
        />
      </ToggleWrapper>
      <ThemeName>
        Amoled
      </ThemeName>
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ThemeName = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.text};
  margin-left: .5rem;
`;

const ToggleWrapper = styled.div`
  background-color: #676565;
  padding: .5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70px;
  height: 30px;
  transition: all .4s ease-in-out;

  ${props => props.$isChecked && `
    background-color: ${props.theme.secondary};
  `}
`;

const MoonIcon = styled.div`
  width: 20px;
  height: 20px;
  transition: all .4s ease-in-out;
  background-color: #2c2b2b;
  transform: scale(.9);
  border-radius: 50%;

  ${props => props.$isChecked && `
    transform: translateX(calc(100% + 15px)) scale(1.1);
    background-color: ${props.theme.richBlackDark};
  `}
`;
