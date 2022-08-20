import React from 'react'
import s from './EmptyCart.module.css'
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <div className={s.empty_cart}>
      <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png" alt="" />
      <div className={s.text}>
        <h2>Sizning korzinkangiz bo'sh.</h2>
        <p>Karzinkani to'ldirish uchun, biror nima sotib oling</p>
        <div className={s.grow}></div>
        <Link to='/'>
          <button>Sotib olish</button>
        </Link>
      </div>
    </div>
  )
}

export default EmptyCart