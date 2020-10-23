import React from 'react';
import {useSelector} from 'react-redux';
import {selectCart} from '../slices/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
  const cart = useSelector(selectCart);
  const cartValue = cart.length > 0 ?
    cart.map(item => item.quantity).reduce((accumulator, currentValue) => accumulator + currentValue) :
    0;

  return (
    <>
      <button className="cart-btn">
        <span>cart</span> <span>(</span><span>{cartValue}</span><span>)</span>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </>      
  );
}

export default Cart;
