import React from 'react'
import s from './Order.module.css'

function Order() {
  return (
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
        <div className={s.order}>
          <div className={s.order_box}>
            <div className={s.user_circle}>
              <h1>AJ</h1>
            </div>
            <div className={s.user_info}>
              <h3>Jurabek Abduhalilov</h3>
              <p>+998901234567</p>
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
                <p className={s.infoText}>O'zbekiston, Namangan vodiysi, To'raqorg'on tumani</p>
              </div>
              <div className={s.order_other_infos}>
                <div className={s.info}>
                  <h3 className={s.mainText}>Mahsulotlar soni:</h3>
                  <p className={s.infoText}>4ta</p>
                </div>
                <div className={s.info}>
                  <h3 className={s.mainText}>Jami narx:</h3>
                  <p className={s.infoText}>550000 sum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order