import React from 'react';

const ReviewItem = (props) => {
    console.log(props.product)
    const {name,quantity,price,key} = props.product;
    const reviewItemStyle = {
        borderBottom : '1px solid lightgrey',
        paddingBottom: '5px',
        marginBottom: '5px',
        marginLeft:'200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h6>{name}</h6>
            <h4>{price}</h4>
            <h3>{quantity}</h3>
            <button onClick={()=>{props.removeItemHandler(key)}} className='main-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;