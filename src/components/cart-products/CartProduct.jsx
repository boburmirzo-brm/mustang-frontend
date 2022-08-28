import React, {useEffect, useState} from 'react'
import s from './CartProducts.module.css'
import empty_url from '../../assets/nothing.jpg'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiTrash2 } from 'react-icons/fi'
import {ADD_TO_CART} from '../../context/action/actionTypes'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../context/action/action'
import {UseProduct} from "../../hooks/UseProducts"
import {ADD_TO_HEART} from "../../context/action/actionTypes"

function CartProduct({all}) {
    const {cart, heart} = useSelector(s=>s)
    const dispatch = useDispatch()

    const {_id, title, urls, size, color, price, brand, quontity, orderType} = all;

    const [liked, setLiked] =  useState(false)

    const AddToHeart = () => {
        const pro = heart?.filter(item => item._id === _id)

        if(!pro.length) {
            setLiked(true)
            UseProduct(all, ADD_TO_HEART, heart, dispatch)
        } else {
            let newData = heart?.filter(item => item._id !== _id)

            setLiked(false)
            dispatch({type: ADD_TO_HEART, payload: newData})
        }

        return;
    }

    useEffect(() => {
        const pro = heart?.filter(item => item._id === _id)

        if(pro.length) {
            setLiked(true)
        } else {
            setLiked(false)
        }

        return;
    }, [])
  return (
    <div key={_id} className={s.cart_product}>
              <div className={s.left_side}>
                  <img src={urls.length ? urls[0] : empty_url} alt="" className={s.cart_image} />
              <div className={s.text}>
                <h3 className={s.cartpro_title}>{title.length > 20 ? title.slice(0,20) + "..." : title}</h3>
                <div className={s.desc}>
                  <div className={s.extra}>
                    <p>Size: {orderType === 'complect' ? size : orderType}</p>
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
                <option value="complect">Complect ({size})</option>
              </select>
              <div className={s.box}>
                <div className={s.price_quontity}>
                  <div className={s.quontity_actions}>
                    <button 
                    disabled={quontity <= (orderType === 'complect' ? 5 : 1)}
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
                   <h4>{(price * quontity).brm()}</h4>
                   <p>{(price * (orderType === 'complect' ? (+size.replace('-', ' ').split(' ')[1] - +size.replace('-', ' ').split(' ')[0] + 1) : 1)).brm()} har {orderType === 'complect' ? 'complektga' : 'biri'}</p>
                 </div>
                </div>
                <div className={s.pro_actions}>
                  <div onClick={AddToHeart} className={`${s.action_btn} ${liked && s.liked}`}>
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
            </div>
  )
}

export default CartProduct