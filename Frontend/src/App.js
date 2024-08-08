import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage';
import AdminComponent from './admin/AdminComponent';
import AdminSignInPage from './Components/AdminSignInPage';
import RealEstateSignin from './Components/RealEstateSignin';
import RealEstateSignup from './Components/RealEstateSignup';
import BuyerComponent from './buyer/BuyerComponent';
import PropertyList from './Components/PropertyList';
import PropertyDetailsPage from './buyer/PropertyDetailsPage';

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
          <Route path='/property/:id' element={<PropertyDetailsPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
