import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import SnackBar from './components/global/SnackBar';
import ProtectedRoute from './components/global/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className='content'>
          <Routes>
            <Route exact path='/register' Component={RegisterBorrower} />
            <Route exact path='/login' Component={LoginBorrower} />
            <Route exact path='/' Component={BookListSite} />
            <Route path='/book/:id' Component={BookInfoSite} />
            <Route exact path='/create-book' Component={CreateUpdateBook} />
            <Route path='/update-book/:id' Component={CreateUpdateBook} />
            {/* <Route exact path='/borrowers' Component={BorrowerListSite} /> */}
            <Route exact path='/borrowers' Component={ProtectedRoute}>
              <Route exact path='/borrowers' Component={BorrowerListSite} />
            </Route>
            <Route path='/borrower/:id' Component={BorrowerInfoSite} />
            
          </Routes>
          <SnackBar />
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
