import React, { useEffect, useState } from "react";
import s from "./Header.module.css";
import logo from "../../assets/Mustang.svg";
import { NavLink, useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import {useSelector} from "react-redux"
import { AiOutlineHeart,AiFillHeart, AiOutlineUser} from "react-icons/ai";
import {BsCart, BsFillCartFill, } from "react-icons/bs"
import axios from '../../api/axios'
import Loader from '../loader/Loader'

function Header(props) {
  const cart = useSelector(s => s.cart)
  const {pathname} = useLocation()

  const [searchingProducts, setSearchingProducts] = useState([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(value.length) {
      setLoading(true)
      axios.get(`/products/search?searchingValue=${value}`)
      .then((res) => {
        setSearchingProducts(res.data.data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
      return;
    } else {
      return;
    }
  }, [value])

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
        <input type="text" placeholder="Qidirish..." value={value} onChange={({target}) => setValue(target.value)}/>
        <FiSearch />
        {
          value && <div className={`${s.searching_products_container} ${searchingProducts.length && s.active}`}>
          {
            searchingProducts.length && searchingProducts?.map(({_id, title, productId, urls}) => <div key={_id} className={s.searching_product}>
            <div className={s.left_side}>
              <img src={urls[0]} alt="" />
              <h3>{title.length > 17 ? title.slice(0,17) + "..." : title}</h3>
            </div>
              <p>{productId}</p>
            <FiX/>
          </div>)
          }
        {
          loading && <Loader/>
        }
        </div>
        }
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
