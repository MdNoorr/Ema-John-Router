import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock } = props.product

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h2 className="product-name">{name}</h2>
                <br />
                <p><small>by : {seller}</small></p><br />
                <p>${price} </p>
                <p><small>Only {stock} left in Stock - Order soon</small></p>
                <button className='btn'
                    onClick={() => props.handleProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart </button>
            </div>


        </div>
    );
};

export default Product;