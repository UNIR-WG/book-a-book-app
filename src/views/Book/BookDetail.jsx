import React from 'react';
import { useParams } from 'react-router';
import booksList from '../../db/BooksData';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../components/common/PageTitle'

export const BookDetail = () => {

  const { id } = useParams();
  const { ISBN, Name, Category, Author, Language, Description } = booksList.find(o => o.Id == id);

  return (
    <>
      <PageTitle title={ 'DETALLE DEL LIBRO' } />
      <div className='book-detail-container'>
        <div className='book-detail-title'>
          <p><strong>{ Name }</strong></p>
        </div>
        <div className='book-detail-content'>
          <p><strong>ISBN: </strong> { ISBN }</p>
          <p><strong>Categoría: </strong> { Category }</p>
          <p><strong>Autor: </strong> { Author }</p>
          <p><strong>Idioma: </strong> { Language }</p>
          <p><strong>Descripción: </strong> { Description }</p>
        </div>
        <div className='book-detail-footer'>
          <Link to={ `/create-loan/${id}` }>Prestar Libro</Link>
        </div>
      </div>
    </>
  )
}
