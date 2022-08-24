// @ts-nocheck
import React from "react";
import s from "./Heart.module.css";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { UseProduct } from "../../hooks/UseProducts";
import { ADD_TO_CART } from "../../context/action/actionTypes";
import { useSelector, useDispatch } from "react-redux";

const HeartComponent = ({ data, setData }) => {
  const { _id, title, urls, price, stars, type, color } = data;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItemFromHeart = () => {
    setData((e) => e.filter((i) => i._id !== _id));
  };
  return (
    <div className={s.heartedProduct}>
      {/* heartNav */}
      <div className={s.heartNav}>
        <div className={s.imageContainer}>
          <Link className={s.imageLink} to={`/product/${_id}`} title={title}>
            <img src={urls[0]} alt={title} />
          </Link>
        </div>
        <div className={s.body}>
          <Link to={`/product/${_id}`} title={title}>
            <h1 className={s.title}>{title}</h1>
          </Link>

          <p className={s.type} title={type}>
            turi: {type}
          </p>
          <p className={s.type} title={color}>
            rangi: {color}
          </p>
        </div>
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
      </div>
      {/* heartNav */}

      {/* actions */}
      <div className={s.actions}>
        <div className={s.btns}>
          <Link title="To'liq ma'lumot" to={`product/${_id}`}>
            <button className={s.viewDetails}>
              <span>
                <BiLinkExternal />
              </span>
              <span>To'liq ma'lumot</span>
            </button>
          </Link>
          <button
            title="O'chirish"
            onClick={removeItemFromHeart}
            className={s.delete}
          >
            <span>
              <FiTrash2 />
            </span>
            <span>O'chirish</span>
          </button>

          <button
            title="Savatchaga qo'shish"
            onClick={() => UseProduct(data, ADD_TO_CART, cart, dispatch)}
            className={s.addToCart}
          >
            <span>
              <MdOutlineShoppingCart />
            </span>
            <span>Savatchaga qo'shish</span>
          </button>
        </div>
      </div>
      {/* actions */}
    </div>
  );
};

export default HeartComponent;
