import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import SubHeader from '../subHeader/SubHeader'
import s from "./Navbar.module.css"

function Navbar() {
  const location = useLocation()
  
  if(location.pathname === "/login"){
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