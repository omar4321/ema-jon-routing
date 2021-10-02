import React from 'react';
import Useproducts from '../../Hooks/Useproduct';
import Usecart from '../../Hooks/Usecart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';



const OrderRivew = () => {
    const [product] = Useproducts();
     const [cart, setCart] = Usecart (product);
     
const handleRemove = key => {
    const newCart = cart.filter(product => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
}
    return (
        <div className="shop-container">
        <div className="product-container">
            {
                cart.map(product=> <ReviewItem 
                    key={product.key} product ={product}
                    
                    handleRemove={handleRemove}>  </ReviewItem>)
            }
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
    </div>
    );
};

export default OrderRivew;