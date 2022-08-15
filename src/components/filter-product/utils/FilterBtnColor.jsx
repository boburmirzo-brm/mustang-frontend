// @ts-nocheck
import React from "react";
import s from "../FilterProduct.module.css";
import { objForColors } from "../utils";

const FilterBtnColor = ({ title, filter, setFilter }) => {
  return (
    <>
      <button
        onClick={() => setFilter({ ...filter, color: title })}
        className={
          filter.color === title
            ? [s.filterBodyButtonsRowBtn, s.active].join(" ")
            : [s.filterBodyButtonsRowBtn, s[objForColors[title]]].join(" ")
        }
      >
        {title}
      </button>
    </>
  );
};

export default FilterBtnColor;
