import React from 'react';
import s from "./SubHeader.module.css"
import {BsTelephone} from "react-icons/bs"
import uzb from "../../assets/language_uzb.png"
import ru from "../../assets/laguage_ru.png"

function SubHeader() {
    return (
        <div className={s.subheader}>
            <div className={s.language_wrapper}>
                <div className={s.language_box}>
                    <img src={uzb} alt="" />
                </div>
                <div className={s.language_box}>
                <img src={ru} alt="" />
                </div>
            </div>
            <p><BsTelephone/> +998 91 343 0668</p>
        </div>  
    );
}

export default SubHeader;