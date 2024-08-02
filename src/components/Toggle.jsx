import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Toggle = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <ToggleWrapper>
            <ThemeName>
                Amoled
            </ThemeName>
            <ToggleInput
                id="toggle"
                className="toggle"
                type="checkbox"
                role="switch"
                name="toggle"
                value="on"
                checked={isChecked}
                onChange={handleToggle}
                aria-checked={isChecked}
            />
            <Slot isChecked={isChecked} htmlFor="toggle" className="slot">
                <span className="slot__label">OFF</span>
                <span className="slot__label">ON</span>
            </Slot>
            <Curtain isChecked={isChecked} className="curtain" />
        </ToggleWrapper>
    );
};

export default Toggle;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeName = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: .5rem;
    -webkit-text-stroke: 0.05em #fff;
    font-family: ${props => props.theme.font};
`;

const ToggleInput = styled.input`
  border-radius: 0.75rem;
  cursor: pointer;
  position: relative;
  margin-right: 0.25rem;
  width: 3rem;
  height: 1.5rem;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  border: 1px solid ${props => props.theme.accent};

  &:before {
    background: ${props => props.theme.accent};
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 0.2rem;
    left: 0.3rem;
    width: 1.2rem;
    height: 1.1rem;
    transition: transform 0.33s ease-in-out;
  }

  &:checked:before {
    transform: translateX(1.5em);
  }

  &:focus {
    outline: transparent;
  }
`;

const Slot = styled.label`
  color: transparent;
  font-size: 1.2em;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 1;
  overflow: hidden;
  height: 1em;
  -webkit-text-stroke: 0.05em #fff;
  position: relative;

  & span {
    display: block;
    transition: transform 0.25s ease-in-out;
  }

  & span:first-child {
    transform-origin: 50% 0;
    ${({ isChecked }) =>
        isChecked &&
        css`
        transform: translateY(-50%) scaleY(0);
      `}
  }

  & span:last-child {
    transform-origin: 50% 100%;
    ${({ isChecked }) =>
        isChecked &&
        css`
        transform: translateY(-100%) scaleY(1);
      `}
  }
`;

const Curtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transform-origin: 0 50%;
  background-color: #ffffff;
  transition: transform 0.25s ease-in-out;
  z-index: -1;

  ${({ isChecked }) =>
        isChecked &&
        css`
      transform: scaleX(1);
    `}
`;
