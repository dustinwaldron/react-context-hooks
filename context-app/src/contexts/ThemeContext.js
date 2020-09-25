import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme,
    })
  }
  state = {
    isLightTheme: true,
    light: {
      fontColor: '#555',
      componentColor: '#ddd',
      backgroundColor: '#eee'
    },
    dark: {
      fontColor: '#ddd',
      componentColor: '#333',
      backgroundColor: '#555'
    }
  }
  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;