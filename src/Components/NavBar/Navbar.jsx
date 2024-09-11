import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/Frontend_Assets/logo.png';
import Cart_icon from '../Assests/Frontend_Assets/cart_icon.png';
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assests/Frontend_Assets/nav_dropdown.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
const menuRef = useRef();
const dropdown_toggle=(e)=>{
menuRef.current.classList.toggle('nav-menu-visible');
e.target.classList.toggle('open')
}
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Shopper Logo" />
        <p>Shopper</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle}src={nav_dropdown} alt="" />
      <ul ref ={menuRef} className='nav-menu'>
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Woman</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
          <img src={Cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
