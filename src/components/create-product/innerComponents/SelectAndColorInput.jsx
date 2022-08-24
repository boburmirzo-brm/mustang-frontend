import React from "react";
import s from "../CreateProduct.module.css";
import InputTypeColor from "./InputTypeColor";
import SelectOption from "./SelectOption";

const SelectAndColorInput = ({ kalit, placeholder, handleChange, value }) => {
  return (
    <div className={s.typeSelectInputs}>
      {kalit === "color" ? (
        <InputTypeColor
          kalit={kalit}
          placeholder={placeholder}
          handleChange={handleChange}
        />
      ) : (
        <SelectOption kalit={kalit} value={value} handleChange={handleChange} />
      )}
    </div>
  );
};

export default SelectAndColorInput;
