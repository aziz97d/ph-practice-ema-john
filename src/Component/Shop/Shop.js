import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.splice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const buttonClickHandler = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="shop-container">
                {
                    products.map(pd => <Product clickHandler={buttonClickHandler} product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;