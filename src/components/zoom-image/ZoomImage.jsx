import React, { useState } from "react";
import s from "./ZoomImage.module.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FiX } from "react-icons/fi";

function ZoomImage({ urls, setZoom }) {
  const [index, setIndex] = useState(0);
  return (
    <div className={s.zoom_image}>
      <div onClick={() => setZoom(false)} className={s.zoom_shadow}>
        <FiX title="close" />
      </div>
      <div className={s.zoom_container}>
        <button
          disabled={index === 0}
          onClick={() => setIndex((p) => p - 1)}
          className={s.zoom_controller}
        >
          <BsChevronLeft title="left" />
        </button>
        <img src={urls[index]} alt="" />
        <button
          disabled={urls.length - 1 <= index}
          onClick={() => setIndex((p) => p + 1)}
          className={s.zoom_controller}
        >
          <BsChevronRight title="right" />
        </button>
      </div>
    </div>
  );
}

export default ZoomImage;
