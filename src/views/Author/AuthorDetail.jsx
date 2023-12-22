import React from 'react'
import authorsList from '../../db/AuthorsData'
import { useParams } from 'react-router'
import { PageTitle } from '../../components/common/PageTitle';
import { Link } from 'react-router-dom';

export const AuthorDetail = () => {
  const { id } = useParams();
  const { AuthorId, FirstName, LastName, BirthDate, Nationality, Email, Website, Biography } = authorsList.find(o => o.AuthorId == id);
  return (
    <>
      <PageTitle title={ 'DETALLE DEL AUTOR' } />
      <div className='detail-container'>
        <div className='detail-content'>
          <p><strong>Nombre: </strong> { `${ FirstName } ${ LastName }` }</p>
          <p><strong>Fecha de Nacimiento: </strong> { BirthDate }</p>
          <p><strong>Nacionalidad: </strong> { Nationality }</p>
          <p><strong>Correo Electrónico: </strong> { Email }</p>
          <p><strong>Sitio Web: </strong> <Link target='_blank' to={ Website }>Link a Sitio Web</Link></p>
          <p><strong>Biografía: </strong> { Biography }</p>
        </div>      
      </div>
    </>
  )
}
