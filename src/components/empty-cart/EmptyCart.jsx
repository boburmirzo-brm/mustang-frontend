import React from "react";
import s from "./EmptyCart.module.css";
import { Link } from "react-router-dom";
import emptyBasket from '../../assets/empty-basket.png';
import { useTranslation } from 'react-i18next'

function EmptyCart() {
  const { t } = useTranslation()

  return (
    <div className={s.empty_cart}>
      <img
        src={emptyBasket}
        alt="empty basket"
      />
      <div className={s.text}>
        <h2>{t('cart.emptyCart.empty')}</h2>
        <p>{t('cart.emptyCart.fillCart')}</p>
        <div className={s.grow}></div>
        <Link to="/">
          <button>{t('cart.emptyCart.purchase')}</button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;