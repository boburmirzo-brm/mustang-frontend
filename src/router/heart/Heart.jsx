// @ts-nocheck
import React, { useState, useEffect } from "react";
import s from "./Heart.module.css";
import { useSelector, useDispatch } from "react-redux";
import HeartEmpty from "./HeartEmpty";
import HeartComponent from "./HeartComponent";
import { removeFromHeart } from "../../context/action/action";
import { useTranslation } from 'react-i18next'

const Heart = () => {
  const { t } = useTranslation()
  document.title = t('heart.heartNav');
  const [data, setData] = useState(useSelector((state) => state.heart) || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeFromHeart(data));
  }, [data, dispatch]);

    // console.log(data);
  return (
    <>
      {data.length ? (
        <div className={s.container}>
          <h1 className={s.h1}>{t('heart.heartNav')}</h1>
          <div className={s.heartedProducts}>
            {[...data].reverse()?.map((data, idx) => (
              <HeartComponent data={data} key={idx} setData={setData} />
            ))}
          </div>
        </div>
      ) : (
        <HeartEmpty />
      )}
    </>
  );
};

export default Heart;
