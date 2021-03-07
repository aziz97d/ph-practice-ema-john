import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // console.log(t)
    // const total = cart.reduce((total,prd)=> total + (prd.price),0).toFixed(2);
    // const total = 10;
    let total=0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + (parseInt(cart[i].price) * parseInt(product.quantity));
        
        // console.log(typeof(cart[i].quantity));
        // console.log(cart[i].quantity);
    }

    let shipping = 0;
    if(total>35){
        shipping=0;
    }else if(total>20){
        shipping=4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }
    return (
        <div>
            <h1>This is Shop</h1>
            <h4>Summery {cart.length}</h4>
            <h4>Items Ordered : {cart.length}</h4>
            <h4>Product Price : {total}</h4>
            <h4>Sipping Price : {shipping}</h4>
            <h4>Total Price : {total+shipping}</h4>
            {
                props.children
            }
        </div>
    );
};

export default Cart;