import React from 'react';
import s from "./Header.module.css"
import logo from "../../assets/Mustang.svg"
import { Link } from 'react-router-dom';
import {FiSearch} from "react-icons/fi"
import {BsHeart} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"

function Header(props) {
    return (
        <div className={s.header}>
           <Link to="/"> <img className={s.logo} src={logo} alt="" /></Link>
            <ul className={s.header_collection}>
                <li>Asosiy sahifa</li>
                <li>Biz haqimizda</li>
                </ul>
            <div className={s.searchbar}>
                <input type="text" placeholder='Qidirish...' />
                <FiSearch/>
                
            </div>
            <div className={s.cart_like_box_wrapper}>
            <BsHeart/>
            <AiOutlineShoppingCart/>
            </div>
        </div>
    );
}

export default Header;