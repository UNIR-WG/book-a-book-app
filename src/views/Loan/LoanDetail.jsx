import React from 'react'
import { PageTitle } from '../../components/common/PageTitle';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const LoanDetail = () => {
  const { id } = useParams();
  const loans = JSON.parse(localStorage.getItem('AllMergedLoans'));  
  const { LoanDate, ReturnDate, DueDate, IsReturned, RenewalCount, FirstName, LastName, Email, Address, PhoneNumber, ISBN, Name, Author, Language, Description, Category } = loans.find(o => o.LoanId == id);

  return (
    <>
      <PageTitle title={ 'DETALLE DEL PRÉSTAMO' } />
      <div className='detail-container'>
        <div className='detail-content'>
          <p><strong>ISBN: </strong> { ISBN }</p>
          <p><strong>Categoría: </strong> { Category }</p>
          <p><strong>Autor: </strong> { Author }</p>
          <p><strong>Idioma: </strong> { Language }</p>
          <p><strong>Descripción: </strong> { Description }</p>
          <p><strong>Fecha de Préstamo: </strong> { LoanDate }</p>
          <p><strong>Fecha de Vencimiento: </strong> { DueDate }</p>
          <p><strong>¿Devuelto?: </strong> { IsReturned ? 'SI' : 'NO' }</p>
          <p><strong>Fecha de Devolución: </strong> { ReturnDate }</p>
          <p><strong>Nombre: </strong> { FirstName + ' ' + LastName }</p>
          <p><strong>Correo Electrónico: </strong> { Email }</p>
          <p><strong>Dirección: </strong> { Address }</p>
          <p><strong>Teléfono: </strong> { PhoneNumber }</p>
        </div>      
      </div>
    </>
  )
}
