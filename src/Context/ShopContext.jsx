import React, { createContext, useState } from "react";
import all_product from '../Components/Assests/Frontend_Assets/all_product'; // Ensure this path is correct

export const ShopContext = createContext(null);

// Initialize the cart with product IDs as keys
const getDefaultCart = () => {
    let cart = {};
    for (const product of all_product) {
        cart[product.id] = 0; // Use product.id instead of index
    }
    return cart;
}

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1 // Initialize to 0 if undefined
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max(0, (prev[itemId] || 0) - 1) // Initialize to 0 if undefined
        }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const quantity = cartItems[itemId];
            if (quantity > 0) {
                const itemInfo = all_product.find(product => product.id === Number(itemId));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * quantity;
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = {
        getTotalCartItems, // Ensure consistency in naming
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
