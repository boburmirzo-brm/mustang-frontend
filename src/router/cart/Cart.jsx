import React from 'react'
import s from './Cart.module.css'
import EmptyCart from '../../components/empty-cart/EmptyCart'
import CartProducts from '../../components/cart-products/CartProducts'
import { useSelector } from 'react-redux'
import { PRODUCTS } from '../../static/static'

function Cart() {
  // const cart = useSelector(s => s.addToCart)

  return (
    <div className={s.cart}>
        <div className={s.cart_box}>
          { PRODUCTS.length ? <CartProducts/> : <EmptyCart/>  }
        </div>
    </div>
  )
}

export default Cart