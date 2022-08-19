// @ts-nocheck
import React, { useState, useEffect } from "react";
import s from "../FilterProduct.module.css";
import { prices } from "../utils";


const FilterBtnPrice = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(prices[prices.length - 1]);

  useEffect(() => {
    if (+minPrice > +maxPrice) {
      setMinPrice(+maxPrice);
      setMaxPrice(+minPrice);
    }
  }, [minPrice, maxPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const showingPrices = (str, getChange, changedValue) => (
    <form onSubmit={handleSubmit}>
      <input
        className={s.filterInput}
        onChange={(e) => getChange(e.target.value)}
        value={changedValue}
        type="number"
        list="prices"
        name="price"
        placeholder={str}
        id="price"
      />
      <label> {str} </label>
      <datalist id="prices">
        {prices.map((narx, idx) => (
          <option key={idx} value={narx} />
        ))}
      </datalist>
    </form>
  );
  return (
    <>
      {showingPrices("so'mdan", setMinPrice, minPrice)}
      {showingPrices("so'mgacha", setMaxPrice, maxPrice)}
    </>
  );
};

export default FilterBtnPrice;