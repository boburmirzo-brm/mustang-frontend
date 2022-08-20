import React from "react";
import s from "./HeartEmpty.module.css";
import emptyImage from "../../assets/image 2.png";
import { Link } from "react-router-dom";

const HeartEmpty = () => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <Link to="/">
          <img src={emptyImage} alt="EmptyImage" />
        </Link>
      </div>
      <div className={s.body}>
        <h1>Sorry, you do not have any favourite products yet...</h1>
        <p>Return after liking some products:)</p>
      </div>
    </div>
  );
};

export default HeartEmpty;
