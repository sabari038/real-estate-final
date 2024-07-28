import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import RealEstateSignin from './components/RealEstateSignin';
import RealEstateSignup from './components/RealEstateSignup';
import AdminSignInPage from './components/AdminSignInPage';
import AdminComponent from './components/admin/AdminComponent';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminSignInPage />} />
          <Route path="/login" element={<RealEstateSignin />} />
          <Route path="/signup" element={<RealEstateSignup />} />
          <Route path="/admin-dashboard/*" element={<AdminComponent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
