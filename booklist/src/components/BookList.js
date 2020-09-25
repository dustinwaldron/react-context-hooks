import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  const bookList = books.map((book) => {
    return (
      <BookDetails key={book.id} book={book} />
    )
  });
  return books.length ? (
    <div className="book-list">
      <ul>
        {bookList}
      </ul>
    </div>
    ) : (
    <div className="empty">You have no books to read!</div>
    )
}
 
export default BookList;