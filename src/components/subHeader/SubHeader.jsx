import React, {useState, useEffect} from 'react';
import s from "./SubHeader.module.css"
import {BsTelephone} from "react-icons/bs"
import uzb from "../../assets/language_uzb.png"
import ru from "../../assets/laguage_ru.png"
import i18n from "../../language/i18next"
import {useTranslation} from "react-i18next"

function SubHeader() {
    const {t} = useTranslation()
    return (
        <div className={s.subheader}>
            <div className={s.language_wrapper}>
                <div onClick={()=> i18n.changeLanguage("uz")} className={t("l") === "uz" ? `${s.language_box} ${s.active}` : s.language_box }>
                    <img src={uzb} alt="" />
                </div>
                <div onClick={()=> i18n.changeLanguage("ru")} className={t("l") === "ru" ? `${s.language_box} ${s.active}` : s.language_box }>
                    <img src={ru} alt="" />
                </div>
            </div>
            <a href='tel:+998 91 343 0668'><BsTelephone/> <span>+998 91 343 0668</span></a>
        </div>  
    );
}

export default SubHeader;
