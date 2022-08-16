import React,{useState} from 'react'
import Product from '../../components/product/Product'
import {PRODUCTS} from "../../static/static"
import {AiFillStar,AiOutlineStar } from "react-icons/ai"
import {TiDeleteOutline} from "react-icons/ti"
import s from "./Like.module.css"
import { Link } from 'react-router-dom'

const Like = () => {
    const [checkedImgId,setCheckedImgId] = useState(0)
    const[checkedImg,setCheckedImg] = useState("")
  return (
    <div className={s.like_container}>
        <div className={s.like_content}>
        {
            PRODUCTS?.map((pro,inx)=>
            <div className={s.like_product} key={inx}>
                <div className={s.delete}>
                    <TiDeleteOutline/>
                </div>
                <div  className={s.imgs_container}>
                    <div className={s.main_img_container}>
                        <Link to={`product/${pro._id}`}>
                        <img src={
                            pro._id===checkedImgId ? checkedImg : pro.urls[0]
                        } alt="" /> 
                        </Link>
                   
                    </div>
                    <div className={s.all_imgs_container}>
                        {
                            pro?.urls?.map((img,inx) =>
                            <div className={`${s.all_imgs_child} ${checkedImg===img && checkedImgId === pro._id ? s.img_border:""}`} key={inx}>
                                <img 
                                onClick={ ()=>{
                                    setCheckedImgId(pro._id)
                                    setCheckedImg(img)
                                }
                                }
                                src={img} alt="" />
                            </div>
                            )
                        }
                     </div>
                 </div>
                 <div className={s.info}>
                    <div className={s.title}>
                        <h1>{pro.title}</h1>
                    </div>
                    <div className={s.price}>
                         <div className={s.product_stars}> 
                              {new Array(pro.stars).fill("").map((_, inx)=><AiFillStar key={inx}/>)} 
                              {new Array(5 - pro.stars).fill("").map((_,inx)=><AiOutlineStar key={inx}/>)}
                          </div>
                          <h1>{pro.price} $</h1>
                    </div>
                    <div className={s.info_desc}>
                        <div className={s.desc}>
                            <p>
                                {
                                    pro.desc
                                }
                            </p>
                        </div>
                        <div className={s.btns}>
                                <button>Add to Cart</button>
                        </div>

                    </div>
                 </div>

            </div>)
        }
        </div>
    </div>
  )
}

export default Like