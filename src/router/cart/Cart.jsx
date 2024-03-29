// @ts-nocheck
import React from 'react'
import s from './Cart.module.css'
import EmptyCart from '../../components/empty-cart/EmptyCart'
import CartProducts from '../../components/cart-products/CartProducts'
import { useSelector } from 'react-redux'

function Cart() {
  document.title = 'Harit savatcha'
  const cart = useSelector(s => s.cart)


  return (
    <div className={s.cart}>
    
        <div className={`${s.cart_box} ${!cart.length && s.active}`}>
          { cart.length ? <CartProducts/> : <EmptyCart/>  }
        </div>
    </div>
  )
}

export default Cart