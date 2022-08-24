import React from "react";
import { filterData } from "../../../static/static";
import s from "./InputTypeColor.module.css";

const InputTypeColor = ({ kalit, placeholder, handleChange }) => {
  return (
    <div className={s.inputTypeRadio}>
      {/* radio selection */}
      {filterData[kalit]?.map((el, index) => (
        <label className={s.formControl} key={index}>
          <input
            type="radio"
            value={el}
            className={s.typeRadio}
            name={kalit}
            placeholder={placeholder}
            onChange={handleChange}
          />
          <span
            title={el}
            className={`${s.customRadio} ${s[filterData.colorReverse[el]]}`}
          ></span>
        </label>
      ))}
      {/* radio selection */}
    </div>
  );
};

export default InputTypeColor;
