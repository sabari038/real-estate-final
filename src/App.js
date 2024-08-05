import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import AdminComponent from './admin/AdminComponent';
import AdminSignInPage from './Pages/AdminSignInPage';
import RealEstateSignin from './Pages/RealEstateSignin';
import RealEstateSignup from './Pages/RealEstateSignup';
import BuyerComponent from './buyer/BuyerComponent';
import PropertyList from './Pages/PropertyList';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/admin-dashboard/*' element={<AdminComponent />} />
          <Route path='/admin' element={<AdminSignInPage />} />
          <Route path='/login' element={<RealEstateSignin />} />
          <Route path='/signup' element={<RealEstateSignup />} />
          <Route path='/properties/:type' element={<PropertyList />} />
          <Route path='/prop' element={<BuyerComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
