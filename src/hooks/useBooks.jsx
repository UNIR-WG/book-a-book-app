import React, { useEffect, useState } from 'react'
import booksList from '../db/BooksData'

export const useBooks = () => {
  const [books, setBooks] = useState(booksList);
  
  useEffect(() => {
    setTimeout(() => {
      setBooks(books);
    }, 3000);
  }, []);

  return books;
}
