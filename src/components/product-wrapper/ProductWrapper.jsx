import React from 'react'
import s from "./ProductWrapper.module.css"
import {PRODUCTS} from "../../static/static"
import Product from '../product/Product'
import Skeleton from '../product/skeleton/Skeleton'

function ProductWrapper() {
  return (
    <div className={s.product_wrapper}>
      <div className={s.product_container}> 
      {
        PRODUCTS?.map((pro, inx)=> <Product data={pro} key={inx}/>)
      }
      <Skeleton count={5}/>

      </div>
    
    </div>
  )
}

export default ProductWrapper