import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/Mustang.svg";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {useSelector} from "react-redux"

function Header(props) {
  const cart = useSelector(s => s.cart)
  return (
    <div className={s.header}>
      <Link to="/">
        {" "}
        <img className={s.logo} src={logo} alt="" />
      </Link>
      <ul className={s.header_collection}>
        <Link to="/">
          <li>Asosiy sahifa</li>
        </Link>
        <Link to="/about">
          <li>Biz haqimizda</li>
        </Link>
      </ul>
      <div className={s.searchbar}>
        <input type="text" placeholder="Qidirish..." />
        <FiSearch />
      </div>
      <div className={s.cart_like_box_wrapper}>
        <Link to="/heart">
          <BsHeart />
        </Link>
        <Link className={s.cart_item} to="/cart">
          <AiOutlineShoppingCart />
          <span>{cart.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
