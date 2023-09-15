import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

import BookListSite from './sites/books/BookListSite';
import BookInfoSite from './sites/books/BookInfoSite';
import CreateUpdateBook from './sites/books/CreateUpdateBook';
import RegisterBorrower from './sites/borrowers/RegisterBorrower';
import BorrowerListSite from './sites/borrowers/BorrowerListSite';
import BorrowerInfoSite from './sites/borrowers/BorrowerInfoSite';
import LoginBorrower from './sites/borrowers/LoginBorrower';
import SignOut from './components/global/SignOut';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import SnackBar from './components/global/SnackBar';
import ProtectedRoute from './components/global/ProtectedRoute';
import NotLoggedRoute from './components/global/NotLoggedRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className='content'>
          <Routes>
            <Route exact path='/' Component={BookListSite} />
            <Route path='/book/:id' Component={BookInfoSite} />
            <Route path='/sign-out' Component={SignOut} />
            <Route exact path='/register' Component={NotLoggedRoute}>
              <Route exact path='/register' Component={RegisterBorrower} />
            </Route>
            <Route exact path='/login' Component={NotLoggedRoute}>
              <Route exact path='/login' Component={LoginBorrower} />
            </Route>
            <Route exact path='/create-book' Component={ProtectedRoute}>
              <Route exact path='/create-book' Component={CreateUpdateBook} />
            </Route>
            <Route path='/update-book/:id' Component={ProtectedRoute}>
              <Route path='/update-book/:id' Component={CreateUpdateBook} />
            </Route>
            <Route exact path='/borrowers' Component={ProtectedRoute}>
              <Route exact path='/borrowers' Component={BorrowerListSite} />
            </Route>
            <Route exact path='/add-borrower' Component={ProtectedRoute}>
              <Route exact path='/add-borrower' Component={RegisterBorrower} />
            </Route>
            <Route path='/borrower/:id' Component={ProtectedRoute}>
              <Route path='/borrower/:id' Component={BorrowerInfoSite} />
            </Route>
            
            <Route path='*' Component={<Navigate to='/' replace />} />
          </Routes>
          <SnackBar />
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
