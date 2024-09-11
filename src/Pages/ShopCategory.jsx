import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assests/Frontend_Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = ({ banner, category }) => { // Destructure props directly, including category
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner'src={banner} alt="Shop Category Banner" /> {/* Use descriptive alt text */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort Dropdown Icon"/> {/* Add alt text */}
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product
          .filter(item => item.category === category) // Filter products based on category
          .map(item => (
            <Item
              key={item.id} // Use unique id for key prop
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
