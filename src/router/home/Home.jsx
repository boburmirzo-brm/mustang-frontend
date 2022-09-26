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
import { useParams, useHistory, useLocation } from "react-router-dom"
import { useTranslation } from 'react-i18next'


const Home = () => {
  const {t} = useTranslation()
  const filterHide = useSelector(state=> state.filterShow)
  const dispatch = useDispatch();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  const [pageCount, setPageCount] = useState(()=> id ? +id : 1)
  const [totalPage, setTotalPage] = useState(0)
  const history = useHistory()
  const [filter, setFilter] = useState({
    type: "barchasi",
    season: "barchasi",
    price: {
      from: 0,
      to: 1_000_000,
    },
    color: "barchasi",
  });

  useEffect(()=>{
    history.push("/page/1")
    setPageCount(1)
  },[filter])
  const pageSize = 8
  useEffect(()=>{
    const cleanUp = ()=>{
      setLoading(true)

      axios.get(`/products/page`, {
        method: "GET",
        params: {
          pageSize,
          pageNumber: pageCount,
          filter
        }
      })
      .then(res => {
        setData(res.data.data.products)
        setTotalPage(res.data.data.btnCount)
        setLoading(false)
      })
      .catch(err => setLoading(false))
    }
    return cleanUp()
  },[pageCount, filter])
  // console.log(filter);
  document.title = "Asosiy sahifa";
  return (
    <div>
      <Banner/>
      <h1 className={s.latest_title}>{t("bannerProducts")}</h1>
      <Slides/>
      <div className={s.home_top}>
          <h1 className={s.title}>{t("products")}</h1>
          <button className={filterHide? [s.filter_show, s.active].join(" ") : s.filter_show} onClick={()=> dispatch(filterShow())}><AiOutlineFilter/> <span>Filter</span></button>
      </div>
      <div className={s.main}>
        <FilterProduct 
          filterShadow={filterHide}
          filter={filter}
          setData={setData}
          setFilter={setFilter}/>
        <ProductWrapper 
          setPageCount={setPageCount} 
          products={data} 
          pageCount={pageCount} 
          totalPage={totalPage} 
          pageSize={pageSize}
          loading={loading}
          setData={setData}/>
      </div>
      <ExtraInfo/>
    </div>
  )
}

export default Home