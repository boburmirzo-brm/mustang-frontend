// @ts-nocheck
import React, { useState } from "react";
import s from "./CartProducts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../context/action/action";
import CartProduct from "./CartProduct";
import axios from "../../api/axios";
import { ADD_TO_CART } from "../../context/action/actionTypes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next'

function CartProducts() {
  const cart = useSelector((s) => s.cart);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    address: "",
    message: "",
    tel: 998,
  });

  const { t } = useTranslation()

  const sendMsgToBot = async () => {
    let myText = `<b>BUYURTMA</b>%0A%0A`;
    myText += `ismi: <b>${user.name}</b>%0A`;
    myText += `tel: <b>${user.tel}</b>%0A`;
    myText += `manzil: <b>${user.address}</b>%0A`;
    myText += `xabar: <b>${user.message}</b>%0A`;
    myText += `%0A<b>BUYURTMALAR</b>: %0A`;

    cart.forEach(
      ({
        title: nomi,
        color: rang,
        orderType: olcham,
        brand: brend,
        price: narx,
        productId: model,
        quontity: miqdori,
        size,
      }) => {
        myText += `%0A👞: <b>${nomi}</b>%0A`;
        myText += `🌈: <b>${rang}</b>%0A`;
        myText += `📐: <b>${olcham}</b>%0A`;
        if (olcham === "complect") {
          myText += `📐: <b>${size}</b>%0A`;
        }
        myText += `🅱️: <b>${brend}</b>%0A`;
        myText += `Ⓜ️: <b>${model}</b>%0A`;
        myText += `👟👞: <b>${miqdori} ta</b>%0A`;
        myText += `💵: <b>${narx.brm()} so'mdan</b>%0A`;
      }
    );
    let umumiyNarx = cart?.reduce((a, b) => a + b.price * b.quontity, 0);
    myText += `%0A%0AUMUMIY NARXI💰: <b>${umumiyNarx.brm()} so'm</b>%0A`;

    let [chatId, tokenBot] = [
      "-1001798281214",
      "5757354348:AAGShoSS88iCNOnJf170z0PH0W998Pj8zIU",
    ];


    
    let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${myText}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", tempUrl, true);
    api.send();
  };

  const sendOrders = (orders) => {
    const { name, address, tel } = user;
    if (
      name.length < 3 ||
      tel.toString().length < 12 ||
      tel.toString().length > 13 ||
      address.length < 3
    ) {
      toast.error(
        `${
          name.length < 3
            ? "Ism 3ta harfdan kichik bo'lmasligi kerak"
            : tel.toString().length < 12
            ? "Telefon Raqami 12tadan kichik bo'lmasligi kerak"
            : address.length < 3
            ? "Manzilni to'liq kiriting"
            : tel.toString().length > 13
            ? "Telefon Raqami 13tadan ko'p bo'lmasligi kerak"
            : "Ma'lumotni to'ldiring"
        }`,
        {
          position: "top-right",
          autoClose: 10000,
        }
      );
      return;
    }

    setLoading(true);
    sendMsgToBot();
    axios
      .post("/orders", {
        ...user,
        message: !user.message.length ? "Mijoz habar yozmadi." : user.message,
        orders,
      })
      .then((res) => {
        setLoading(false);
        // console.log(res.data);
        setTimeout(() => {
          if (res.data.state) {
            dispatch({ type: ADD_TO_CART, payload: [] });
          }
        }, 5000);

        toast.success("Mahsulotlar muvofaqiyatli qabul qilindi.", {
          position: "top-right",
          autoClose: 15000,
        });
      })
      .catch((err) => console.log(err));
  };

  const cancelTheOrder = () => {
    if(window.confirm(t('cart.cartActions.actionButtons.cancelTheOrderQuestion'))) {
      toast.success('Buyurtma bekor qilindi.', {
        position: 'top-right',
        autoClose: 5000
      })
      
      setTimeout(() => {
        dispatch(removeFromCart([]))
      }, 5000)
    }
  }

  return (
    <>
      <div className={s.cart_header}>
        <h1>{t('cart.shoppingcart')}</h1>
      </div>
      <div className={s.shopping_cart}>
        <ToastContainer />
        <div className={s.cart_products}>
          <div className={s.cart_nav}>
            <div className={s.nav_box}>
              <h2>{t('cart.cartnav.product')}</h2>
              <h2>{t('cart.cartnav.size')}</h2>
            </div>
            <h2>{t('cart.cartnav.quontity')}</h2>
            <h2>{t('cart.cartnav.price')}</h2>
          </div>
          <div className={s.cart_wrapper}>
            {cart?.map(
              ({
                _id,
                title,
                stars,
                urls,
                size,
                color,
                price,
                brand,
                quontity,
                orderType,
              }) => (
                <CartProduct
                  key={_id}
                  all={{
                    _id,
                    title,
                    urls,
                    size,
                    stars,
                    color,
                    price,
                    brand,
                    quontity,
                    orderType,
                  }}
                />
              )
            )}
          </div>
        </div>
        <div className={s.cart_actions}>
          <h3>{t('cart.cartActions.completingPlace')}</h3>
          <input
            value={user.name}
            onChange={({ target }) => setUser({ ...user, name: target.value })}
            type="text"
            className={s.cart_inp}
            placeholder={`${t('cart.cartActions.actionInputs.name')}...`}
          />
          <input
            value={user.tel}
            onChange={({ target }) => setUser({ ...user, tel: target.value })}
            type="number"
            className={s.cart_inp}
            placeholder={`${t('cart.cartActions.actionInputs.tel')}...`}
          />
          <input
            value={user.address}
            onChange={({ target }) => setUser({ ...user, address: target.value })}
            type="text"
            className={s.cart_inp}
            placeholder={`${t('cart.cartActions.actionInputs.address')}...`}
          />
          <textarea
            value={user.message}
            onChange={({ target }) => setUser({ ...user, message: target.value })}
            className={s.cart_inp}
            placeholder={`${t('cart.cartActions.actionInputs.msg')}...`}
          />
          <div className={s.total_price}>
            <h3>{t('cart.cartActions.totalPrice')}</h3>
            <p>{cart?.reduce((a, b) => a + b.price * b.quontity, 0).brm()}</p>
          </div>
          <button
            className={s.checkout}
            onClick={() => sendOrders(cart)}
            disabled={loading}
          >
            {loading ? "loading..." : t('cart.cartActions.actionButtons.purchase')}
          </button>
          <button
            className={s.del_btn}
            onClick={cancelTheOrder}
          >
            {t('cart.cartActions.actionButtons.cancellation')}
          </button>
        </div>
      </div>
    </>
  );
}

export default CartProducts;
