import React, { useEffect, useState } from "react";
import s from "./Header.module.css";
import logo from "../../assets/Mustang.svg";
import { NavLink, useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import {useSelector} from "react-redux"
import { AiOutlineHeart,AiFillHeart, AiOutlineUser} from "react-icons/ai";
import {BsCart, BsFillCartFill, } from "react-icons/bs"
import axios from '../../api/axios'

function Header(props) {
  const cart = useSelector(s => s.cart)
  const {pathname} = useLocation()

  const [searchingProducts, setSearchingProducts] = useState([])

  const searchData = (value) => {
    axios.get(`/products/search?title=${value}`)
    .then(({data}) => setSearchingProducts(data))
    .catch((err) => console.log(err))
  }
  
  console.log(searchingProducts);

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
        <input type="text" placeholder="Qidirish..." onChange={({target}) => searchData(target.value)}/>
        <FiSearch />
        {/* {
          searchingProducts && <div className={`${s.searching_products_container} ${searchingProducts.length && s.active}`}>
          {
            searchingProducts?.map(({_id, title, price, urls}) => <div key={_id} className={s.searching_product}>
            <div className={s.left_side}>
              <img src={urls[0]} alt="" />
              <h3>{title}</h3>
              <p>{price}sum</p>
            </div>
            <FiX/>
          </div>)
          }
        </div>
        } */}
      </div>
      <div className={s.cart_like_box_wrapper}>
        <NavLink className={s.cart_admin} to="/admin/order">
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
