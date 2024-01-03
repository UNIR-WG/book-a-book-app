import React, { useContext } from 'react'
import { BookABookContext } from '../../context/BookABookContext'
import { Book } from './Book';
import booksList from '../../db/BooksData'
import authorsList from '../../db/AuthorsData'
import { PageTitle } from '../../components/common/PageTitle'

export const Books = () => {
    for(var i = 0; i < booksList.length; i++) {
      var authorData = authorsList.find(o => o.AuthorId == booksList[i].AuthorId);
      booksList[i].Author =  `${authorData.FirstName} ${authorData.LastName}`
    }
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
