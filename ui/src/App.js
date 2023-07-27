import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Book from './components/books/Book';
import CreateBook from './components/books/CreateBook';

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book/:id' element={<Book />} />
          <Route path='/create-book' element={<CreateBook />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
