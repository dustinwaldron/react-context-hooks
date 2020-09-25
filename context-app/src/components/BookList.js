import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div className="book-list" style={{ color: theme.fontColor, background: theme.backgroundColor }}>
            <ul>
              <li style={{ background: theme.componentColor }}>1984</li>
              <li style={{ background: theme.componentColor }}>The Chronicles of Narnia</li>
              <li style={{ background: theme.componentColor }}>Brave New World</li>
            </ul>
          </div>
        )
      }}
      </ThemeContext.Consumer>
    );
  }
}
 
export default BookList;