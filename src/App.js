import BookABookRouter from "./routes/BookABookRouter";
import { Footer } from "./components/common/Footer";
import { BookABookContext } from "./context/BookABookContext";
import { useBooks } from "./hooks/useBooks";
import loansList from './db/LoansData';
import booksList from './db/BooksData';
import peopleList from './db/PeopleData'
import authorsList from './db/AuthorsData'
import { useLoansAndBooksMerge } from "./hooks/useLoansAndBooksMerge";
import { useLoansBooksAndPeopleMerge } from "./hooks/useLoansBooksAndPeopleMerge";

function App() {
  const storedLoans = JSON.parse(localStorage.getItem('loans'));
  
  const loansAndBooks = useLoansAndBooksMerge(storedLoans, booksList);
  const mergedLoans = useLoansBooksAndPeopleMerge(loansAndBooks, peopleList);

  if(storedLoans.length === 100)
    localStorage.setItem('loans', JSON.stringify(loansList));
  else 
    localStorage.setItem('loans', JSON.stringify(storedLoans));

  localStorage.setItem('AllMergedLoans', JSON.stringify(mergedLoans));
  localStorage.setItem('books', JSON.stringify(booksList));
  localStorage.setItem('people', JSON.stringify(peopleList));
  localStorage.setItem('authors', JSON.stringify(authorsList));
  
  const books = useBooks();
  return (
      <BookABookContext.Provider value={{books}}>        
        <BookABookRouter />        
      </BookABookContext.Provider>
  );
}

export default App;
