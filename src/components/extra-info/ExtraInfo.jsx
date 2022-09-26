import React, { useState } from "react";
import s from "./ExtraInfo.module.css";
import { IoIosPaper, IoMdChatboxes } from "react-icons/io";
import { AiOutlineFileProtect, AiFillGift } from "react-icons/ai";
import EachItem from "./EachItem";
import { useTranslation } from "react-i18next";

function ExtraInfo() {

  const {t} = useTranslation()
  const [staticData] = useState([
    {
      id: 1,
      icon: <IoIosPaper />,
      p1: t("category.categoryBox1.credit"),
      p2: t("category.categoryBox1.toOrder"),
    },
    {
      id: 2,
      icon: <AiOutlineFileProtect />,
      p1: t("category.categoryBox2.guarantee"),
      p2: t("category.categoryBox2.control"),
    },
    {
      id: 3,
      icon: <AiFillGift />,
      p1: t("category.categoryBox3.bonus"),
      p2: t("category.categoryBox3.availability"),
    },
    {
      id: 4,
      icon: <IoMdChatboxes />,
      p1: t("category.categoryBox4.help"),
      p2: t("category.categoryBox4.questions"),
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
