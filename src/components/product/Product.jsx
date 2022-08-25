import React from 'react'
import s from "./Product.module.css" 
import {AiFillStar, AiOutlineStar, AiOutlineHeart, AiOutlineEye} from "react-icons/ai"
import {MdOutlineShoppingCart} from "react-icons/md"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {UseProduct} from "../../hooks/UseProducts"
import {UseCart} from "../../hooks/UseCart"
import {ADD_TO_CART, ADD_TO_HEART} from "../../context/action/actionTypes"

function Product({data}) {
    const cart = useSelector(state => state.cart)
    const heart = useSelector(state => state.heart)
    const dispatch = useDispatch()
    // console.log("cart>>", cart);
    // console.log("heart>>", heart);
  return (
    <div className={s.product}>
        <Link to={`/product/${data._id}`}>
            <img src={data.urls[0]} alt="" />
        </Link>
        <div className={s.product_body}>
            <p className={s.product_title}>
                {
                    data.title.length > 50 ? data.title.slice(0,50)+"...":data.title
                }
            </p>
            <h3 className={s.product_price}>{data.price.brm()} so'm</h3>
            <div className={s.product_stars}> 
                {new Array(data.stars).fill("").map((_, inx)=><AiFillStar key={inx}/>)} 
                {new Array(5 - data.stars).fill("").map((_,inx)=><AiOutlineStar key={inx}/>)}
            </div>
            <div className={s.product_btns}>
                <button onClick={()=>UseCart(data, ADD_TO_CART,  cart, dispatch)} className={s.btn_shopping}><MdOutlineShoppingCart/><span>Savatchaga qo'shish</span></button>
                <div className={s.heart_con}>
                    <button onClick={()=>UseProduct(data, ADD_TO_HEART,  heart, dispatch)} className={s.heart}><AiOutlineHeart/></button>
                </div>
                <div className={s.view}>
                    <AiOutlineEye/>
                    <p>78</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Product