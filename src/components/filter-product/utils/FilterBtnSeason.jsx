/* eslint-disable no-unused-expressions */
// @ts-nocheck
import React from "react";
import s from "../FilterProduct.module.css";

const FilterBtnSeason = ({ title, filter, setFilter }) => {
  return (
    <>
      <button
        onClick={() => setFilter({ ...filter, season: title })}
        className={
          filter.season === title
            ? [s.filterBodyButtonsRowBtn, s.active].join(" ")
            : s.filterBodyButtonsRowBtn
        }
      >
        {title}
      </button>
    </>
  );
};

export default FilterBtnSeason;
