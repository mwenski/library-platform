import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './sites/Books';
import Book from './sites/Book';
import CreateUpdateBook from './sites/CreateUpdateBook';

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/create-book' element={<CreateUpdateBook />} />
          <Route path='/update-book/:id' element={<CreateUpdateBook />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
