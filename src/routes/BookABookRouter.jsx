import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from '../views/NotFound';
import EntryPoint from '../views/EntryPoint';
import { Books } from '../views/Book/Books';
import { BookDetail } from '../views/Book/BookDetail';
import { Authors } from '../views/Author/Authors';
import { AuthorDetail } from '../views/Author/AuthorDetail';
import { Loans } from '../views/Loan/Loans';
import { ManageLoan } from '../views/Loan/ManageLoan';
import { CreateLoan } from '../views/Loan/CreateLoan';
import { LoanDetail } from '../views/Loan/LoanDetail';
import { LoansByPerson } from '../views/Loan/LoansByPerson';
import { People } from '../views/People/People';
import { PersonDetail } from '../views/People/PersonDetail';
import { TopBar } from '../components/common/TopBar';
import { BookSearch } from '../views/Book/BookSearch';
import { Footer } from '../components/common/Footer';

function BookABookRouter() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <EntryPoint /> } />
        <Route path='/books' element={ <Layout><Books /></Layout> } />
        <Route path='/book/:id' element={ <Layout><BookDetail /></Layout> } />
        <Route path='/book-search' element={ <Layout><BookSearch /></Layout> } />
        <Route path='/authors' element={ <Layout><Authors /></Layout> } />
        <Route path='/author/:id' element={ <Layout><AuthorDetail /></Layout> } />
        <Route path='/loans' element={ <Layout><Loans /></Layout> } />
        <Route path='/manage-loan/:id' element={ <Layout><ManageLoan /></Layout> } />
        <Route path='/create-loan/:bookId' element={ <Layout><CreateLoan /></Layout> } />
        <Route path='/loan/:personId' element={ <Layout><LoansByPerson /></Layout> } />
        <Route path='/loan-detail/:id' element={ <Layout><LoanDetail /></Layout> } />
        <Route path='/people' element={ <Layout><People /></Layout> } />
        <Route path='/person/:id' element={ <Layout><PersonDetail /></Layout> } />
        <Route path="*" element={ <Layout><NotFound /></Layout> } />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = ({ children }) => (
  <>
    <TopBar />
    <div className='content'>
      {children}
    </div>
    <Footer />
  </>
);

export default BookABookRouter;