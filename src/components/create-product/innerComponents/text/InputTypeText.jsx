// @ts-nocheck
import React from "react";
import s from "../../CreateProduct.module.css";

const InputTypeText = ({
  value,
  name,
  placeholder,
  handleChange,
  focusOut,
}) => {
  return (
    <div className={s.typeTextInputs}>
      <label className={s.label}>{placeholder.split(":")[0]}</label>
      <input
        type={name === "price" ? "number" : "text"}
        value={value}
        className={s.typeTextInput}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={focusOut}
      />
    </div>
  );
};

export default InputTypeText;
