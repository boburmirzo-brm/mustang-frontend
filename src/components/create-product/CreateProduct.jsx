import React, { useState } from "react";
import s from "./CreateProduct.module.css";
import InputTypeText from "./innerComponents/InputTypeText";

import SelectAndColorInput from "./innerComponents/SelectAndColorInput";

function CreateProduct() {
  const [inputTypeTextData] = useState(["title","desc","price","size","productId","brand",]);
  const [inputTypeSelectData] = useState(["type", "season", "color"]);


  const [allPlaceHolders] = useState({
    title: "Nomi: (Cabani shoes)",
    desc: "Ta'rifi: (Sifatli toza charmda  tayyorlangan...)",
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
    title: "",
    desc: "",
    price: "",
    size: "",
    productId: "",
    brand: "",
    type: "",
    season: "",
    color: "",
    urls: [],
    stars: 0,
    view: 0,
  });
  // </Barcha Ma'lumotlar shu state da shuni backendga yuboriladi>

  // getSetValue
  const handleChangeInput = (e) => {
    let key = e.target.getAttribute("name");
    let value = e.target.value;
    setAllData({ ...allData, [key]: value });
  };
  // getSetValue

  console.log(allData);

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1>Mahsulot yaratish</h1>
        <hr />
      </div>
      <div className={s.row}>
        <form className={s.form}>
          {/* typeTextInput */}
          {inputTypeTextData?.map((key, idx) => (
            <InputTypeText
              key={idx}
              value={allData[key]}
              name={key}
              placeholder={allPlaceHolders[key]}
              handleChange={handleChangeInput}
            />
          ))}
          {/* typeTextInput */}

          {/* typeSelectInput */}
          {inputTypeSelectData?.map((key, idx) => (
            <SelectAndColorInput
              key={idx}
              kalit={key}
              placeholder={allPlaceHolders[key]}
              handleChange={handleChangeInput}
              value={allData[key]}
            />
          ))}
          {/* typeSelectInput */}
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
