import React from 'react';
import img from '../../images/giphy.gif'
import './Order.css'

const PlaceOrder = () => {
    return (
        <div className='placeorder'>
            <h1> wow!! we received your order. </h1>
           <img src={img} alt=""  />
        </div>
    );
};

export default PlaceOrder;