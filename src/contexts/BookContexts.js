import React, { useState, createContext, useEffect } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext();

const BookContextsProvider = (props) => {

  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem('booklist')) || []
  );

  useEffect(() => {
    localStorage.setItem('booklist', JSON.stringify(books));
  }, [books]);


  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}])
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  };

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
  )
};

export default BookContextsProvider;
