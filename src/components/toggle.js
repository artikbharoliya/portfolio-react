// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from '../assets/moon.svg';
import { ReactComponent as SunIcon } from '../assets/sun.svg';


const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid #222831;
  border-radius: 30px;
  cursor: pointer;

  font-size: 0.2rem;
  justify-content: space-between;
  display: inline-block;
  overflow: hidden;
  padding: 0.15rem;
  position: relative;
  width: 2.8rem;
  height: 1.5rem;
  transform: translateY(-15%);
  &: focus{
    outline:none;
  }

  svg {
    height: auto;
    width: 1rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(130px)'};
      filter: invert(70%) sepia(100%) saturate(339%) hue-rotate(111deg) brightness(93%) contrast(88%);
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(-130px)' : 'translateX(0)'};
      filter: invert(70%) sepia(100%) saturate(339%) hue-rotate(111deg) brightness(93%) contrast(88%);
    }
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;