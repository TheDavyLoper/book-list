import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../contexts/BookContexts'

const BookList = () => {
  const { books } = useContext(BookContext)
  return books.length ?(
    <div className="book-list">
      <ul>
        {books.map(book => {
          return (<BookDetails book={book} key={book.id} />)
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to reads...</div>
  )
}

export default BookList;

