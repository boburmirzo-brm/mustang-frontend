/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useState, useEffect } from "react";
import s from "../FilterProduct.module.css";
import { filterData } from "../../../static/static";

const FilterBtnPrice = ({ setFilter, filter }) => {
  const { price: prices } = filterData;
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(prices[prices.length - 2] || 0);
  const [isMaxPriceInput] = useState(true);

  useEffect(() => {
    if (+minPrice > +maxPrice) {
      setMinPrice(+maxPrice);
      setMaxPrice(+minPrice);
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    setFilter({ ...filter, price: { from: minPrice, to: maxPrice } });
  }, [minPrice, maxPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const showingPrices = (str, getChange, changedValue, isMax) => (
    <form onSubmit={handleSubmit}>
      <select
        className={s.filterInput}
        onChange={(e) => getChange(e.target.value)}
        value={changedValue}
      >
        {isMax ? (
          <option value={maxPrice}>{maxPrice}</option>
        ) : (
          <option value="0">0</option>
        )}

        {prices.map((narx, idx) =>
          narx === "undan yuqori" ? (
            <option key={idx} value={9999999}>
              {narx}
            </option>
          ) : (
            <option key={idx} value={narx}>
              {narx}
            </option>
          )
        )}
      </select>
      <label> {str} </label>
    </form>
  );
  return (
    <>
      {showingPrices("so'mdan", setMinPrice, minPrice, !isMaxPriceInput)}
      {showingPrices("so'mgacha", setMaxPrice, maxPrice, isMaxPriceInput)}
    </>
  );
};

export default FilterBtnPrice;
