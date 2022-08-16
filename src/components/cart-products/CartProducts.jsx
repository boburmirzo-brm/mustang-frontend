import React from 'react'
import s from './CartProducts.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from '../../context/action/actionTypes'

const CartProducts = () => {
    const cart = useSelector(s => s.addToCart)
    const dispatch = useDispatch()

  return (
    <>
      <div className={s.cart_products}>
        {
          cart?.map(({_id, title, price, url, quontity}) => <div key={_id} className={s.product}>
            <div className={s.left_side}>
            <img src={url[0]} alt="" />
            </div>
            <div className={s.right_side}>
            <div className={s.btns}>
              <button 
              disabled={quontity <= 1}
              onClick={()=>dispatch({type: ADD_TO_CART, payload: cart?.map((item, inx) => inx === cart.findIndex(item => item._id === _id) ? {...item, quontity: item.quontity - 1} : item)})}
              >
                -</button>
              <span>{quontity}</span>
              <button 
              onClick={()=>dispatch({type: ADD_TO_CART, payload: cart?.map((item, inx) => inx === cart.findIndex(item => item._id === _id) ? {...item, quontity: item.quontity + 1} : item)})}
              >
                +</button>
            </div>
            <h4>{(price * quontity).brm('int', 0)}</h4>
            <button onClick={()=> dispatch({type: ADD_TO_CART, payload: cart?.filter(item => item._id !== _id)})}>Mahsulotni o'chirish</button>
            </div>
          </div>)
        }       
    </div>
    <div className={s.cart_actions}>
      <h4>{cart.reduce((a,b) => a+(b.price * b.quontity), 0).brm('int', 0)}</h4>
      <button style={{background: '#2f2'}} className={s.btn_buy}>Sotib olmoq</button>
      <button 
      style={{background: '#f22'}}
      className={s.btn_del}
      onClick={() => dispatch({type: ADD_TO_CART, payload: []})}
      >Mahsulotlarni o'chrish</button>
    </div>
    </>
  )
}

export default CartProducts