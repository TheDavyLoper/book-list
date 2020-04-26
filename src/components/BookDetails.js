import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContexts'

const BookDetails = ({ book }) => {
 const { removeBook } = useContext(BookContext);

  return (
      <li>
        <div className="title">{book.title}</div> <span className="x" onClick={() => removeBook(book.id)}>X</span>
        <div className="author">{book.author}</div>
      </li>
  )
}

export default BookDetails
