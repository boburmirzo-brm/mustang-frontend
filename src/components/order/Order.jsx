import React, { useState, useEffect } from 'react'
import s from './Order.module.css'
import OrderBox from './OrderBox'
import { AiOutlineEye } from 'react-icons/ai'
import Loader from '../loader/Loader'
import axios from '../../api/axios'
import { useTranslation } from 'react-i18next'
import {auth} from "../../auth/auth"
function Order() {
  const { t } = useTranslation()

  document.title = t('orders.orderNav');
  const [box, setBox] = useState('')
  const [data, setData] = useState([])
  const [skip, setSkip] = useState(0)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    axios.get(`/orders?skip=${skip}`, auth())
         .then((res) => {
            setData([...data, ...res.data.orders])
            setLoading(false)
          })
         .catch((err) => console.log(err))
  }, [data, skip])

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight} = e.target

    if (offsetHeight + scrollTop === scrollHeight) {
      setSkip(data.length)
    }
  }

  return (
    <>
      <div className={s.order_container}>
      <div className={s.order_header}>
        <h1>{t('orders.orderNav')}</h1>
      </div>
      <div 
      className={s.order_wrapper}
      onScroll={handleScroll}
      >
        {
          [...data]?.map(({_id, tel, name, address, orders}) => <div key={_id} className={s.order}>
          <div  className={s.order_box}>
            <div className={s.user_circle}>
              <h1>{name.slice(0, 1)}</h1>
            </div>
            <div className={s.user_info}>
              <h3 className={s.mainText}>{name}</h3>
              <p>{tel}</p>
            </div>
            <div className={s.order_info}>
              <div className={s.order_time}>
                <h3 className={s.mainText}>{t('orders.order.time')}</h3>
                <p className={s.infoText}>12.12.2012 00:00</p>
              </div>
            </div>
            <div className={s.order_extra}>
              <div className={s.user_address}>
                <h3 className={s.mainText}>{t('orders.order.location')}</h3>
                <p className={s.infoText}>{address}</p>
              </div>
              <div className={s.order_other_infos}>
                <div className={s.info}>
                  <h3 className={s.mainText}>{t('orders.order.orderBox.aboutOrder.quontity')}</h3>
                  <p className={s.infoText}>{orders.length}ta</p>
                </div>
                <div className={s.info}>
                  <h3 className={s.mainText}>{t('orders.order.totalPrice')}</h3>
                  <p className={s.infoText}>{orders?.reduce((a,b) => a+b.price, 0).brm()} sum</p>
                </div>
                <div className={s.info}>
                  <h3 className={s.mainText}>{t('orders.order.time')}:</h3>
                  <p className={s.infoText}>12.12.2222</p>
                </div>
              </div>
            </div>
          </div>
          <button className={s.order_show} onClick={() => setBox(_id)}><AiOutlineEye/></button>
        </div>)
        }
        { loading && <Loader config={{size: 50}}/> }
      </div>
    </div>
    <OrderBox show={{box, setBox}} data={data}/>
    </>
  )
}

export default Order