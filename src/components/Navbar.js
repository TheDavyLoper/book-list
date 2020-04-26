import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContexts'

const Navbar = () => {
  const { books } = useContext(BookContext)
  const booksToRead = () => {
    if (books.length < 2) {
      return `You have ${books.length} book to read`
    } else {
      return `You have ${books.length} books to read`
    }
  }
  return(
    <div className="navbar">
      <h1>Your Reading List</h1>
      <p>{books.length ? booksToRead() : ''}</p>
    </div>
  )
}

export default Navbar;
