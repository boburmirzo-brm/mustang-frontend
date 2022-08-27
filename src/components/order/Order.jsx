import React, { useState } from 'react'
import s from './Order.module.css'
import OrderBox from './OrderBox'
import { AiOutlineEye } from 'react-icons/ai'
import axios from '../../api/axios'
import { useEffect } from 'react'

function Order() {
  const [box, setBox] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/orders')
      .then((res) => setData(res.data.orders))
      .catch((err) => console.log(err))
  }, [])

  console.log(data);
  return (
    <>
      <div className={s.order_container}>
      <div className={s.order_header}>
        <h1>Buyurtmalar</h1>
        <select className={s.order_sort}>
          <option value="all">Hammasi</option>
          <option value="true">Aloqaga chiqilganlari</option>
          <option value="false">Aloqaga chiqilmaganlari</option>
        </select>
      </div>
      <div className={s.order_wrapper}>
        {
          data?.map(({_id, tel, name, address, orders}) => <div className={s.order}>
          <div key={_id} className={s.order_box}>
            <div className={s.user_circle}>
              <h1>{name.slice(0, 1)}</h1>
            </div>
            <div className={s.user_info}>
              <h3 className={s.mainText}>{name}</h3>
              <p>{tel}</p>
            </div>
            <div className={s.order_info}>
              <div className={`${s.order_contact} ${true && s.active}`}>
                <p>Aloqaga chiqil{!true && "ma"}gan</p>
              </div>
              <div className={s.order_time}>
                <h3 className={s.mainText}>Buyurtma vaqti</h3>
                <p className={s.infoText}>12.12.2012 00:00</p>
              </div>
            </div>
            <div className={s.order_extra}>
              <div className={s.user_address}>
                <h3 className={s.mainText}>Joylashuv:</h3>
                <p className={s.infoText}>{address}</p>
              </div>
              <div className={s.order_other_infos}>
                <div className={s.info}>
                  <h3 className={s.mainText}>Mahsulotlar soni:</h3>
                  <p className={s.infoText}>{orders.lenght}ta</p>
                </div>
                <div className={s.info}>
                  <h3 className={s.mainText}>Jami narx:</h3>
                  <p className={s.infoText}>{orders?.reduce((a,b) => a+b.price, 0)} sum</p>
                </div>
              </div>
            </div>
          </div>
          <button className={s.order_show} onClick={() => setBox(bool => !bool)}><AiOutlineEye/></button>
        </div>)
        }
      </div>
    </div>
    <OrderBox show={{box, setBox}}/>
    </>
  )
}

export default Order