import React from 'react'
import { PageTitle } from '../../components/common/PageTitle';
import { Link } from 'react-router-dom';

export const Loans = () => {
  const loans = JSON.parse(localStorage.getItem('AllMergedLoans'));
  return (
    <>
      <PageTitle
       title={ 'LISTADO DE LIBROS PRESTADOS' } />
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
              <th />
            </tr>
          </thead>
          <tbody>
            {
               loans.map(o => (
                <tr key={ o.LoanId }>
                  <td>{ o.LoanId }</td>
                  <td>{ o.ISBN }</td>
                  <td>{ o.Name }</td>
                  <td>{ o.Category }</td>
                  <td>{ o.LoanDate }</td>
                  <td>{ o.ReturnDate }</td>
                  <td>{ o.IsReturned ? 'SI' : 'NO' }</td>
                  <td>
                    <Link to={ `/manage-loan/${ o.LoanId }` }>Extender Plazo</Link>
                  </td>
                  <td>
                    <Link to={ `/loan-detail/${ o.LoanId }` }>Detalle del Prestamo</Link>
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
