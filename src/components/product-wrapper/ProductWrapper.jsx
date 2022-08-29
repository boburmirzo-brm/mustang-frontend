// @ts-nocheck
import React from 'react'
import s from "./ProductWrapper.module.css"
// import {PRODUCTS} from "../../static/static"
import Product from '../product/Product'
import Skeleton from '../product/skeleton/Skeleton'
import fetch from "../../hooks/useFetch"

function ProductWrapper() {
  const {data: {data}, loading} = fetch("/products")
  return (
    <div className={s.product_wrapper}>
      <div className={s.product_container}> 
      {
        data?.map((pro, inx)=> <Product data={pro} key={inx}/>)
      }
      <Skeleton count={5}/>
      </div>
    </div>
  )
}

export default ProductWrapper