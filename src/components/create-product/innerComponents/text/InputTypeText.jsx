import React from "react";
import s from "../../CreateProduct.module.css";

const InputTypeText = ({ value, name, placeholder, handleChange }) => {
  return (
    <div className={s.typeTextInputs}>
      <label className={s.label}>{placeholder.split(":")[0]}</label>
      <input
        type="text"
        value={value}
        className={s.typeTextInput}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputTypeText;
