import React from 'react'
import s from './CartProducts.module.css'
import { useSelector, useDispatch } from 'react-redux'
import empty_url from '../../assets/nothing.jpg'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiTrash2 } from 'react-icons/fi'
import {ADD_TO_CART} from '../../context/action/actionTypes'
import { removeFromCart } from '../../context/action/action'
import { Link } from 'react-router-dom'

function CartProducts() {
  const cart = useSelector(s=> s.cart)
  const dispatch = useDispatch()

  return (
    <div className={s.shopping_cart}>
      <div className={s.cart_products}>
        <div className={s.cart_nav}>
          <div className={s.nav_box}>
            <h2>mahsulot</h2>
          </div>
          <h2>quontity</h2>
          <h2>narx</h2>
        </div>
        <div className={s.cart_wrapper}>
          {
            cart?.map(({_id, title, urls, size, color, price, brand, quontity, orderType}) => <div key={_id} className={s.cart_product}>
              <div className={s.left_side}>
                <Link to={`/product/${_id}`}>
                  <img src={urls.length ? urls[0] : empty_url} alt="" className={s.cart_image} />
                </Link>
              <div className={s.text}>
                <h3 className={s.cartpro_title}>{title.length > 20 ? title.slice(0,20) + "..." : title}</h3>
                <div className={s.desc}>
                  <div className={s.extra}>
                    <p>Size: {size.replace('-', ' ').split(' ')[0]}</p>
                    <p>Color: {color}</p>
                  </div>
                  <p>Brand: {brand}</p>
                </div>
              </div>
              </div>
              <select 
              className={s.cart_select}
              onChange={({target}) => dispatch({type: ADD_TO_CART, payload: cart?.map(pro => pro._id === _id ? { ...pro, orderType: target.value, quontity: target.value === 'complect' ? +size.replace('-', ' ').split(' ')[1] - +size.replace('-', ' ').split(' ')[0] + 1 : 1 } : pro)})}
              >
                {
                  new Array(+size.replace('-', ' ').split(' ')[1] - +size.replace('-', ' ').split(' ')[0] + 1).fill('').map((_, inx) => <option value={+size.replace('-', ' ').split(' ')[0] + inx} key={inx}>
                    {
                       +size.replace('-', ' ').split(' ')[0] + inx
                    }
                    </option>)
                }
                <option value="complect">Complect</option>
              </select>
              <div className={s.box}>
                <div className={s.price_quontity}>
                  <div className={s.quontity_actions}>
                    <button 
                    disabled={quontity <= 1}
                    className={s.quontity_btn}
                    onClick={() => dispatch({type: ADD_TO_CART, payload: cart?.map(pro=> pro._id === _id ? {...pro, quontity: pro.quontity - (pro.orderType === 'complect' ? +size.replace('-', ' ').split(' ')[1] - +size.replace('-', ' ').split(' ')[0] + 1 : 1 )} : pro )})}
                    >
                      -</button>
                    <p>{quontity}</p>
                    <button
                    className={s.quontity_btn}
                    onClick={() => dispatch({type: ADD_TO_CART, payload: cart?.map(pro=> pro._id === _id ? {...pro, quontity: pro.quontity + (pro.orderType === 'complect' ? +size.replace('-', ' ').split(' ')[1] - +size.replace('-', ' ').split(' ')[0] + 1 : 1 )} : pro )})}
                    >
                      +</button>
                  </div>
                 <div className={s.prices}>
                   <h4>{price * quontity}</h4>
                   <p>{price * (orderType === 'complect' ? (+size.replace('-', ' ').split(' ')[1] - +size.replace('-', ' ').split(' ')[0] + 1) : quontity)} har {orderType === 'complect' ? 'complektga' : 'biri'}</p>
                 </div>
                </div>
                <div className={s.pro_actions}>
                  <div className={s.action_btn}>
                    <AiOutlineHeart/>
                  </div>
                  <div 
                  className={s.action_btn}
                  onClick={() => dispatch(removeFromCart(cart?.filter(pro => pro._id !== _id)))}
                  >
                    <FiTrash2/>
                  </div>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
      <div className={s.cart_actions}>
        <h3>Iltimos bu yerni to'ldiring:</h3>
        <input 
        type="text" 
        className={s.cart_inp} 
        placeholder='Sizning Ismingiz...'
        />
        <input 
        type="text" 
        className={s.cart_inp} 
        />
        <textarea  
        className={s.cart_inp} 
        />
        <div className={s.total_price}>
          <h3>Jami narx:</h3>
          <p>{cart?.reduce((a,b) => a + (b.price * b.quontity), 0)}</p>
        </div>
        <button className={s.checkout}>sotib olish</button>
        <button 
        className={s.del_btn}
        onClick={() => dispatch(removeFromCart([]))}
        >
          Bekor qilish</button>
      </div>
    </div>
  )
}

export default CartProducts