import React from "react";
import s from "./ExtraInfo.module.css";

const EachItem = ({ elIcon, elP1, elP2 }) => {
  let Ikonka = elIcon;
  return (
    <div className={s.item}>
      <div className={s.itemIcon}>
        <Ikonka />
      </div>
      <div className={s.itemBody}>
        <p>{elP1}</p>
        <p>{elP2}</p>
      </div>
    </div>
  );
};

export default EachItem;
