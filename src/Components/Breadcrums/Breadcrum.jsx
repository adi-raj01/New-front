import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assests/Frontend_Assets/breadcrum_arrow.png'; // Fixed typo in 'Assets'

function Breadcrum(props) {
  const { product } = props;

  // Debugging: Log the product object to check its structure
  console.log('Product:', product);

  // Fallback text if product data is not available
  const category = product?.category || 'Category';
  const name = product?.name || 'Product Name';

  return (
    <div className='breadcrum'>
      HOME
      <img src={arrow_icon} alt="Arrow pointing right" />
      SHOP
      <img src={arrow_icon} alt="Arrow pointing right" />
      {category}
      <img src={arrow_icon} alt="Arrow pointing right" />
      {name}
    </div>
  );
}

export default Breadcrum;
