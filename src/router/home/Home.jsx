// @ts-nocheck
import React, { useEffect} from 'react'
import Banner from '../../components/banner/Banner'
import ExtraInfo from '../../components/extra-info/ExtraInfo'
import FilterProduct from '../../components/filter-product/FilterProduct'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper'
import s from "./Home.module.css"
import { useSelector, useDispatch } from "react-redux"
import {filterShow} from "../../context/action/action"
import {AiOutlineFilter} from "react-icons/ai"

const Home = () => {
  const filter = useSelector(state=> state.filterShow)
  const dispatch = useDispatch()

  return (
    <div>
      <Banner/>
     <div className={s.home_top}>
        <h1 className={s.title}>Mahsulotlar</h1>
        <button className={filter? [s.filter_show, s.active].join(" ") : s.filter_show} onClick={()=> dispatch(filterShow())}><AiOutlineFilter/> <span>Filter</span></button>
     </div>
      <div className={s.main}>
        <FilterProduct filterShow={filter}/>
        <ProductWrapper/>
      </div>
      <ExtraInfo/>
    </div>
  )
}

export default Home