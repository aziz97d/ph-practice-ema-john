import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <br/>
                <p>br: {seller}</p>
                <br/>
                <p>${price}</p>
                <p><small>only {stock} left, --order soon</small></p>
                <button onClick={()=>props.clickHandler(props)} className="main-button"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;