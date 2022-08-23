import React, { useState, useEffect } from "react";
import s from "./CreateProduct.module.css";
import { filterData } from "../../static/static";

function CreateProduct() {
  const [inputTypeTextData, setTypeTextData] = useState({
    title: "",
    desc: "",
    price: "",
    size: "",
    productId: "",
    brand: "",
  });
  const [inputTypeSelectData, settypeSelectData] = useState({
    type: "",
    season: "",
    color: "",
  });
  const [urls, setUrls] = useState([]);
  const [allPlaceHolders] = useState({
    title: "Nomi: (Cabani shoes)",
    desc: "Ta'rifi: (Sifatli toza charmda  tayyorlangan",
    price: "Narxi: (420 000 so'm)",
    size: "O'lchami: (39-44)",
    productId: "Mahsulot id: (45p7)",
    brand: "Brandi: (Mustang)",
    type: "Mahsulot kategoriyasi",
    season: "Mavsumiyligi (Fasl)",
    color: "jigarrang",
  });

  // <Barcha Ma'lumotlar shu state da shuni backendga yuboriladi>
  const [allData, setAllData] = useState({
    stars: 0,
    view: 0,
  });

  useEffect(() => {
    setAllData((e) => ({
      ...e,
      ...inputTypeTextData,
      ...inputTypeSelectData,
      urls,
    }));
  }, [inputTypeSelectData, inputTypeTextData, urls]);
  console.log(allData);
  // </Barcha Ma'lumotlar shu state da shuni backendga yuboriladi>

  // getSetValueTypeText
  const handleChangeInputTypeText = (e) => {
    let key = e.target.getAttribute("name");
    let value = e.target.value;
    let tempData = { ...inputTypeTextData };
    tempData[key] = value;
    setTypeTextData(tempData);
  };
  // getSetValueTypeText

  // getSetValueTypeSelect
  const handleChangeInputTypeSelect = (e) => {
    let key = e.target.getAttribute("name");
    let value = e.target.value;
    let tempData = { ...inputTypeSelectData };
    tempData[key] = value;
    settypeSelectData(tempData);
  };
  // getSetValueTypeSelect

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1>Mahsulot yaratish</h1>
        <hr />
      </div>
      <div className={s.row}>
        <form className={s.form}>
          {/* typeTextInput */}
          {Object.keys(inputTypeTextData).map((key, idx) => (
            <div key={idx} className={s.typeTextInputs}>
              <input
                type="text"
                value={inputTypeTextData[key]}
                className={s.typeTextInput}
                name={key}
                placeholder={allPlaceHolders[key]}
                onChange={handleChangeInputTypeText}
              />
            </div>
          ))}
          {/* typeTextInput */}

          {/* typeSelectInput */}
          {Object.keys(inputTypeSelectData).map((key, idx) => (
            <div key={idx} className={s.typeSelectInputs}>
              {key === "color" ? (
                <div className={s.inputTypeRadio}>
                  {filterData[key]?.map((el, index) => (
                    <input
                      key={index}
                      type="radio"
                      value={inputTypeSelectData[key]}
                      className={s.typeSelectInput}
                      name={key}
                      placeholder={allPlaceHolders[key]}
                      onChange={handleChangeInputTypeSelect}
                    />
                  ))}
                </div>
              ) : (
                <select
                  value={inputTypeSelectData[key]}
                  onChange={handleChangeInputTypeSelect}
                  className={s.typeSelectInput}
                  name={key}
                >
                  {filterData[key]?.map((el, index) => (
                    <option key={index} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
          {/* typeSelectInput */}
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
