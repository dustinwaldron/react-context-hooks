import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books] = useState([
    { id: 1, name: '1984' },
    { id: 2, name: 'Lord of the Flies' },
    { id: 3, name: 'Brave New World' },
    { id: 4, name: 'War of the Worlds' }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;