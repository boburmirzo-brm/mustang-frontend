// @ts-nocheck
import React, { useState, useRef } from "react";
import s from "./CreateProduct.module.css";
import InputTypeFileImage from "./innerComponents/image/InputTypeFileImage";
import InputTypeText from "./innerComponents/text/InputTypeText";
import SelectAndColorInput from "./innerComponents/SelectAndColorInput";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../api/axios";
import { auth } from "../../auth/auth";

function CreateProduct() {
  const [inputTypeTextData] = useState([
    "title",
    "desc",
    "price",
    "size",
    "productId",
    "brand",
  ]);
  const [inputTypeSelectData] = useState(["type", "season", "stars", "color"]);
  const [allPlaceHolders] = useState({
    title: "Nomi: (Cabani shoes)",
    desc: "Ta'rifi: (Sifatli toza charmda  tayyorlangan...)",
    price: "Narxi: (420000)",
    size: "O'lchami: (39-44)",
    productId: "Mahsulot id: (45p7)",
    brand: "Brandi: (Mustang)",
    type: "Mahsulot turi: ",
    season: "Mavsumiyligi: (Fasl)",
    stars: "yulduzi: ",
    color: "Rangi: ",
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
    view: 1,
  });
  // </Barcha Ma'lumotlar shu state da shuni backendga yuboriladi>

  console.log(allData);

  const [imgs, setImgs] = useState([]);
  const [multipleFileImages, setMultipleFileImages] = useState("");

  // getSetValue
  const handleChangeInput = (e) => {
    let key = e.target.getAttribute("name");
    let value = e.target.value;

    // checking (stars && price)'s type is NUMBER
    if (["stars", "price"].includes(key)) {
      value = +value;
      if (value < 0) {
        value = 0;
        alert(
          `${
            allPlaceHolders[key].split(":")[0]
          } ning qiymati 0 kichik bo'lmaydi`
        );
      }
    }

    setAllData({ ...allData, [key]: value });
  };
  // getSetValue

  // checking patter of (size) is [(0-9)(-)(0-9)];
  const focusOut = (e) => {
    let key = e.target.getAttribute("name");
    if (key === "size") {
      let temp = e.target.value.trim();
      let isMatch = temp.match(/\d\d-\d\d/g);
      if (!isMatch) {
        alert(
          `Iltimos ${
            allPlaceHolders[key].split(":")[0]
          } ni to'g'ri to'ldiring.\nMisol uchun: 39-44`
        );
        setTimeout(() => {
          document.querySelector('input[name="size"]').focus();
        }, 1000);
      }
    }
  };

  const handleChangeImage = ({ target: { files } }) => {
    const MAX_COUNT_OF_IMAGES = 5;
    if (files.length <= MAX_COUNT_OF_IMAGES) {
      setMultipleFileImages(files);
      Object.values(files).forEach((i) => {
        let source = {
          src: URL.createObjectURL(i),
          name: i.name,
          size: i.size,
          date: i.lastModifiedDate,
        };
        setImgs((e) => [...e, source]);
      });
    } else {
      alert("uzur faqatgina 5 dona rasm yuklay olasiz holos:(");
    }
  };

  // checking allData before sumbit
  const checkingAllDataBeforeSumbit = (data) => {
    let tempArr = Object.entries(data);
    let result = { state: false, error: {} };
    for (let i = 0; i < tempArr.length; i++) {
      let [key, value] = tempArr[i];

      if (key === "size" && !value.match(/\d\d-\d\d/g)) {
        result.state = false;
        result.error = { [key]: value };
        break;
      } else if (value || value === []) {
        result.state = true;
        result.error = {};
      } else {
        result.state = false;
        result.error = { [key]: value };
        break;
      }
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // checking allData before sumbit
    let { state, error } = checkingAllDataBeforeSumbit(allData);
    if (!state) {
      for (let key in error) {
        if (key === "size") {
          setTimeout(() => {
            document.querySelector('input[name="size"]').focus();
          }, 1000);
        }
        return alert(
          `Iltimos ${allPlaceHolders[key].split(":")[0]} ni ${
            key === "size"
              ? "to'g'ri to'ldiring.\nMisol uchun: 39-44"
              : "to'ldiring"
          }`
        );
      }
    }

    let formData = new FormData();

    Object.entries(allData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    Array.from(multipleFileImages).forEach((i) => {
      formData.append("image", i, i.name);
    });

    // Checking image before submit
    if (!imgs.length) {
      return alert("Iltimos rasm ni yuklang");
    }

    // console.log("ok");
    // Axios ni shu yerdan boshlab yoziladi
    axios
      .post("/products", formData, auth())
      .then((res) => console.log(res))
      .catch(({response}) => console.log("error: ", response));
  };

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1>Mahsulot yaratish</h1>
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
              focusOut={focusOut}
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
            <AiOutlineCheckCircle className={s.btnIcon} />{" "}
            <span>Mahsulot Yaratish</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
