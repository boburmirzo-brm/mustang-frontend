import React, {useState} from 'react'
import s from "./EditProduct.module.css"
import {createProduct, PRODUCTS} from "../../static/static"
import {BsFillTrashFill} from "react-icons/bs"
import {FiEdit, FiX} from "react-icons/fi"
import {filterData} from "../../static/static"
import { ToastContainer, toast } from "react-toastify";
import "./style.css"
import useFetch from '../../hooks/useFetch'
import axios from "../../api/axios"
import { useEffect } from 'react'
import { auth } from '../../auth/auth'

function EditProduct() {
  //const [data, setData] = useState([])
  const [realTime, setRealTime] = useState(false)
  const {data,loading} = useFetch("/products", realTime, true)
  const [updateModal, setUpdateModal] = useState(false)
  const [state,setState] = useState(false)
  const [updateProductState, setUpdateProductState] = useState(null)

  // console.log(data);

  const [updateProduct, setUpdateProduct] = useState({
    title: "",
    price: 0,
    desc: "",
    season: "",
    type: "",
    color:"",
    stars:0,
    view:0,
    size: "",
    urls:[],
    productId:"",
    brand:"",
  })

  //  useEffect(() =>{
  //     axios.get(`/products`)
  //       .then(res => setData(res.data))
  //       .catch(err => console.log(err))
  //  }, [updateProduct])
   

  const updateProducts = (_id) =>{
    setUpdateModal(true)
    setUpdateProduct(data.data?.filter((item) => item._id === _id)[0])
  }

  // console.log(updateProduct);

  const updatePro = (e) =>{
    e.preventDefault()
    setRealTime(true)
    axios.put(`/products/${updateProduct._id}`, updateProduct,auth())
      .then(res => setRealTime(false))
      .catch(err => console.log(err))
    setUpdateModal(false)
  }


  return (
    <div className={s.editProducts}>
      <div className={s.editTitle}>
        <h1>Mahsulotlarni Taxrirlash</h1>
      </div>
      <div  className={s.pro_wrapper}>
        {
          data.data?.map(({_id, urls, title, price, stars}, inx) => 
          <div key={inx} className={s.product}>
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
      <div className={updateModal ? `${s.update_modal} ${s.show_modal}` : s.update_modal}>
            <form className={s.updateForm} onSubmit={updatePro} action="">
              <div className={s.update_form_left}>
             <div className={s.update_images}>
             <img  className={s.update_img}  src={updateProduct.urls[0]} alt="" />
              <img  className={s.update_img} src={updateProduct.urls[1]} alt="" />
             </div>
              <label htmlFor="">Title</label>
              <input type="text" 
              value={updateProduct.title}
              onChange={(e) => setUpdateProduct({...updateProduct, title: e.target.value})}
              />
             
              <label htmlFor="">Price</label>
              <input type="number" 
              value={updateProduct.price}
              onChange={(e) => setUpdateProduct({...updateProduct, price: e.target.value})}
              />
             
              <label htmlFor="">Desc</label>
              <input type="text" 
              value={updateProduct.desc}
              onChange={(e) => setUpdateProduct({...updateProduct, desc: e.target.value})}
              />
           
              <label htmlFor="">Hajmi</label>
              <input  minLength={4} maxLength={5} type="text" 
              value={updateProduct.size.trim().replace(":","-").replace(".", "-").replace(",", "-")}
              onChange={(e) => setUpdateProduct({...updateProduct, size: e.target.value})}
              />

              <label htmlFor="">Rangi</label>
              <select value={updateProduct.color} onChange={(e)=> setUpdateProduct({...updateProduct, color: e.target.value})} className={s.updateSelect}>
                <option value="">Tanlang</option>
              {
                createProduct.color?.map((i, inx)=><option key={inx} value={i}>{i}</option>)
              }
              </select>

              <label htmlFor="">Yulduzlar</label>
              <select  value={updateProduct.stars} onChange={(e)=> setUpdateProduct({...updateProduct, stars: e.target.value})} className={s.updateSelect}>
                <option value="">Tanlang</option>
              {
                createProduct.stars?.map((i, inx)=><option key={inx} value={i}>{i}</option>)
              }
              </select>
              

              <label htmlFor="">Ko'rilganlar</label>
              <input   type="number" 
              value={updateProduct.view}
              onChange={(e) => setUpdateProduct({...updateProduct, view: e.target.value})}
              />

              <label htmlFor="">ID</label>
              <input   type="text" 
              value={updateProduct.productId}
              onChange={(e) => setUpdateProduct({...updateProduct, productId: e.target.value})}
              />

              <label htmlFor="">Marka</label>
              <input   type="text" 
              value={updateProduct.brand}
              onChange={(e) => setUpdateProduct({...updateProduct, brand: e.target.value})}
              />

              <label htmlFor="">Season</label>
              <select  value={updateProduct.season} onChange={(e)=> setUpdateProduct({...updateProduct, season: e.target.value})} className={s.updateSelect}>
                <option value="">Tanlang</option>
              {
                filterData.season?.map((i, inx)=><option key={inx} value={i}>{i}</option>)
              }
              </select>

              <label  htmlFor="">Type</label>
              <select  value={updateProduct.type} onChange={(e)=> setUpdateProduct({...updateProduct, type: e.target.value})} className={s.updateSelect}>
                <option value="">Tanlang</option>
              {
                filterData.type?.map((i, inx)=><option key={inx} value={i}>{i}</option>)
              }
              </select>
              </div>
              

              <button className={s.update_modal_btn}>Update</button>
              <button className={s.cancel_modal_btn}>Cancel</button>
            </form>
      </div>
      <div onClick={() => setUpdateModal(false)} className={updateModal ? `${s.shadow} ${s.show_shadow}` : s.shadow}></div>
    </div>
  )
}

export default EditProduct