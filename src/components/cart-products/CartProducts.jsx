import React, { useEffect, useState } from 'react'
import s from './CartProducts.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../context/action/action'
import CartProduct from './CartProduct'
import axios from '../../api/axios'
import { ADD_TO_CART } from '../../context/action/actionTypes'

function CartProducts() {
  const cart = useSelector(s=> s.cart)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    name: '',
    address: '',
    tel: '+998'
  })

  const sendOrders = (orders) => {
    setLoading(true)
    axios.post('/orders', {...user, orders})
  
      .then((res) => { 
        setLoading(false)
        if(res.data.state) {
          dispatch({type: ADD_TO_CART, payload: []})
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className={s.shopping_cart}>
      <div className={s.cart_products}>
        <div className={s.cart_nav}>
          <div className={s.nav_box}>
            <h2>mahsulot</h2>
            <h2>hajm</h2>
          </div>
          <h2>soni</h2>
          <h2>narx</h2>
        </div>
        <div className={s.cart_wrapper}>
          {
            cart?.map(({_id, title, urls, size, color, price, brand, quontity, orderType}) => <CartProduct key={_id} all={{_id, title, urls, size, color, price, brand, quontity, orderType}}/>)
          }
        </div>
      </div>
      <div className={s.cart_actions}>
        <h3>Iltimos bu yerni to'ldiring:</h3>
        <input 
        value={user.name}
        onChange={({target}) => setUser({...user, name: target.value})}
        type="text" 
        className={s.cart_inp} 
        placeholder='Sizning Ismingiz...'
        />
        <input 
        value={user.tel}
        onChange={({target}) => setUser({...user, tel: target.value})}
        type='text' 
        className={s.cart_inp} 
        placeholder='Sizning telefon raqamingiz...'
        />
        <textarea  
        value={user.address}
        onChange={({target}) => setUser({...user, address: target.value})}
        className={s.cart_inp} 
        placeholder='Sizning manzilingiz...'
        />
        <div className={s.total_price}>
          <h3>Jami narx:</h3>
          <p>{cart?.reduce((a,b) => a + (b.price * b.quontity), 0).brm()}</p>
        </div>
        <button 
        className={s.checkout} 
        onClick={() => sendOrders(cart)}
        disabled={loading}
        >{loading ? 'loading...' : 'sotib olish'}</button>
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