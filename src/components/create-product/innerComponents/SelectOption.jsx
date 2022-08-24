import React from "react";
import { filterData } from "../../../static/static";
import s from "../CreateProduct.module.css";

const SelectOption = ({ kalit, value, handleChange }) => {
  return (
    <select
      value={value}
      onChange={handleChange}
      className={s.typeSelectInput}
      name={kalit}
    >
      {filterData[kalit]?.map((el, index) => (
        <option key={index} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
