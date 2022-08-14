/* eslint-disable no-unused-expressions */
// @ts-nocheck
import React, { useState } from "react";
import s from "../FilterProduct.module.css";
import { handleClickChangeActiveColorAndFilter } from "../utils";
import data from "../../../static/static";

const FilterBtnSeason = () => {
  const [arr, setArr] = useState([]);

  data.forEach(({ season }) => {
    if (!arr.includes(season)) setArr([...arr, season]);
  });

  return (
    <>
      <button
        onClick={handleClickChangeActiveColorAndFilter}
        className={`${s.filterBodyButtonsRowBtn} ${s.active}`}
      >
        All
      </button>
      {arr?.map((el, idx) => (
        <button
          onClick={handleClickChangeActiveColorAndFilter}
          key={idx}
          className={`${s.filterBodyButtonsRowBtn}`}
        >
          {el}
        </button>
      ))}
    </>
  );
};

export default FilterBtnSeason;
