import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.splice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    // console.log(fakeData)
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(pdKey => {
            const getProduct = fakeData.find(pd => pd.key === pdKey);

            // getProduct.quantity = savedCart[pdKey];
            return getProduct;
            // console.log(getProduct)
        });
        // setCart(previousCart);
        // console.log(previousCart)
    }, [])
    
    const buttonClickHandler = (product) => {
        const toBeAdded = product.key;
        const isAvailable = cart.find(pd => pd.key === toBeAdded)
        let count = 1;
        let newCart;
        if (isAvailable) {
            count = isAvailable.quantity + 1;
            isAvailable.quantity = count;
            const others = cart.filter(prd => prd.key !== toBeAdded);
            newCart = [...others,isAvailable];
        }
        else {

            product.quantity = count;
            newCart = [...cart,product]

        }
        newCart = [...cart, product];
        setCart(newCart);
        // const sameProduct = newCart.filter(pd => pd.key === productKey);
        addToDatabaseCart(product.key, count)

    }
    return (
        <div className="container">
            <div className="shop-container">
                {
                    products.map(pd => <Product showAddToCart={true} clickHandler={buttonClickHandler} product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="review">
                    <button className="main-button">Review</button>
                </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;