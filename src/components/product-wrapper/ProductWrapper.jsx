import React from 'react'
import s from "./ProductWrapper.module.css"
import PRODUCTS from "../../static/static"
import Product from '../product/Product'

function ProductWrapper() {
  return (
    <div className={s.product_wrapper}>
      <div className={s.product_container}> 
      {
        PRODUCTS?.map((pro, inx)=> <Product data={pro} key={inx}/>)
      }
      </div>
    
    </div>
  )
}

export default ProductWrapper