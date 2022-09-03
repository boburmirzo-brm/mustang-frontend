// @ts-nocheck
import React, { useState } from "react";
import s from "./EditProduct.module.css";
import { createProduct } from "../../static/static";
import { BsFillTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { filterData } from "../../static/static";
import useFetch from "../../hooks/useFetch";
import axios from "../../api/axios";
import { auth } from "../../auth/auth";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

function EditProduct() {
  document.title = "Mahsulotlarni boshqarish";
  const [realTime, setRealTime] = useState(false);
  const [getId, setGetId] = useState("");
  const { data, loading } = useFetch("/products", realTime, true);
  const [updateModal, setUpdateModal] = useState(false);

  useEffect(() => {
    axios
      .get(`/products/${getId}`, auth())
      .then(({data:{data}}) => setUpdateProduct(data[0]))
      .catch((e) => console.log(e));
  }, [getId]);

  const [updateProduct, setUpdateProduct] = useState({
    title: "",
    price: 0,
    desc: "",
    season: "",
    type: "",
    color: "",
    stars: 0,
    view: 1,
    size: "",
    urls: [],
    productId: "",
    brand: "",
  });

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

  // getSetValue
  const handleChangeInput = (e) => {
    let key = e.target.getAttribute("name");
    let value = e.target.value;

    // checking (stars && price)'s type is NUMBER
    if (["stars", "price"].includes(key)) {
      value = +value;
      if (value < 0) {
        value = 0;
        toast.error(
          `${
            allPlaceHolders[key].split(":")[0]
          } ning qiymati 0 dan kichik bo'lmaydi`,
          {
            position: "top-right",
            autoClose: 7000,
          }
        );
      }
    }

    setUpdateProduct({ ...updateProduct, [key]: value });
  };
  // getSetValue

  // checking patter of (size) is [(0-9)(-)(0-9)];
  const focusOut = (e) => {
    let key = e.target.getAttribute("name");
    if (key === "size") {
      let temp = e.target.value.trim();
      let isMatch = temp.match(/\d\d-\d\d/g);
      if (!isMatch) {
        toast.error(
          `Iltimos ${
            allPlaceHolders[key].split(":")[0]
          } ni to'g'ri to'ldiring.\nMisol uchun: 39-44`,
          {
            position: "top-right",
            autoClose: 7000,
          }
        );
        setTimeout(() => {
          document.querySelector('input[name="size"]').focus();
        }, 500);
      }
    }
  };

  // checking allData before update
  const checkingAllDataBeforeSumbit = (data) => {
    let tempArr = Object.entries(data);
    let result = { state: true, error: {} };
    for (let i = 0; i < tempArr.length; i++) {
      let [key, value] = tempArr[i];

      if (value || value === [] || value === 0) {
        result.state = false;
        result.error = {};
      } else {
        result.state = true;
        result.error = { [key]: value };
        console.log("key: ", key);
        console.log("value: ", value);
        console.log(result);
        return result;
      }
    }
    return result;
  };

  const updateProducts = (_id) => {
    setUpdateModal(true);
  };

  const updatePro = (e) => {
    e.preventDefault();

    // checking allData before update
    let { state, error } = checkingAllDataBeforeSumbit(updateProduct);

    if (state) {
      for (let key in error) {
        if (key === "size") {
          setTimeout(() => {
            document.querySelector('input[name="size"]').focus();
          }, 500);
        }
        return toast.error(
          `Iltimos ${allPlaceHolders[key].split(":")[0]} ni ${
            key === "size"
              ? "to'g'ri to'ldiring.\nMisol uchun: 39-44"
              : "to'ldiring"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      }
    }
    axios
      .put(`/products/${updateProduct._id}`, updateProduct, auth())
      .then((res) => {
        setRealTime((e) => !e);
        toast.success("Successfully updated");
      })
      .catch((err) => console.log(err));
    setUpdateModal(false);
  };

  const deleteProducts = (_id) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`/products/${_id}`, auth())
        .then((res) => {
          setRealTime((e) => !e);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className={s.editProducts}>
        <div className={s.editTitle}>
          <h1>Mahsulotlarni Taxrirlash</h1>
        </div>
        <div className={s.pro_wrapper}>
          {data.data?.map(({ _id, urls, title, price, stars }, inx) => (
            <div key={inx} className={s.product}>
              <img src={urls[0]} alt={title} title={title} />
              <div className={s.product_body}>
                <p title={title} className={s.product_title}>
                  {title}
                </p>
                <h3 title={price.brm() + " so'm"} className={s.product_price}>
                  {price.brm()} so'm
                </h3>
                <div className={s.product_btns}>
                  <button
                    title="O'chirish"
                    onClick={() => {
                      deleteProducts(_id);
                      setGetId(_id);
                    }}
                    className={s.delete_btn}
                  >
                    <BsFillTrashFill />
                  </button>
                  <button
                    title="Tahrilash"
                    onClick={() => {
                      updateProducts(_id);
                      setGetId(_id);
                    }}
                    className={s.update_btn}
                  >
                    <FiEdit />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={
            updateModal ? `${s.update_modal} ${s.show_modal}` : s.update_modal
          }
        >
          <form className={s.updateForm} onSubmit={updatePro}>
            <div className={s.update_form_left}>
              <div className={s.update_images}>
                {updateProduct.urls?.map((el, idx) => (
                  <a
                    key={idx}
                    href={el}
                    target="_blank"
                    title={el}
                    rel="noreferrer"
                  >
                    <img
                      className={s.update_img}
                      src={el}
                      alt={updateProduct.title}
                    />
                  </a>
                ))}
              </div>
              <label>Nomi</label>
              <input
                type="text"
                value={updateProduct.title}
                name="title"
                onChange={handleChangeInput}
                onBlur={focusOut}
              />
              <label>Ta'rifi</label>
              <input
                type="text"
                name="desc"
                value={updateProduct.desc}
                onChange={handleChangeInput}
                onBlur={focusOut}
              />

              <label>Narxi</label>
              <input
                type="number"
                name="price"
                value={updateProduct.price}
                onChange={handleChangeInput}
                onBlur={focusOut}
              />

              <label>O'lchami</label>
              <input
                minLength={4}
                maxLength={5}
                type="text"
                name="size"
                value={updateProduct.size}
                onChange={handleChangeInput}
                onBlur={focusOut}
              />

              <label>Rangi</label>
              <select
                value={updateProduct.color}
                name="color"
                onChange={handleChangeInput}
                className={s.updateSelect}
              >
                <option value="">Tanlang</option>
                {createProduct.color?.map((i, inx) => (
                  <option key={inx} value={i}>
                    {i}
                  </option>
                ))}
              </select>

              <label>Yulduzlar</label>
              <select
                value={updateProduct.stars}
                name="stars"
                onChange={handleChangeInput}
                className={s.updateSelect}
              >
                <option value="">Tanlang</option>
                {createProduct.stars?.map((i, inx) => (
                  <option key={inx} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <label>Mahsulot id</label>
              <input
                type="text"
                name="productId"
                value={updateProduct.productId}
                onChange={handleChangeInput}
              />

              <label>Brend</label>
              <input
                type="text"
                name="brand"
                value={updateProduct.brand}
                onChange={handleChangeInput}
              />

              <label>Fasl</label>
              <select
                name="season"
                value={updateProduct.season}
                onChange={handleChangeInput}
                className={s.updateSelect}
              >
                <option value="">Tanlang</option>
                {filterData.season?.map((i, inx) => (
                  <option key={inx} value={i}>
                    {i}
                  </option>
                ))}
              </select>

              <label>Turi</label>
              <select
                name="type"
                value={updateProduct.type}
                onChange={handleChangeInput}
                className={s.updateSelect}
              >
                <option value="">Tanlang</option>
                {filterData.type?.map((i, inx) => (
                  <option key={inx} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className={s.updateModalBtns}>
              <button type="submit" className={s.update_modal_btn}>Update</button>
              <button type="" onClick={()=> updateModal(false)} className={s.cancel_modal_btn}>Cancel</button>
            </div>
          </form>
        </div>
        <div
          onClick={() => setUpdateModal(false)}
          className={updateModal ? `${s.shadow} ${s.show_shadow}` : s.shadow}
        ></div>
      </div>
      <ToastContainer />
    </>
  );
}

export default EditProduct;
