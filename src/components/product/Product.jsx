import React, {useEffect, useState} from 'react'
import s from "./Product.module.css" 
import {AiFillStar, AiOutlineStar, AiOutlineHeart, AiFillHeart, AiOutlineEye} from "react-icons/ai"
import {MdOutlineShoppingCart} from "react-icons/md"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {UseProduct} from "../../hooks/UseProducts"
import {UseCart} from "../../hooks/UseCart"
import {ADD_TO_CART, ADD_TO_HEART} from "../../context/action/actionTypes"
import ZoomImage from '../zoom-image/ZoomImage'
import { removeFromCart } from '../../context/action/action'
import {useTranslation} from "react-i18next"
import {BiRuble} from "react-icons/bi"

function Product({data}) {
    const cart = useSelector(state => state.cart)
    let thisPro = cart?.filter(i=> i._id === data._id)[0]
    const heart = useSelector(state => state.heart)
    const dispatch = useDispatch()
    const [zoom, setZoom] = useState(null)
    const {t} = useTranslation()
    // console.log("cart>>", cart);
    // console.log("heart>>", heart);

    const [quontityAction, setQuontityAction] = useState(false)
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
    }, [data._id, heart])

    useEffect(() => {
        return setQuontityAction( cart?.filter(i => i._id === data._id).length ? true : false )
    }, [cart, data._id])

    const addToCart = () => {
        setQuontityAction(true)
        return UseCart(data, ADD_TO_CART,  cart, dispatch)
    }
    const removeQuontity = ()=>{
        if(thisPro.quontity <= 1){
            setQuontityAction(false)
            return dispatch(removeFromCart(cart?.filter(pro => pro._id !== thisPro._id)))
        }
        dispatch({type: ADD_TO_CART, payload: cart?.map((pro) => pro._id === thisPro._id ? {...pro, quontity: pro.quontity - 1} : pro)})
    }
  return (
    <div className={s.product}>
        <Link to={`/products/${data._id}`}>
            <img src={data.urls[0]} alt="" />
        </Link>
        <div className={s.product_body}>
            <p className={s.product_title}>
                {
                    data.title.length > 40 ? data.title.slice(0,40)+"...":data.title
                }
            </p>
            <h3 className={s.product_price}>{t("l")==="ru" ? Math.round(data.price / 180).brm() : data.price.brm() + " so'm" } {t("l")==="ru"&&<BiRuble/>} </h3>
            <div className={s.product_stars}> 
                {new Array(data.stars).fill("").map((_, inx)=><AiFillStar key={inx}/>)} 
                {new Array(5 - data.stars).fill("").map((_,inx)=><AiOutlineStar key={inx}/>)}
            </div>
            <div className={s.product_btns}>
                {!quontityAction && <button onClick={addToCart} className={s.btn_shopping}><MdOutlineShoppingCart/><span>Savatchaga qo'shish</span></button>}
                    { 
                        quontityAction && 
                        <div className={s.quontity_actions}>
                            <button 
                            className={s.quontity_action_btn}
                            // disabled={thisPro.quontity <= 1}
                            onClick={removeQuontity}
                            >-</button>
                            <p>{thisPro?.quontity}</p>
                            <button 
                            className={s.quontity_action_btn}
                            onClick={() => UseCart(data, ADD_TO_CART,  cart, dispatch)}
                            >+</button>
                        </div> 
                    }
                <div className={s.heart_con}>
                    <button onClick={AddToHeart}  className={`${s.heart} ${liked && s.active}`}>{liked ? <AiFillHeart/>:<AiOutlineHeart/>}</button>
                </div>
                <div className={s.view}>
                    <AiOutlineEye/>
                    <p>{data.view}</p>
                </div>
                {zoom && <ZoomImage urls={zoom} setZoom={setZoom}/> } 
            </div>
        </div>
    </div>
  )
}
export default Product