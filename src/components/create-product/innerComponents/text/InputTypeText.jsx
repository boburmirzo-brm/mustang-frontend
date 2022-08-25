import React from "react";
import s from "../../CreateProduct.module.css";

const InputTypeText = ({ value, name, placeholder, handleChange }) => {
  return (
    <div className={s.typeTextInputs}>
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
