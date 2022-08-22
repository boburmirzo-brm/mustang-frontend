import React from 'react'
import s from "./Footer.module.css"
import {FaFacebook, FaInstagram, FaTwitter,FaTelegram} from "react-icons/fa"
import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  
  if(location.pathname === "/login" || location.pathname === "/admin"){
    return <></>
  }
  return (
    <div className={s.footer}>
      <ul className={s.footer_collection}>
        <li>Bosh Sahifa</li>
        <li>Mahsulotlar</li>
        <li>Biz haqimizda</li>
      </ul>
      <div className={s.footer_items}>
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
        <FaTelegram/>
      </div>
    </div>
  )
}

export default Footer