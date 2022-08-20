// @ts-nocheck
import React from "react";
import s from "./Heart.module.css";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { UseProduct } from "../../hooks/UseProducts";
import { ADD_TO_CART } from "../../context/action/actionTypes";
import { useSelector, useDispatch } from "react-redux";

const HeartComponent = ({ data, setData }) => {
  const { _id, title, urls, price, stars, type } = data;
  const cart = useSelector((state) => state.cart);
  // const heart = useSelector((state) => state.heart);
  const dispatch = useDispatch();

  // console.log('cart >>>',cart)
  // console.log('heart >>>',heart)

  const removeItemFromHeart = () => {
    setData((e) => e.filter((i) => i._id !== _id));
  };
  return (
    <div className={s.heartedProduct}>
      {/* heartNav */}
      <div className={s.heartNav}>
        <div className={s.imageContainer}>
          <Link to={`/product/${_id}`} title={title}>
            <img src={urls[0]} alt={title} />
          </Link>
        </div>
        <div className={s.body}>
          <Link to={`/product/${_id}`} title={title}>
            <h1 className={s.title}>{title}</h1>
          </Link>

          <p className={s.type} title={type}>
            {type}
          </p>
        </div>
      </div>
      {/* heartNav */}

      {/* heartInfo */}
      <div className={s.heartedInfo}>
        <div className={s.priceContainer}>
          <span className={s.price} title={`${price.brm()} so'm`}>
            {price.brm()} so'm
          </span>
          <span className={s.stars} title={`${stars} stars`}>
            {new Array(stars).fill("").map((_, index) => (
              <AiFillStar key={index} />
            ))}
            {new Array(5 - stars).fill("").map((_, index) => (
              <AiOutlineStar key={index} />
            ))}
          </span>
        </div>
      </div>
      {/* heartInfo */}

      {/* actions */}
      <div className={s.actions}>
        <div className={s.btns}>
          <Link to={`product/${_id}`}>
            <button className={s.viewDetails}>To'liq ma'lumot</button>
          </Link>
          <button onClick={removeItemFromHeart} className={s.delete}>
            O'chirish
          </button>
        </div>
        <div className={s.btnAddToCart}>
          <button
            onClick={() => UseProduct(data, ADD_TO_CART, cart, dispatch)}
            className={s.addToCart}
          >
            <span>Savatchaga qo'shish</span>
          </button>
        </div>
      </div>
      {/* actions */}
    </div>
  );
};

export default HeartComponent;
