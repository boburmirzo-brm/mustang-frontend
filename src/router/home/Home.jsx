// @ts-nocheck
import React, {useState, useEffect} from 'react'
import Banner from '../../components/banner/Banner'
import ExtraInfo from '../../components/extra-info/ExtraInfo'
import FilterProduct from '../../components/filter-product/FilterProduct'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper'
import s from "./Home.module.css"
import { useSelector, useDispatch } from "react-redux"
import {filterShow} from "../../context/action/action"
import {AiOutlineFilter} from "react-icons/ai"
import Slides from '../../components/slides/Slides'
import axios from '../../api/axios'
import { useParams } from "react-router-dom"


const Home = () => {
  const filterHide = useSelector(state=> state.filterShow)
  const dispatch = useDispatch();
  const [{products}, setData] = useState([])
  const {id} = useParams()
  const [pageCount, setPageCount] = useState(()=> id ? +id : 1)
  const [totalPage, setTotalPage] = useState(0)
  const [filter, setFilter] = useState({
    type: "barchasi",
    season: "barchasi",
    price: {
      from: 0,
      to: 0,
    },
    color: "barchasi",
  });

  const pageSize = 3
  useEffect(()=>{
    axios.get(`/products/page`, {
      method: "GET",
      params: {
        pageSize,
        pageNumber: pageCount,
        filter
      }
    })
    .then(res => {
      setData(res.data.data)
      setTotalPage(res.data.data.btnCount)
    })
    .catch(err => console.log(err))
  },[pageCount, filter])
  // console.log(filter);
  document.title = "Asosiy sahifa";
  return (
    <div>
      <Banner/>
      <h1 className={s.latest_title}>Eng so'ngi qoshilganlar</h1>
      <Slides/>
      <div className={s.home_top}>
          <h1 className={s.title}>Mahsulotlar</h1>
          <button className={filterHide? [s.filter_show, s.active].join(" ") : s.filter_show} onClick={()=> dispatch(filterShow())}><AiOutlineFilter/> <span>Filter</span></button>
      </div>
      <div className={s.main}>
        <FilterProduct 
          filterShadow={filterHide}
          filter={filter}
          setFilter={setFilter}/>
        <ProductWrapper 
          setPageCount={setPageCount} 
          products={products} 
          pageCount={pageCount} 
          totalPage={totalPage} 
          pageSize={pageSize}
          setData={setData}/>
      </div>
      <ExtraInfo/>
    </div>
  )
}

export default Home