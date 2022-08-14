import React from 'react'
import s from "./Product.module.css" 
import {AiFillStar, AiOutlineStar, AiOutlineHeart, AiOutlineEye} from "react-icons/ai"
import {MdOutlineShoppingCart} from "react-icons/md"
import {Link} from "react-router-dom"

function Product({data}) {
    console.log(data);
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
                {new Array(data.stars).fill(<AiFillStar/>)} 
                {new Array(5 - data.stars).fill(<AiOutlineStar/>)}
            </div>
            <div className={s.product_btns}>
                <button className={s.btn_shopping}><MdOutlineShoppingCart/>Add to Cart</button>
                <div className={s.heart_con}>
                    <button className={s.heart}><AiOutlineHeart/></button>
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