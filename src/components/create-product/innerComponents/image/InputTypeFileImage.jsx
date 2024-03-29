// @ts-nocheck
import React from "react";
import s from "./InputTypeFileImage.module.css";
import cameraIcon from "../../../../assets/camera.png";
import { useTranslation } from 'react-i18next'

const InputTypeFileImage = ({ handleChangeImage, imgs }) => {
  const { t } = useTranslation()
  return (
    <>
      <div className={s.imageReceiver}>
        <label
          title={
            imgs.length
              ? "Qayta rasm yuklash"
              : "Rasm yuklang,\n5ta dan ortiq rasm yuklanmaydi."
          }
          className={s.customUpload}
        >
          <img src={cameraIcon} alt="camera icon" />
          <p>{t('createPro.createProForm.uploadImage')}</p>
          <p className={s.colorBrown}>.jpg / .png / .jpeg</p>
          <input
            onChange={handleChangeImage}
            type="file"
            className={s.typeFile}
            multiple="multiple"
            accept="image/jpeg, image/png, image/jpg"
          />
        </label>
      </div>
      <div className={s.imagesContainer}>
        {imgs[0] ? (
          <div className={s.firstDiv}>
            <a href={imgs[0].src} target="_blank" rel="noreferrer">
              <img
                title={`name: ${imgs[0].name},\nsize: ${(
                  imgs[0].size / 1000000
                ).toFixed(2)}mb,\nsource: ${imgs[0].src}`}
                className={s.eachImg}
                alt={imgs[0].name}
                src={imgs[0].src}
              />
            </a>
          </div>
        ) : (
          ""
        )}
        <div className={s.lastDiv}>
          {imgs?.slice(1)?.map(({ src, name, size }, idx) => (
            <a key={idx} href={src} target="_blank" rel="noreferrer">
              <img
                title={`name: ${name},\nsize: ${(size / 1000000).toFixed(
                  2
                )}mb,\nsource: ${src}`}
                className={s.eachImg}
                alt={name}
                src={src}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default InputTypeFileImage;
