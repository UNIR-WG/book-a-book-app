import React from 'react'
import { Link } from 'react-router-dom'

export const Book = ({ Id, ISBN, Name, Category, Author }) => {
  return (
    <>
      <div className="book-card">
        <div className='book-card-title'>
          <p><strong>{ Name }</strong></p>
        </div>
        <div className='book-card-content'>
          <p><strong>ISBN: </strong> { ISBN }</p>
          <p><strong>Categoría: </strong> { Category }</p>
          <p><strong>Autor: </strong> { Author }</p>
        </div>
        <div className='book-card-view-detail'>
          <Link to={ `/book/${Id}` }>Ir al Libro</Link>
        </div>
      </div>
    </>
  )
}
