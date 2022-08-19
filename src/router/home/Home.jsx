// @ts-nocheck
import React from 'react'
import Banner from '../../components/banner/Banner'
import ExtraInfo from '../../components/extra-info/ExtraInfo'
import FilterProduct from '../../components/filter-product/FilterProduct'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper'
import s from "./Home.module.css"

const Home = () => {
  return (
    <div>
      <Banner/>
      <h1 className={s.title}>Mahsulotlar</h1>
      <div className={s.main}>
        <FilterProduct/>
        <ProductWrapper/>
      </div>
      <ExtraInfo/>
    </div>
  )
}

export default Home