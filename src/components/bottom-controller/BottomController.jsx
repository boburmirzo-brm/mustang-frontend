import React, {useEffect} from 'react'
import s from "./BottomController.module.css"
import {NavLink} from "react-router-dom"
import {bottomData} from "../../static/static"
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {filterShow, filterHide} from "../../context/action/action"
import {AiOutlineFilter, AiFillFilter} from "react-icons/ai" 

function BottomController() {
    const {pathname} = useLocation()
    const cart = useSelector(state=>state.cart)
    const filter = useSelector(state=>state.filterShow)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(filterHide())
    }, [pathname])
    if( pathname === "/login" || pathname.includes("/admin") ){
        return <></>
    }
    return (
    <div className={s.bottom_controller}>
        <div className={s.bottom_container}>
            {
                bottomData?.map(({id, title, icon, iconFill ,route})=> <NavLink 
                key={id} 
                onClick={()=> dispatch(filterHide())}
                className={s.bottom_link} 
                to={route}>
                 {pathname === route ? iconFill : icon }
                 {route === "/cart" ? <span>{cart.length}</span>: <></>}
                <p>{title}</p>
            </NavLink>)
            }
            <a 
                onClick={()=> (pathname === "/" || pathname.includes("/page")) && dispatch(filterShow())}
                className={(pathname === "/" || pathname.includes("/page"))? s.bottom_link : [s.bottom_link, s.bottom_filter].join(" ")} 
                >
                {filter ? <AiFillFilter/>:<AiOutlineFilter/>}
                <p>Filter</p>
            </a>
        </div>
    </div>
  )
}

export default BottomController