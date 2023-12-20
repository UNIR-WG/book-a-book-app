import React from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../../components/common/PageTitle';

export const Authors = () => {

  const authors = JSON.parse(localStorage.getItem('authors'));

  //const { AuthorId, Biography, BirthDate, Email, FirstName, LastName, Nationality, Website } = 
  return (
    <>
      <PageTitle title={ 'LISTADO DE AUTORES' } />
      <div className='detail-container'>
        <table className='table-container'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo Electrónico</th>
              <th>Fecha de Nacimiento</th>
              <th>Sitio Web</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
               authors.map(o => (
                <tr key={ o.AuthorId }>
                  <td>{ o.AuthorId }</td>
                  <td>{ o.FirstName + ' ' + o.LastName }</td>
                  <td>{ o.Email }</td>
                  <td>{ o.BirthDate }</td>
                  <td><Link target='_blank' to={ o.Website }>Link a Sitio Web</Link></td>
                  <td>
                    <Link to={ `/loan-detail/${ o.AuthorId }` }>Detalle del Autor</Link>
                  </td>
                </tr>
              ))
            }            
          </tbody>
          </table>
      </div>
    </>
  )
}
