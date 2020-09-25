import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  render() {
    return (
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, toggleTheme } = context;
        return (
          <button onClick={toggleTheme}>Switch to{ isLightTheme ? ' Dark' : ' Light'} Theme</button>
        );
      }}
      </ThemeContext.Consumer>
    )
  }
}
 
export default ThemeToggle;