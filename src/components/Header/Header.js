import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    const {user, logOut } = UseAuth() ;
    console.log(user);
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                {/* <a href="/shop">Shop</a> */}
                <Link to="/">  </Link>
                <Link to="/shop"> Home </Link>
                <Link to="/orders"> Order Rivew </Link>
                <Link to="/inventory">  Inventory </Link>
              
               { user.displayName && <span style ={{color:"white"}} >  Hello {user.displayName} </span>}
                {
                    user.displayName?
                    
                     <button onClick={logOut}>Logo Out</button>
                     
                     :
                     <Link to="/login">  Login </Link>}
            </nav>
        </div>
    );
};

export default Header;