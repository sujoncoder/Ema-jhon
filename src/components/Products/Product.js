import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    console.log(Product.name);

    const {name,img,seller,shipping,stock} = props.product;

   
    return (
        <div className="product">

            <div>
            <img src={img} alt="" />
            </div>
            
            <div className="msg">
            <h4 className="product-name">{name}</h4>
            <h5>By: {seller}</h5>
            <h4>$ {shipping}</h4>
            <small>only {stock} left in stock-order soon</small><br/>

            <button onClick={() => props.handleAddToCart(props.product)}
            className="btn-regular">{<FontAwesomeIcon icon={faShoppingCart} />} add to cart</button>
            </div>

            
        </div>
    );
};

export default Product;