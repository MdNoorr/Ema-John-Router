import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const totalPrice = cart.reduce((total, prd) =>    total + prd.price,0)
    // const total = cart.reduce( (total, prd) => total + prd.price, 0)
    let total = 0
    for(let i = 0; i < cart.length; i++){
        const prd = cart[i]
        total = total + prd.price;

    }
    
    let shipping = 0
    if (total > 35) {
        shipping = 0
    } else if ( total > 15){
        shipping = 4.99
    }else if(total > 0){
        shipping = 12.99
    }
   

    const tax = (total / 10).toFixed(2);
   
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Ordered :{cart.length}</p>
            {/* <h5>{totalPrice}</h5> */}
            <h3>Product Price : {total}</h3>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>Tax + VAT : {tax}</small></p>
            <p>Total Price : {total + shipping}</p>
        </div>
    );
};

export default Cart;