import React, { useContext } from 'react'
import { BookABookContext } from '../../context/BookABookContext'
import { Book } from './Book';
import booksList from '../../db/BooksData'
import { PageTitle } from '../../components/common/PageTitle'

export const Books = () => {
    return (
      <>
        <PageTitle title="LISTADO DE LIBROS" />
        {
          // books.length > 0 ? (
            booksList.map((book, index) => (
              <Book 
                key={ index }
                Id={ book.Id }
                ISBN={ book.ISBN }
                Name={ book.Name }
                Category={ book.Category }
                Author={ book.Author }
              />
            ))
            // ) : (
            //   <></>
            // )
        }     
      </>
  )
}
