import React from "react";
import s from "./EmptyCart.module.css";
import { Link } from "react-router-dom";
import emptyBasket from '../../assets/empty-basket.png';

function EmptyCart() {
  return (
    <div className={s.empty_cart}>
      <img
        src={emptyBasket}
        alt="empty basket"
      />
      <div className={s.text}>
        <h2>Sizning savatchangiz bo'sh.</h2>
        <p>Karzinkani to'ldirish uchun, biror nima sotib oling</p>
        <div className={s.grow}></div>
        <Link to="/">
          <button>Sotib olish</button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
