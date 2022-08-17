import React, { useState } from "react";
import s from "./ExtraInfo.module.css";
import { IoIosPaper, IoMdChatboxes } from "react-icons/io";
import { AiOutlineFileProtect, AiFillGift } from "react-icons/ai";
import EachItem from "./EachItem";

function ExtraInfo() {
  const [staticData] = useState([
    {
      id: 1,
      icon: <IoIosPaper />,
      p1: "Muddatli to'lovga sotib olish",
      p2: "Mustang qulay online buyurtma berish imkoniyati",
    },
    {
      id: 2,
      icon: <AiOutlineFileProtect />,
      p1: "Mahsulotlar uchun kafolat",
      p2: "MUSTANG da mahsulotlar sifatli bo'lib biz o'z mahsulotimiz sifatini doim nazoratda tutamiz",
    },
    {
      id: 3,
      icon: <AiFillGift />,
      p1: "Bonus tizimi",
      p2: "Bonus tizimi mavjud:)",
    },
    {
      id: 4,
      icon: <IoMdChatboxes />,
      p1: "Yordam",
      p2: "Ko'p beriladigan savollar",
    },
  ]);

  return (
    <div className={s.ExtraContainer}>
      <div className={s.items}>
        {staticData?.map((el, idx) => (
          <EachItem key={idx} elIcon={el.icon} elP1={el.p1} elP2={el.p2} />
        ))}
      </div>
    </div>
  );
}

export default ExtraInfo;
