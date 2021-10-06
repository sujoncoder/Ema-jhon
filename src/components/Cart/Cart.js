import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const {cart} = props;
   let total = 0;
   for(const product of cart){
       total = total + product.price;
   }

   const shiping = total > 0 ?  15: 0;
   const tax = (total + shiping) * 0.10;
   const GrandTotal = total + shiping + tax;

    return (
        <div>
             <h3>Order Summary</h3>
             <h5>Items ordered: {props.cart.length}</h5>
             <p>Total: {total.toFixed(2)}</p>
             <p>Shiping: {shiping}</p>
             <p>Tax: {tax.toFixed(2)}</p>
             <p>Grandtotal: {GrandTotal.toFixed(2)}</p>

        </div>
    );
};

export default Cart;