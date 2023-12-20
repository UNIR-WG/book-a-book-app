import React from 'react'
import people from '../../db/PeopleData'
import { Link } from 'react-router-dom'
import { PageTitle } from '../../components/common/PageTitle'

export const People = () => {
  return (
    <>
      <PageTitle title={ 'LISTADO DE PERSONAS' } />
      <div className='people-container'>
        <table className='table-container'>
          <thead>
            <tr>
            <th>Id</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th />
            </tr>
          </thead>
          <tbody>
          {
            people.map(person => (
              <tr key={person.Id}>
                <td>{ person.Id }</td>
                <td>{ person.FirstName }</td>
                <td>{ person.LastName }</td>
                <td>{ person.Address }</td>
                <td>{ person.PhoneNumber }</td>
                <td>{ person.Email }</td>
                <td><Link to={`/person/${person.Id}`}>Detalle</Link></td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </>
  )
}
