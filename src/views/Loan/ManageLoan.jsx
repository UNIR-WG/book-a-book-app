import React, { useEffect, useState } from 'react'
import { PageTitle } from '../../components/common/PageTitle'
import { useNavigate, useParams } from 'react-router';
import peopleList from '../../db/PeopleData';
import booksList from '../../db/BooksData';
import loanList from '../../db/LoansData';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import loansList from '../../db/LoansData';

export const ManageLoan = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [ returnDate, setReturnDate] = useState(new Date());
  const [ dueDate, setDueDate ] = useState(new Date());
  const [ currentDate, setCurrentDate ] = useState(new Date());
  const [ selectedPersonId, setSelectedPersonId ] = useState(1);
  
  let storedLoans = JSON.parse(localStorage.getItem('AllMergedLoans'));
  
  const [ loans, setLoans] = useState(
    storedLoans
  );
  
  const { LoanDate, ReturnDate, DueDate, IsReturned, RenewalCount, FirstName, LastName, Email, Address, PhoneNumber, ISBN, Name, Author, Language, Description, Category, AuthorId } = loans.find(o => o.LoanId == id);

  const ExtendLoanTerm = () => {
    let foundIndex = undefined;
    for(let i = 0; i < loans.length; i++) {
      if(loans[i].LoanId === parseInt(id))
        foundIndex = i;
    }

    const newLoansObject = [...loans];

    const loanFound = newLoansObject.find(o => o.LoanId === parseInt(id));

    loanFound.ReturnDate = returnDate.toISOString();
    loanFound.RenewalCount = loanFound.RenewalCount + 1;

    setLoans(newLoansObject);
    
    localStorage.setItem('AllMergedLoans', JSON.stringify(loans));
    navigate(`/loan-detail/${id}`, 0);
  }

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
      <div className='form-fieldset'>
        <form>
          <label>Nueva Fecha de devolución: </label>
          <DatePicker selected={ returnDate } onChange={(date) => setReturnDate(date)} dateFormat="yyyy-MM-dd" />
          <input type='button' value={ 'Actualizar Préstamo' } onClick={ ExtendLoanTerm } />
        </form>
      </div>
    </>
  )
}
