import React, { useState, useEffect } from 'react'
import s from './OrderBox.module.css'
import { BsTelephone, BsTrash } from 'react-icons/bs'
import { FiX, FiZoomIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ZoomImage from '../zoom-image/ZoomImage'

function OrderBox({show, data}) {
  const {box, setBox} = show;
  const [zoom, setZoom] = useState(false)
  const [zoomUrls, setZoomUrls] = useState([])
  const [order, setOrder] = useState({
    name: 'Jack Varabey',
    tel: '+998901234567',
    address: 'Uzbekistan, Namangan shaxri',
    message: "User didn't wrote a message.",
    orders: [],
  }) 

  useEffect(() => {
    box.length && setOrder(data?.filter(i=> i._id === box)[0])
  }, [box])

  const {name, tel, address, message, orders} = order;

  // console.log(orders);

  return (
    <>
      <div className={`${s.order_box} ${box && s.active}`} onClick={() => setBox('')}><FiX/></div>
      {zoom && <ZoomImage urls={zoomUrls} setZoom={setZoom}/>}
      <div className={s.main}>
        <div className={s.orders}>
          <h1>Mijozning buyurtmalari</h1>
          <div className={s.order_wrapper}>
            {
              orders?.map(({_id, urls, orderType, color, price, quontity, productId, brand}) => <div className={s.order} key={_id}>
              <div className={s.order_main}>
              <div className={s.order_image}>
                <Link to={`/product/${_id}`}>
                  <img src={urls[0]} alt="" />
                </Link>
                <button className={s.zoom_btn} onClick={() => {
                  setZoom(true)
                  setZoomUrls(urls)
                }}>
                  <FiZoomIn/>
                </button>
              </div>
              <div className={s.order_info2}>
                <h3 className={s.order_title}>Tufli</h3>
                <div className={s.order_info1}>
                  <div className={s.top_info}>
                    <p style={{marginRight: '6px'}}>Size: {orderType}</p>
                    <p>Color: {color}</p>
                  </div>
                  <p>Brand: {brand}</p>
                </div>
              </div>
              </div>
              <div className={s.order_extra_info}>
                <h3 className={s.pro_id}>{productId}</h3>
              </div>
              <div className={s.order_main_info}>
                <h4 className={s.order_quontity}>4ta</h4>
                <div className={s.order_price}>
                  <p>{(price * quontity).brm()}sum</p>
                  <p>{price.brm()}sum har {orderType === 'complect' ? 'komplektiga' : 'biriga'}</p>
                </div>
              </div>
            </div>)
            }
          </div>
        </div>
        <div className={s.user}>
          <div className={s.user_header}>
            <h1>Haridor</h1>
          </div>
            <div className={s.user_info}>
              <div className={s.sides}>
                <div className={s.left}>
                  <h3 className={s.mainText}>Mijoz ismi:</h3>
                  <h3 className={s.mainText}>Mijoz telefon raqami:</h3>
                </div>
                <div className={s.right}>
                  <h4 className={s.text}>{name}</h4>
                  <h4 className={s.text}>{tel}</h4>
                </div>
              </div>
              <div className={s.user_extra_info}>
                <p className={s.address_text}>{address}</p>
                <p className={s.user_msg}>{message}</p>
              </div>
            </div>
            <div className={s.order_info}>
              <div className={s.sides}>
                <div className={s.left}>
                  <h3 className={s.mainText}>Mahsulotlar soni:</h3>
                  <h3 className={s.mainText}>Jami narx:</h3>
                </div>
                <div className={s.right}>
                  <p className={s.text}>{orders.length && orders?.reduce((a,b) => a + b.quontity, 0)}ta</p>
                  <p className={s.text}>{orders.length && orders?.reduce((a,b) => a + ( b.price * b.quontity), 0).brm()}sum</p>
                </div>
              </div>
            </div>
            <div className={s.actions}>
              <a href={`tel:+${tel}`} className={[s.btn, s.tel].join(' ')}><BsTelephone/></a>
              <button className={[s.btn, s.del].join(' ')}><BsTrash/></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default OrderBox