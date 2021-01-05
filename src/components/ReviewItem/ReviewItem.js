import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const { name, quantity, key } = props.product
    const Reviewable = {borderBottom: '3px solid blue',
    marginBottom : '5px',
    paddingBottom : '5px',
    marginLeft : '200px'
}
    return (
        <div style={Reviewable}>
            <h3>{name}</h3>
            <p>Quantity : {quantity}</p>
            <br/>
            <button className='btn' 
            onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;