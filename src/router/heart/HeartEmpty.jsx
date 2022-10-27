import React from "react";
import s from "./HeartEmpty.module.css";
import emptyImage from "../../assets/image 2.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const HeartEmpty = () => {
  const { t } = useTranslation()

  return (
    <div className={s.container}>
      <div className={s.image}>
        <Link to="/">
          <img src={emptyImage} alt="EmptyImage" />
        </Link>
      </div>
      <div className={s.body}>
        <h1>{t('heart.emptyHeart')}</h1>
      </div>
    </div>
  );
};

export default HeartEmpty;
