// import React from 'react'
// import './Item.css'
// import { Link } from 'react-router-dom'
// function Item(props) {
//   return (
//     <div className='item'>
//     <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>    
//         <p>{props.name}</p>
//         <div className="item-prices">
//             <div className="item-price-new">
//                 ${props.new_price}
//             </div>
//             <div className="item-price-old">
//                 ${props.old_price}

//             </div>
//         </div>
    
    
//     </div>
//   )
// }

// export default Item

import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item({ id, image, name, new_price, old_price }) {
  return (
    <div className='item'>
      <Link to={`/product/${id}`}>
        <img  onClick={window.scrollTo(0,0)}src={image} alt={name || 'Product Image'} />
      </Link>
      <p>{name || 'Product Name'}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${new_price || '0.00'}
        </div>
        {old_price && (
          <div className="item-price-old">
            ${old_price}
          </div>
        )}
      </div>
    </div>
  );
}

// Optional: Add default props
Item.defaultProps = {
  id: 'N/A',
  image: 'default-image.png', // Path to a default image
  name: 'Unknown Product',
  new_price: '0.00',
  old_price: null
};

export default Item;
