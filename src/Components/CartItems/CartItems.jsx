import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assests/Frontend_Assets/cart_cross_icon.png';

function CartItems() {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Check if all_product and cartItems are defined
    if (!Array.isArray(all_product)) {
        return <p>Error: Products not available</p>;
    }

    if (!cartItems || typeof cartItems !== 'object') {
        return <p>Error: Cart items data is invalid</p>;
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.length > 0 ? (
                all_product.map((product) => {
                    if (cartItems[product.id] > 0) {
                        return (
                            <div key={product.id}>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={product.image} alt={product.name} className='carticon-product-icon' />
                                    <p>{product.name}</p>
                                    <p>${product.new_price}</p>
                                    <button className='cartitems-quantity'>
                                        {cartItems[product.id]}
                                    </button>
                                    <p>${product.new_price * cartItems[product.id]}</p>
                                    <img
                                        className='cartitems-remove-icon'
                                        src={remove_icon}
                                        onClick={() => removeFromCart(product.id)}
                                        alt={`Remove ${product.name}`}
                                    />
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })
            ) : (
                <p>Your cart is empty</p>
            )}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
