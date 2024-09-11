import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'; // Ensure this path is correct
import Breadcrum from '../Components/Breadcrums/Breadcrum'; // Ensure this path is correct
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DesciptionBox from '../Components/DesciptionBox/DesciptionBox';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  
  // Debugging: Log context and params
  console.log('All Products:', all_product);
  console.log('Product ID:', productId);

  // Convert productId to a number and find the product
  const product = all_product.find(e => e.id === Number(productId));

  // Debugging: Log the found product
  console.log('Found Product:', product);

  return (
    <div>
      {/* Pass product to Breadcrum, with a fallback if product is not found */}
      <Breadcrum product={product || { category: 'Unknown', name: 'Unknown Product' }} />
      <ProductDisplay product={product}/>
      <DesciptionBox/>
      <RelatedProduct/>
    </div>
  );
}

export default Product;
