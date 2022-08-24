import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import SubHeader from '../subHeader/SubHeader'
import s from "./Navbar.module.css"


function Navbar() {
  const {pathname} = useLocation()
  
  if(pathname === "/login" || pathname.includes("/admin")){
    return <></>
  }
  return (
    <div className={s.navbar}>
       <SubHeader/>
       <Header/>
    </div>
  )
}

export default Navbar