import React, {useEffect, useState} from 'react'
import s from "./Product.module.css" 
import {AiFillStar, AiOutlineStar, AiOutlineHeart, AiOutlineEye} from "react-icons/ai"
import {MdOutlineShoppingCart} from "react-icons/md"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {UseProduct} from "../../hooks/UseProducts"
import {UseCart} from "../../hooks/UseCart"
import {ADD_TO_CART, ADD_TO_HEART} from "../../context/action/actionTypes"
import ZoomImage from '../zoom-image/ZoomImage'

function Product({data}) {
    const cart = useSelector(state => state.cart)
    const heart = useSelector(state => state.heart)
    const dispatch = useDispatch()
    const [zoom, setZoom] = useState(null)
    // console.log("cart>>", cart);
    // console.log("heart>>", heart);

    const [liked, setLiked] =  useState(false)

    const AddToHeart = () => {
        const pro = heart?.filter(item => item._id === data._id)

        if(!pro.length) {
            setLiked(true)
            UseProduct(data, ADD_TO_HEART, heart, dispatch)
        } else {
            let newData = heart?.filter(item => item._id !== data._id)

            setLiked(false)
            dispatch({type: ADD_TO_HEART, payload: newData})
        }

        return;
    }

    useEffect(() => {
        const pro = heart?.filter(item => item._id === data._id)

        if(pro.length) {
            setLiked(true)
        } else {
            setLiked(false)
        }

        return;
    }, [])

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
                    <button onClick={AddToHeart}  className={`${s.heart} ${liked && s.active}`}><AiOutlineHeart/></button>
                </div>
                {/* <button onClick={()=> setZoom(data.urls)}>view</button> */}
                <div className={s.view}>
                    <AiOutlineEye/>
                    <p>78</p>
                </div>
                {zoom && <ZoomImage urls={zoom} setZoom={setZoom}/> } 
            </div>
        </div>
    </div>
  )
}
export default Product