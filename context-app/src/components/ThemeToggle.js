import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>Switch to{ isLightTheme ? ' Dark' : ' Light'} Theme</button>
  );
}
 
export default ThemeToggle;