// @ts-nocheck
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import s from "./SinglePage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { UseProduct } from "../../hooks/UseProducts";
import { ADD_TO_HEART, ADD_TO_CART } from "../../context/action/actionTypes";
import ZoomImage from "../../components/zoom-image/ZoomImage";
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { BsTelegram, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { UseCart } from "../../hooks/UseCart";
import axios from "../../api/axios";
import Loader from "../../components/loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import Slides from "../../components/slides/Slides"

const SinglePage = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState([
    {
      _id: "",
      title: "",
      desc: "",
      price: 0,
      size: "",
      brand: "",
      type: "",
      season: "",
      stars: 5,
      view: 1,
      urls: [],
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then(({ data: { data } }) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log("error: ", e);
        setLoading(false);
      });
  }, [id]);

  const { title, desc, urls } = data[0];

  document.title = title;

  const heart = useSelector((state) => state.heart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [zoom, setZoom] = useState(null);
  const [mainImage, setMainImage] = useState(urls[0] || "");

  useEffect(() => {
    setMainImage(urls[0]);
  }, [data?.title, urls]);

  const [liked, setLiked] = useState(false);
  const AddToHeart = () => {
    const pro = heart?.filter((item) => item._id === data[0]._id);

    if (!pro.length) {
      setLiked(true);
      UseProduct(data[0], ADD_TO_HEART, heart, dispatch);
    } else {
      let newData = heart?.filter((item) => item._id !== data[0]._id);

      setLiked(false);
      dispatch({ type: ADD_TO_HEART, payload: newData });
    }
    return;
  };

  useEffect(() => {
    const pro = heart?.filter((item) => item._id === data[0]._id);

    setLiked(pro.length);
  }, [data, heart]);

  const handleShare = async () => {
    let shareData = {
      title,
      text: desc,
      url: window.location.href,
    };
    try {
      await window.navigator.clipboard.writeText(
        `title: ${title}, desc: ${desc}, url: ${window.location.href}`
      );
      toast.info("description copied to clipboard");
    } catch (error) {
      toast.info("Failed to copy: ");
      console.log(error);
    }
    window.navigator.share(shareData);
  };

  return (
      <div className={s.single_container}>
        {loading ? (
          <Loader config={{ size: "100px" }} />
        ) : (
          data?.map(
            (
              {
                title,
                desc,
                price,
                size,
                brand,
                type,
                season,
                stars,
                view,
                urls,
              },
              idx
            ) => (
              <div className={s.container} key={idx}>
                {zoom && <ZoomImage urls={zoom} setZoom={setZoom} />}
                <div className={s.imagesContainer}>
                  <div className={s.mainImage}>
                    <a onClick={() => setZoom(urls)}>
                      <img
                        className={s.singleImage}
                        title={`rasmni kattalashtirish, name: ${title}`}
                        src={mainImage}
                        alt={title}
                      />
                    </a>
                    <span
                      title={
                        liked
                          ? "sevimli mahsulotlardan olib tashlash"
                          : "sevimli mahsulotlar qatoriga qo'shish"
                      }
                      className={
                        liked
                          ? [s.heartIcon, s.activeHeartIcon].join(" ")
                          : [s.heartIcon].join(" ")
                      }
                      onClick={AddToHeart}
                    >
                      <AiOutlineHeart />
                    </span>
                  </div>
                  <div className={s.miniImages}>
                    {urls?.map((el, idx) => (
                      <div
                        key={idx}
                        className={
                          mainImage === urls[idx]
                            ? [s.miniImage, s.active].join(" ")
                            : [s.miniImage].join(" ")
                        }
                        onClick={() => setMainImage(urls[idx])}
                      >
                        <img
                          className={s.image}
                          src={el}
                          alt={`${title}+${idx}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={s.infoBody}>
                  <h3 className={s.title}>{title}</h3>
                  <p className={s.desc}>{desc}</p>

                  <div className={s.miniGroupOfInfo}>
                    <div className={s.stars}>
                      <span>
                        {new Array(stars).fill("").map((_, index) => (
                          <AiFillStar key={index} />
                        ))}
                        {new Array(5 - stars).fill("").map((_, index) => (
                          <AiOutlineStar key={index} />
                        ))}
                      </span>
                    </div>
                    <p className={s.price}>
                      <span title={`${price.brm()} so'm`}>
                        {price.brm()} so'm
                      </span>
                    </p>
                    <p className={s.type}>
                      turi: <span title={type}>{type} </span>
                    </p>
                    <p className={s.season}>
                      mavsumiyligi: <span title={season}>{season}</span>
                    </p>
                    <p className={s.brand}>
                      brandi: <span title={brand}>{brand}</span>
                    </p>

                    <div className={s.size}>
                      O'lchamlari: <span title={size}>{size}</span>
                      <p className={s.miniInfo}>
                        savatchada razmerlarini o'zgartirishingiz mumkin
                      </p>
                    </div>
                    <p className={s.view}>
                      ko'rildi: <span>{view} </span>{" "}
                    </p>
                    <div className={s.share}>
                      ulashish:{" "}
                      <span onClick={handleShare} className={s.telegram}>
                        <BsTelegram />
                      </span>
                      <span onClick={handleShare} className={s.facebook}>
                        <BsFacebook />
                      </span>
                      <span onClick={handleShare} className={s.twitter}>
                        <BsTwitter />
                      </span>
                      <span onClick={handleShare} className={s.instagram}>
                        <BsInstagram />
                      </span>
                    </div>
                  </div>

                  <div className={s.buttonsAction}>
                    <button
                      onClick={() =>
                        UseCart(data[0], ADD_TO_CART, cart, dispatch)
                      }
                      className={s.cart_btn}
                    >
                      {" "}
                      <span className={s.addToCartIcon}>
                        <MdOutlineShoppingCart />
                      </span>
                      <span className={s.addToCart}>Savatchaga qo'shish</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          )
        )}
        <br />
        <br />
        <Slides/>
      <ToastContainer />
    </div>
  );
};

export default SinglePage;
