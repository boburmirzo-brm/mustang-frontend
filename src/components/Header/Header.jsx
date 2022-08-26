import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/Mustang.svg";
import { NavLink, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import {useSelector} from "react-redux"
import { AiOutlineHeart,AiFillHeart, AiOutlineUser} from "react-icons/ai";
import {BsCart, BsFillCartFill, } from "react-icons/bs"


function Header(props) {
  const cart = useSelector(s => s.cart)
  const {pathname} = useLocation()
  return (
    <div className={s.header}>
      <NavLink to="/">
        {" "}
        <img className={s.logo} src={logo} alt="" />
      </NavLink>
      <ul className={s.header_collection}>
        <NavLink exact activeClassName={s.active} to="/">
          <li>Asosiy sahifa</li>
        </NavLink>
        <NavLink activeClassName={s.active} to="/about">
          <li>Biz haqimizda</li>
        </NavLink>
      </ul>
      <div className={s.searchbar}>
        <input type="text" placeholder="Qidirish..." />
        <FiSearch />
      </div>
      <div className={s.cart_like_box_wrapper}>
        <NavLink className={s.cart_admin} to="/admin">
          <AiOutlineUser />  
        </NavLink>
        <NavLink className={s.cart_heart} to="/heart">
          {pathname === "/heart" ? <AiFillHeart /> :<AiOutlineHeart /> } 
        </NavLink>
        <NavLink className={s.cart_item} to="/cart">
          {pathname === "/cart" ? <BsFillCartFill /> :<BsCart /> } 
          <span>{cart.length}</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
