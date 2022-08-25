// @ts-nocheck
import React, { useState } from "react";
import s from "./CreateProduct.module.css";
import InputTypeFileImage from "./innerComponents/image/InputTypeFileImage";
import InputTypeText from "./innerComponents/text/InputTypeText";
import SelectAndColorInput from "./innerComponents/SelectAndColorInput";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

function CreateProduct() {
  const [inputTypeTextData] = useState([
    "title",
    "desc",
    "price",
    "size",
    "productId",
    "brand",
  ]);
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

  // console.log(allData)

  const [imgs, setImgs] = useState([]);
  // getSetValue
  const handleChangeInput = (e) => {
    let key = e.target.getAttribute("name");
    let value = e.target.value;
    setAllData({ ...allData, [key]: value });
  };
  // getSetValue

  const handleChangeImage = ({ target: { files } }) => {
    let maxCountOfImages = 5;
    Object.values(files).forEach((i) => {
      let source = {
        src: URL.createObjectURL(i),
        name: i.name,
        size: i.size,
        date: i.lastModifiedDate,
      };
      if (imgs.length < maxCountOfImages) {
        setImgs((e) => [...e, source]);
      }
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1>Mahsulot yaratish</h1>
        <hr />
      </div>
      <div className={s.row}>
        <form onSubmit={handleSubmit} className={s.form}>
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

          {/* inputTypeFile Images */}
          <div className={s.inputTypeFile}>
            <InputTypeFileImage
              handleChangeImage={handleChangeImage}
              imgs={imgs}
            />
          </div>
          {/* inputTypeFile Images */}

          <button type="submit" className={s.btn}>
            <AiFillCheckCircle className={s.btnIcon} />{" "}
            <span>Mahsulot Yaratish</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
