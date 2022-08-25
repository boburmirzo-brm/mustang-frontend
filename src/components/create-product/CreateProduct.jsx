// @ts-nocheck
import React, { useState } from "react";
import s from "./CreateProduct.module.css";
import InputTypeText from "./innerComponents/InputTypeText";
import SelectAndColorInput from "./innerComponents/SelectAndColorInput";
import cameraIcon from "../../assets/camera.png";

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

  const [imgs, setImgs] = useState([]);
  // getSetValue
  const handleChangeInput = (e) => {
    let key = e.target.getAttribute("name");
    let value = e.target.value;
    setAllData({ ...allData, [key]: value });
  };
  // getSetValue

  const handleChangeImage = ({ target: { files } }) => {
    Object.values(files).forEach((i) => {
      let source = {
        src: URL.createObjectURL(i),
        name: i.name,
        size: i.size,
        date: i.lastModifiedDate,
      };
      setImgs((e) => [...e, source]);
    });
  };

  // console.log(imgs);

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

          {/* inputTypeFile Images */}
          <div className={s.inputTypeFile}>
            <div className={s.imageReceiver}>
              <label title="Rasm yuklang" className={s.customUpload}>
                <img src={cameraIcon} alt="camera icon" />
                <p>Rasm yuklash</p>
                <p className={s.colorBrown}>.jpg / .png / .jpeg</p>
                <input
                  onChange={handleChangeImage}
                  type="file"
                  className={s.typeFile}
                  multiple
                />
              </label>
            </div>
            <div className={s.imagesContainer}>
              {imgs[0] ? (
                <div className={s.firstDiv}>
                  <img
                    className={s.eachImg}
                    alt={imgs[0].name}
                    src={imgs[0].src}
                  />
                </div>
              ) : (
                ""
              )}
              <div className={s.lastDiv}>
                {imgs?.slice(1)?.map(({ src, name }, idx) => (
                  <img key={idx} className={s.eachImg} alt={name} src={src} />
                ))}
              </div>
            </div>
          </div>
          {/* inputTypeFile Images */}
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
