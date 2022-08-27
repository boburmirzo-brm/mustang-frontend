// @ts-nocheck
import React from "react";
import s from "./InputTypeFileImage.module.css";
import cameraIcon from "../../../../assets/camera.png";

const InputTypeFileImage = ({ handleChangeImage, imgs }) => {
  return (
    <>
      <div className={s.imageReceiver}>
        <label
          title={`Rasm yuklang,\n5ta dan ortiq rasm yuklanmaydi.`}
          className={s.customUpload}
        >
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
