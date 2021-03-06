import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const {name,img,seller,price,stock,key} = props.product;
    // console.log(props.product)
    const isShowCart = props.showAddToCart;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div >
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p>br: {seller}</p>
                <br/>
                <p>${price}</p>
                <p><small>only {stock} left, --order soon</small></p>
                {
                    isShowCart && <button onClick={()=>props.clickHandler(props.product)} className="main-button"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                    
                }
            </div>
        </div>
    );
};

export default Product;