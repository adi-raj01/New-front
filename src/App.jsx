// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing components and pages
import Navbar from './Components/NavBar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

import LoginSignup from './Pages/LoginSignup';

import Product from './Pages/Product';
import Footer from './Components/Footers/Footer'
import men_banner from './Components/Assests/Frontend_Assets/banner_mens.png'
import women_banner from './Components/Assests/Frontend_Assets/banner_women.png'
import kid_banner from './Components/Assests/Frontend_Assets/banner_kids.png'
import Cart from './Pages/Cart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
   
     <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
