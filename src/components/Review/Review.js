import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([])

    const removeProduct = (productkey) =>{
        console.log('remove', productkey);
        const newCart = cart.filter(pd => pd.key !== productkey)
        setCart(newCart)
        removeFromDatabaseCart(productkey)
    }

    useEffect(() => {
        
        const savedCart = getDatabaseCart()
        console.log(savedCart)
        const Productkeys = Object.keys(savedCart)
        console.log(Productkeys)
        
        const cartProducts = Productkeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = savedCart[key]
            return product
        })
        setCart(cartProducts)
        console.log(cartProducts)
    })
    return (
        <div className='shop-container'>
            <div className='product-container'>
            <h2>Cart Length : { cart.length}</h2>
            {
                cart.map(pd => <ReviewItem 
                    key = {pd.key}
                    removeProduct = {removeProduct}
                    product={pd}></ReviewItem>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;