import React from "react";
import { createProduct } from "../../../static/static";
import s from "../CreateProduct.module.css";

const SelectOption = ({ kalit, value, handleChange }) => {
  return (
    <select
      value={value}
      onChange={handleChange}
      className={s.typeSelectInput}
      name={kalit}
    >
      {createProduct[kalit]?.map((el, index) => (
        <option
          key={index}
          value={el === "Turi" ? "" : el === "Fasl" ? "" : el}
        >
          {el}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
