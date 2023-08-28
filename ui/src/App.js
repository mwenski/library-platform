import './styles/App.css';
import { Router, Routes, Route } from 'react-router-dom';
import { history } from './config/history';
import store from './redux/store';
import { Provider } from 'react-redux';

import BookListSite from './sites/books/BookListSite';
import BookInfoSite from './sites/books/BookInfoSite';
import CreateUpdateBook from './sites/books/CreateUpdateBook';
import RegisterBorrower from './sites/borrowers/RegisterBorrower';
import BorrowerListSite from './sites/borrowers/BorrowerListSite';
import BorrowerInfoSite from './sites/borrowers/BorrowerInfoSite';
import LoginBorrower from './sites/borrowers/LoginBorrower';
import Header from './components/global/Header';
import Footer from './components/global/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/register' element={<RegisterBorrower />} />
            <Route path='/login' element={<LoginBorrower />} />
            <Route path='/' element={<BookListSite />} />
            <Route path='/book/:id' element={<BookInfoSite />} />
            <Route path='/create-book' element={<CreateUpdateBook />} />
            <Route path='/update-book/:id' element={<CreateUpdateBook />} />
            <Route path='/borrowers' element={<BorrowerListSite />} />
            <Route path='/borrower/:id' element={<BorrowerInfoSite />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
