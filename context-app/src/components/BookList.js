import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  const bookList = books.map((book) => { return (<li key={book.id} style={{ background: theme.componentColor }}>{book.name}</li>) });
  return (
    <div className="book-list" style={{ color: theme.fontColor, background: theme.backgroundColor }}>
      <ul>
        {bookList}
      </ul>
    </div>
  );
}
 
export default BookList;