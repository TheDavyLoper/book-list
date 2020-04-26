import React, { useContext, useState } from 'react'
import { BookContext} from '../contexts/BookContexts'

export const NewBookForm = () => {
  const { addBook } = useContext(BookContext)
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      name="title" 
      value={title} 
      placeholder="Add Book" 
      onChange={(e) => setTitle(e.target.value)} />
      <input type="text" 
      name="author" 
      value={author} 
      placeholder="Add Author" 
      onChange={(e) => setAuthor(e.target.value)} />

      <button type="submit">Add Book</button>

    </form>
  )
}

export default NewBookForm;