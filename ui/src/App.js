import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './sites/books/Books';
import Book from './sites/books/Book';
import CreateUpdateBook from './sites/books/CreateUpdateBook';
import RegisterBorrower from './sites/borrowers/RegisterBorrower';
import Borrowers from './sites/borrowers/Borrowers';
import Borrower from './sites/borrowers/Borrower';
import LoginBorrower from './sites/borrowers/LoginBorrower';

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/register' element={<RegisterBorrower />} />
          <Route path='/login' element={<LoginBorrower />} />
          <Route path='/' element={<Books />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/create-book' element={<CreateUpdateBook />} />
          <Route path='/update-book/:id' element={<CreateUpdateBook />} />
          <Route path='/borrowers' element={<Borrowers />} />
          <Route path='/borrower/:id' element={<Borrower />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
