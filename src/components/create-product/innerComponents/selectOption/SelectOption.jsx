import React from "react";
import { createProduct } from "../../../../static/static";
import s from "../../CreateProduct.module.css";

const SelectOption = ({ kalit, value, handleChange, placeholder }) => {
  return (
    <>
      <label className={s.label}>{placeholder.split(":")[0]}</label>
      <select
        value={value}
        onChange={handleChange}
        className={s.typeSelectInput}
        name={kalit}
      >
        {createProduct[kalit]?.map((el, index) => (
          <option
            key={index}
            value={["turi", "fasl"].includes(el.toLowerCase()) ? "" : el}
          >
            {el}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOption;
