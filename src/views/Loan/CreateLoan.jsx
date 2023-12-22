import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import peopleList from '../../db/PeopleData';
import booksList from '../../db/BooksData';
import loanList from '../../db/LoansData';
import { PageTitle } from '../../components/common/PageTitle';
import { useLoansAndBooksMerge } from '../../hooks/useLoansAndBooksMerge';
import { useLoansBooksAndPeopleMerge } from '../../hooks/useLoansBooksAndPeopleMerge';
import useRedirection from '../../hooks/useRedirection';

export const CreateLoan = () => {

  const navigate = useNavigate();
  const { bookId } = useParams();
  const [ returnDate, setReturnDate] = useState(new Date());
  const [ dueDate, setDueDate ] = useState(new Date());
  const [ currentDate, setCurrentDate ] = useState(new Date());
  const [ selectedPersonId, setSelectedPersonId ] = useState(1);
  const [ loan, setLoan ] = useState([]);

  const { ISBN, Name, Category, Author, Language, Description } = booksList.find(o => o.Id == bookId);

  const CreateNewLoad =() => {
    const nextLoanId = loanList.length + 1;
    const loan = {
      "LoanId": nextLoanId,
      "BookId": parseInt(bookId),
      "PersonId": parseInt(selectedPersonId),
      "LoanDate": currentDate.toISOString(),
      "ReturnDate": returnDate.toISOString(),
      "DueDate": dueDate.toISOString(),
      "IsReturned": false,
      "RenewalCount": 0
    }

    loanList.push(loan);
    localStorage.setItem('loans', JSON.stringify(loanList));
    //console.log(JSON.parse(localStorage.getItem('loans')));

    const loansAndBooks = useLoansAndBooksMerge(loanList, booksList);
    const mergedLoans = useLoansBooksAndPeopleMerge(loansAndBooks, peopleList);

    localStorage.setItem('AllMergedLoans', JSON.stringify(mergedLoans));
    navigate(`/loan-detail/${nextLoanId}`, 0);
  }

  return (
    <>
      <PageTitle title={ 'DETALLE DEL LIBRO' } />
      <div className='detail-container'>
        <div className='detail-title'>
          <p><strong>{ Name }</strong></p>
        </div>
        <div className='detail-content'>
          <p><strong>ISBN: </strong> { ISBN }</p>
          <p><strong>Categoría: </strong> { Category }</p>
          <p><strong>Autor: </strong> { Author }</p>
          <p><strong>Idioma: </strong> { Language }</p>
          <p><strong>Descripción: </strong> { Description }</p>
        </div>
      </div>
      <div className='form-fieldset'>
        <form>
          <label id='label-select-people' htmlFor='select-people'>Persona que toma el alquiler: </label>
          <select id='select-people' name='select-people' onChange={ (e) => setSelectedPersonId(e.target.value) }>
            { peopleList.map(o => (<option value={ o.Id }>{ o.FirstName + ' ' + o.LastName }</option>)) }
          </select>
          <label>Fecha de devolución: </label>
          <DatePicker selected={ returnDate } onChange={(date) => {            
              setReturnDate(date);
            }} dateFormat="yyyy-MM-dd" />
          <input type='button' value={ 'Registrar Préstamo' } onClick={ CreateNewLoad } />
        </form>
      </div>
    </>
  )
}
