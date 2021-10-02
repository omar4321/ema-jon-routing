import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                {/* <a href="/shop">Shop</a> */}
                <Link to="/">  </Link>
                <Link to="/shop"> Home </Link>
                <Link to="/orders"> Order Rivew </Link>
                <Link to="/inventory">  Inventory </Link>
          
               
            </nav>
        </div>
    );
};

export default Header;