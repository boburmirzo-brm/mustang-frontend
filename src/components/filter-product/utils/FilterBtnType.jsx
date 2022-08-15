/* eslint-disable no-unused-expressions */
// @ts-nocheck
import React from "react";
import s from "../FilterProduct.module.css";

const FilterBtnType = ({ title, filter, setFilter }) => {
  return (
    <>
      <button
        onClick={() => setFilter({ ...filter, type: title })}
        className={
          filter.type === title
            ? [s.filterBodyButtonsRowBtn, s.active].join(" ")
            : s.filterBodyButtonsRowBtn
        }
      >
        {title}
      </button>
    </>
  );
};

export default FilterBtnType;
