// @ts-nocheck
import React, { useState } from "react";
import data from "../../../static/static";
import { objForColors, handleClickChangeActiveColorAndFilter } from "../utils";
import s from "../FilterProduct.module.css";

const FilterBtnColor = () => {
  const [arr, setArr] = useState([]);

  data.forEach(({ color }) => {
    if (!arr.includes(color)) setArr([...arr, color]);
  });

  return (
    <>
      <button
        onClick={handleClickChangeActiveColorAndFilter}
        className={`${s.filterBodyButtonsRowBtn} ${s.active}`}
      >
        All
      </button>
      {arr?.map((color, idx) => {
        if (objForColors[color]) {
          return (
            <button
              onClick={handleClickChangeActiveColorAndFilter}
              key={idx}
              className={`${s.filterBodyButtonsRowBtn} ${s.onlyForBtnColor} `}
            >
              <span
                className={`${s.filterBtnColor} ${s[objForColors[color]]}`}
              ></span>
              {color}
            </button>
          );
        }
        return "";
      })}
    </>
  );
};

export default FilterBtnColor;
