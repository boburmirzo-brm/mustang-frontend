import React, {useState} from 'react'
import s from "./EditProduct.module.css"
import {PRODUCTS} from "../../static/static"
import {BsFillTrashFill} from "react-icons/bs"
import {FiEdit, FiX} from "react-icons/fi"
import "./style.css"

function EditProduct() {
  const[data,setData] = useState(PRODUCTS)
  const [updateModal, setUpdateModal] = useState(false)
  const [updateProduct, setUpdateProduct] = useState({
    title: "",
    price: 0,
    desc: "",
    season: "",
    type: "",
    size: "",
    urls:[]
  })

  const updateProducts = (_id) =>{
    setUpdateModal(true)
    setUpdateProduct(PRODUCTS?.filter((item) => item._id === _id)[0])
  }

  const updatePro = (e) =>{
    e.preventDefault()
    setUpdateModal(false)
    setUpdateProduct({
      title: "",
      price: 0,
      desc: "",
      season: "",
      type: "",
      size: "",
      urls:[]
    })
  }

  return (
    <div className={s.editProducts}>
      <div className={s.editTitle}>
        <h1>Mahsulotlarni Taxrirlash</h1>
      </div>
      <div  className={s.pro_wrapper}>
        {
          PRODUCTS?.map(({_id, urls, title, price, stars}) => 
          <div key={_id} className={s.product}>
              <img src={urls[0]} alt="" />
             <div className={s.product_body}>
             <p className={s.product_title}>{title}</p>
              <h3 className={s.product_price}>{price}</h3>
              <div className={s.product_btns}>
             <button  className={s.delete_btn}><BsFillTrashFill/></button>
             <button onClick={() => updateProducts(_id)} className={s.update_btn}><FiEdit/></button>
             </div>
             </div>
          </div>
          )
        }
      </div>
      <div className={updateModal ? "update_modal show_modal" : "update_modal"}>
            <form className={s.updateForm} onSubmit={updatePro} action="">
              <div className="update_form_left">
             <div className={s.update_images}>
             <img  className={s.update_img}  src={updateProduct.urls[0]} alt="" />
              <img  className={s.update_img} src={updateProduct.urls[1]} alt="" />
             </div>
              <label htmlFor="">Title</label>
              <input type="text" 
              value={updateProduct.title}
              onChange={(e) => setUpdateProduct({...updateProduct, title: e.target.value})}
              />
              <br />
              <label htmlFor="">Price</label>
              <input type="text" 
              value={updateProduct.price}
              onChange={(e) => setUpdateProduct({...updateProduct, price: e.target.value})}
              />
              <br />
              <label htmlFor="">Desc</label>
              <input type="text" 
              value={updateProduct.desc}
              onChange={(e) => setUpdateProduct({...updateProduct, desc: e.target.value})}
              />
              <br />
              <label htmlFor="">Hajmi</label>
              <input type="text" 
              value={updateProduct.size}
              onChange={(e) => setUpdateProduct({...updateProduct, size: e.target.value})}
              />
              <br />
              <label htmlFor="">Season</label>
              <input type="text" 
              value={updateProduct.season}
              onChange={(e) => setUpdateProduct({...updateProduct, season: e.target.value})}
              />
              <br />
              <label htmlFor="">Type</label>
              <input type="text" 
              value={updateProduct.type}
              onChange={(e) => setUpdateProduct({...updateProduct, type: e.target.value})}
              />
              </div>
              <br />
              <button className={s.update_modal_btn}>Update</button>
              <button className={s.cancel_modal_btn}>Cancel</button>
            </form>
      </div>
      <div onClick={() => setUpdateModal(false)} className={updateModal ? "shadow show_shadow" : "shadow"}></div>
    </div>
  )
}

export default EditProduct