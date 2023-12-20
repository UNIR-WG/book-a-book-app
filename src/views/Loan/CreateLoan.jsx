import React, { useState } from 'react'
import { useParams } from 'react-router'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import peopleList from '../../db/PeopleData';
import booksList from '../../db/BooksData';
import { PageTitle } from '../../components/common/PageTitle';

export const CreateLoan = () => {

  const { bookId } = useParams();
  const [ startDate, setStartDate] = useState(new Date());

  const { id } = useParams();
  const { ISBN, Name, Category, Author, Language, Description } = booksList.find(o => o.Id == bookId);

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
      </div>
      <div className='form-fieldset'>
        <form>
          <label id='label-select-people' htmlFor='select-people'>Persona que toma el alquiler: </label>
          <select id='select-people' name='select-people'>
            { peopleList.map(o => (<option value={ o.Id }>{ o.FirstName + ' ' + o.LastName }</option>)) }
          </select>
          <label>Fecha de devolución: </label>
          <DatePicker selected={ startDate } onChange={(date) => setStartDate(date)} />
          <input type='button' value={ 'Registrar Préstamo' } />
        </form>
      </div>
    </>
  )
}
