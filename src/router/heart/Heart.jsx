// @ts-nocheck
import React, { useState, useEffect } from "react";
import s from "./Heart.module.css";
import { useSelector, useDispatch } from "react-redux";
import HeartEmpty from "./HeartEmpty";
import HeartComponent from "./HeartComponent";
import { removeFromHeart } from "../../context/action/action";

const Heart = () => {
  const cart = useSelector((state) => state.cart);
  const [data, setData] = useState(useSelector((state) => state.heart) || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeFromHeart(data));
  }, [data, dispatch]);

  //   console.log(data);
  return data.length ? (
    <div className={s.container}>
      <div className={s.heartedProducts}>
        {data?.map((data, idx) => (
          <HeartComponent
            data={data}
            key={idx}
            setData={setData}
            dispatch={dispatch}
            cart={cart}
          />
        ))}
      </div>
    </div>
  ) : (
    <HeartEmpty />
  );
};

export default Heart;
