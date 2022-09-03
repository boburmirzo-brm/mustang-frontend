// @ts-nocheck
import React from 'react'
import s from "./ProductWrapper.module.css"
// import {PRODUCTS} from "../../static/static"
import Product from '../product/Product'
import Skeleton from '../product/skeleton/Skeleton'
import Pagination from '../pagination/Pagination'
import {TbMoodSad} from "react-icons/tb"


function ProductWrapper({totalPage, setData, pageCount, setPageCount, products, pageSize, loading}) {
  return (
    <div className={s.product_wrapper}>
      <div className={s.product_container}> 
      {
        loading && <Skeleton count={pageSize}/>
      }
      {
        (!products.length && !loading) && <div className={s.empty}><TbMoodSad/> <p>Hech narsa topilmadi</p></div>
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