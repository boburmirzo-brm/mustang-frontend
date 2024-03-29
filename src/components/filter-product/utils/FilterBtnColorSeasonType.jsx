// @ts-nocheck
import React from "react";
import s from "../FilterProduct.module.css";

const FilterBtnColorSeasonType = ({ title, filter, setFilter, type, setData }) => {
  return (
    <>
      <button
        onClick={() => {
          setFilter({ ...filter, [type]: title })
          setData([])
        }}
        className={
          filter[type] === title
            ? [s.filterBodyButtonsRowBtn, s.active].join(" ")
            : [s.filterBodyButtonsRowBtn].join(" ")
        }
      >
        {title}
      </button>
    </>
  );
};

export default FilterBtnColorSeasonType;
