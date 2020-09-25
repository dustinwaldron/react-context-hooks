import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
  const { books } = useContext(BookContext)
  return (
    <div className="nav-bar">
      <h1>Reading List</h1>
      <p>You currently have { books.length } book{ books.length === 1 ? '' : 's' } left to read</p>
    </div>
  );
}
 
export default NavBar;