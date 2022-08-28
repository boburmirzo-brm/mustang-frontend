import React from 'react'
import s from './OrderBox.module.css'
import { BsTelephone, BsTrash } from 'react-icons/bs'

function OrderBox({show}) {
  const {box, setBox} = show
  return (
    <div className={`${s.order_box} ${box && s.active}`} onClick={() => setBox(false)}>
        <div className={s.main}>
            <div className={s.orders}>
                <div className={s.left_side}></div>
                <div className={s.right_side}>
                  <div className={s.product}>
                    <img src="" alt="" />
                    <div className={s.product_info}>
                      <div className={s.main_info}>
                        <h2>Title</h2>
                        <div className={s.extra}>
                          <div className={s.extra_info}>
                            <p>Size: 40</p>
                            <p>Rangi: Oq</p>
                          </div>
                          <p>Brend: Mustang</p>
                        </div>
                      </div>
                      <div className={s.other_info}>
                      <h3>Narxi: 13000sum</h3>
                      <h3>Quontity: 4</h3>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className={s.order_actions}>
                <button className={[s.action_btn, s.del].join(' ')}><BsTrash/> Buyurtmani o'chirish</button>
                <button className={[s.action_btn, s.tel].join(' ')}><BsTelephone/> +998 90 123 45 67</button>
            </div>
        </div>
    </div>
  )
}

export default OrderBox