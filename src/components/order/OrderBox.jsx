import React, { useState, useEffect } from 'react'
import s from './OrderBox.module.css'
import { BsTelephone, BsTrash } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'

function OrderBox({show, data}) {
  const {box, setBox} = show;
  const [order, setOrder] = useState({
    name: '',
    tel: '',
    address: '',
    message: "User didn't wrote a message.",
    orders: [],
  }) 

  useEffect(() => {
    box.length && setOrder(data?.filter(i=> i._id === box)[0])
  }, [box])

  const {name, tel, address, message, orders} = order;

  return (
    <>
      <div className={`${s.order_box} ${box && s.active}`} onClick={() => setBox('')}><FiX/></div>
      <div className={s.main}>
        <div className={s.orders}>
          <h2>Mijozning buyurtmalari</h2>
          <div className={s.order_wrapper}>
            {
              orders?.map(({_id}) => <div key={_id} className={s.order}></div>)
            }
          </div>
        </div>
        <div className={s.user}>
          <div className={s.user_info}>
            <div className={s.circle}>J</div>
            <h2>{name}</h2>
            <p className={s.tel}>+{tel}</p>
            <h4>{address}</h4>
            <p className={s.msg}>{message}</p>
          </div>
          <div className={s.orders_info}>
            <div className={[s.left, s.side].join(' ')}>
              <ul>
                <li>Mahsulotlar soni:</li>
                <li>Jami narx:</li>
              </ul>
            </div>
            <div className={[s.right, s.side].join(' ')}>
              <ul>
                <li>{orders.length && orders.reduce((a,b)=>a+b.quontity, 0)}ta</li>
                <li>{orders.length && orders.reduce((a,b)=>a+(b.price*b.quonity))}sum</li>
              </ul>
            </div>
          </div>
            <div className={s.order_actions}>
              <button className={[s.btn, s.del].join(' ')}><BsTrash/></button>
              <button className={[s.btn, s.tel].join(' ')}><BsTelephone/></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default OrderBox