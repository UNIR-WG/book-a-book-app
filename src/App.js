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
  const loansAndBooks = useLoansAndBooksMerge(loansList, booksList);
  const mergedLoans = useLoansBooksAndPeopleMerge(loansAndBooks, peopleList);

  localStorage.setItem('AllMergedLoans', JSON.stringify(mergedLoans));
  localStorage.setItem('loans', JSON.stringify(loansList));
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
