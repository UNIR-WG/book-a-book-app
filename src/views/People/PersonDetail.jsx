import React from 'react'
import { PageTitle } from '../../components/common/PageTitle'
import booksList from '../../db/BooksData';
import peopleList from '../../db/PeopleData';
import loansList from '../../db/LoansData';
import { useParams } from 'react-router';
import { useLoansAndBooksMerge } from '../../hooks/useLoansAndBooksMerge';

export const PersonDetail = () => {
  const { id } = useParams();
  
  const { Id, FirstName, LastName, Email, Address, PhoneNumber } = peopleList.find(o => o.Id == id);
  //console.log(localStorage.getItem('AllMergedLoans'));
  const allMergedLoans = JSON.parse(localStorage.getItem('AllMergedLoans'));
  const loans = allMergedLoans.filter(loan => loan.PersonId == id);

  //console.log(allMergedLoans);

  return (
    <>
      <PageTitle title={ 'DETALLE DE PERSONA' } />
      <div className='detail-container'>
        <div className='detail-content'>
          <p><strong>Nombres: </strong> { FirstName }</p>
          <p><strong>Apellidos: </strong> { LastName }</p>
          <p><strong>Email: </strong> { Email }</p>
          <p><strong>Dirección: </strong> { Address }</p>
          <p><strong>Teléfono: </strong> { PhoneNumber }</p>
        </div>
      </div>
      <PageTitle title={ 'LIBROS PRESTADOS' } />
      <div className='detail-container'>
        <table className='table-container'>
          <thead>
            <tr>
              <th>Id</th>
              <th>ISBN</th>
              <th>Título</th>
              <th>Categoría</th>
              <th>Fecha Entrega</th>
              <th>Fecha Devolucion</th>
              <th>Entregado</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
               loans.map(o => (
                <tr key={ o.Id }>
                  <td>{ o.BookId }</td>
                  <td>{ o.ISBN }</td>
                  <td>{ o.Name }</td>
                  <td>{ o.Category }</td>
                  <td>{ o.LoanDate }</td>
                  <td>{ o.DueDate }</td>
                  <td>{ o.IsReturned ? 'SI' : 'NO' }</td>
                  <td></td>
                </tr>
              ))
            }            
          </tbody>
          </table>
      </div>
    </>
  )
}
