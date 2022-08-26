import React from "react";
import s from "../CreateProduct.module.css";
import InputTypeColor from "./color/InputTypeColor";
import SelectOption from "./selectOption/SelectOption";

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
        <SelectOption
          kalit={kalit}
          value={value}
          placeholder={placeholder}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default SelectAndColorInput;
