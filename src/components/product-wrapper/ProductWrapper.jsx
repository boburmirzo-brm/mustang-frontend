// @ts-nocheck
import React from 'react'
import s from "./ProductWrapper.module.css"
// import {PRODUCTS} from "../../static/static"
import Product from '../product/Product'
import Skeleton from '../product/skeleton/Skeleton'
import Pagination from '../pagination/Pagination'


function ProductWrapper({totalPage, setData, pageCount, setPageCount, products, pageSize}) {
  return (
    <div className={s.product_wrapper}>
      <div className={s.product_container}> 
      {
        !products && <Skeleton count={pageSize}/>
      }
      {
        products?.map((pro, inx)=> <Product data={pro} key={inx}/>)
      }
      </div>
      <Pagination setPageCount={setPageCount} pageCount={pageCount} totalPage={totalPage} setData={setData}/>
    </div>
  )
}

export default ProductWrapper