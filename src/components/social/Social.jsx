import React, { useState } from 'react'
import s from "./Social.module.css"
import { AiOutlinePhone, AiOutlineInstagram } from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa"
import { IoMdChatboxes  } from "react-icons/io"
import { IoClose  } from "react-icons/io5"
import { useLocation } from "react-router-dom"

function Social() {
    const {pathname} = useLocation()
    const [show, setShow] = useState(false)

    if(pathname === "/login" || pathname.includes("/admin")){
        return <></>
    }
  return (
    <div className={s.social}>
        <div className={show ? `${s.social_content} ${s.show}` : s.social_content}>
            <a href='https://www.instagram.com/boburmirzo_brm' className={s.social_item}><AiOutlineInstagram/></a>
            <a href='https://t.me/boburmirzo68' className={s.social_item}><FaTelegramPlane/></a>
            <a href='tel:+998 91 343 0668' className={s.social_item}><AiOutlinePhone/></a>
        </div>
        <div onClick={()=> setShow(p=>!p)} className={s.social_btn}>
            {show ? <IoClose/> : <IoMdChatboxes/>} 
        </div>
        
    </div>
  )
}

export default Social