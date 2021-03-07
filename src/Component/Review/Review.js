import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [cart,setCart] = useState([]);
    const [ordered, setOrdered] = useState(false);
    useEffect(()=>{
        const cartInfo = getDatabaseCart();
        const productKeys = Object.keys(cartInfo);
        console.log(productKeys)
        const cartProducts = productKeys.map(key =>{
            const cartProduct = fakeData.find(fakeProduct => fakeProduct.key === key)
            cartProduct.quantity = cartInfo[key]
            return cartProduct;
        })
        // console.log(cartProducts)
        setCart(cartProducts)
    },[])
    const placeOrder = () =>{
        setCart([]);
        processOrder();
    }
    const removeItemHandler = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    return (
        <div className="container">
        <div className="shop-container">
            {
                cart.map(ct => <ReviewItem removeItemHandler={removeItemHandler} product = {ct}></ReviewItem>)
            }
        </div>
        <div className="cart-container">
            <Cart cart={cart}>
                <button onClick={placeOrder} className="main-button">Place Order</button>
            </Cart>
            
        </div>
        </div>
    );
};

export default Review;