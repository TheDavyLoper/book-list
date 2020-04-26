import React from 'react';
import BookContextsProvider from './contexts/BookContexts';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import { NewBookForm } from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextsProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextsProvider>
    </div>
  );
}

export default App;
