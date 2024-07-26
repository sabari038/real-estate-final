import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage.js';
import RealEstateSignin from './components/RealEstateSignin.js';
import RealEstateSignup from './components/RealEstateSignup.js';
import Dashboard from './components/Admin.js';
import AdminSignInPage from './components/AdminSignInPage.js';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/admin" element={<AdminSignInPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/login' element={<RealEstateSignin/>} />
          <Route path='/signup' element={<RealEstateSignup/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
