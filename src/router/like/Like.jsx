// @ts-nocheck
import React  from 'react'
import {PRODUCTS} from "../../static/static"
import {AiFillStar,AiOutlineStar } from "react-icons/ai"
import {TiDeleteOutline} from "react-icons/ti"
import {BsEyeFill,BsDot} from "react-icons/bs"
import {MdColorLens } from "react-icons/md"
import {CgSize } from "react-icons/cg"
import s from "./Like.module.css"
import { Link } from 'react-router-dom'
import season from "../../assets/season.png"

const Like = () => {
    
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
                             pro.urls[0]
                        } alt="" /> 
                        </Link>
                   
                    </div>
                   
                 </div>
                 <div className={s.info}>
                    <div className={s.info_left}>
                        <h1 className={s.title}>{pro.title}</h1>
                        <div className={s.product_stars}> 
                            {new Array(pro.stars).fill("").map((_, inx)=><AiFillStar key={inx}/>)} 
                            {new Array(5 - pro.stars).fill("").map((_,inx)=><AiOutlineStar key={inx}/>)}
                        </div>
                        <div className={s.produc_types}>
                             <BsEyeFill/>    <p>{pro.view}</p>
                             <MdColorLens /> <p>{pro.color}</p>
                             <BsDot />       <p> {pro.type}</p>
                             <CgSize />      <p> { pro.size}</p>
                             <div className={s.season}>
                                <img src={season} alt="" />
                                <p>{pro.season}</p>
                             </div>

                        </div>
                        <div className={s.desc_conteiner}>
                            <p className={s.desc} > {pro.desc}</p>
                        </div>
                    </div>
                    <div className={s.info_right}>
                        <h1 className={s.price}><span>$</span>{pro.price.brm()}</h1>
                        <div className={s.brand}>
                        {/* <span>brand:</span> */}
                            <h1>{pro.brand}</h1></div>

                        <Link to={`product/${pro._id}`}><button className={s.btn_view}>View all Details</button></Link>
                        <button className={s.btn_add_to_card}>Add to Cart</button>
                    </div>
                 </div>

            </div>)
        }
        </div>
    </div>
  )
}

export default Like