import React from 'react'
import s from './EmptyCart.module.css'
import img from '../../assets/image 2.png'
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <div className={s.empty_cart}>
      <img src={img} alt="" />
      <h3>Siz hali mahsulot tallamadingiz</h3>
      <Link to='/'>Mahsulot olish</Link>
    </div>
  )
}

export default EmptyCart