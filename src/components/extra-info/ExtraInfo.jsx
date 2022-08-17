import React from "react";
import s from "./ExtraInfo.module.css";

function ExtraInfo() {
  console.log("Salom Dunyo!");

  return (
  <div className={s.ExtraContainer}>
    <div className={s.items}>
      <div className={s.item}>1</div>
      <div className={s.item}>2</div>
      <div className={s.item}>3</div>
      <div className={s.item}>4</div>
    </div>
  </div>);
}

export default ExtraInfo;
