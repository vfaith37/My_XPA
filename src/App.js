import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FinanceManager from './pages/FinanceManager';
import Bookshelfs from './pages/Bookshelfs';
import Navbar from './components/Navbar';
import React from 'react';
import ToDo from './pages/ToDo';
import Reminder from './pages/Reminder';
// import Location from './components/location'
function App() {
  // Location()
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <React.Fragment>
          <Route path='/' element={<Home/>} />
          <Route path='/financeManager' element={<FinanceManager />} />
          <Route path='/bookshelfs' element={<Bookshelfs />} />
          <Route path='/toDo' element={<ToDo />} />
          <Route path='/reminder' element={<Reminder />} />
          </React.Fragment>
        </Routes>
      </Router>
    </>
    );
}

export default App;
