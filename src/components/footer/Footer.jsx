import React, { useEffect, useState } from "react";
import s from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [isAbout, setIsAbout] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsAbout(pathname === "/about");
  }, [pathname]);

  return (
    <div className={s.footer_body}>
      <footer className={s.footer}>
        <div className={s.footer_container}>
          <div className={`${s.sec} ${s.aboutus}`}>
            <h2>Biz haqimizda</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, <br />
              remaining essentially unchanged...{" "}
              {isAbout ? (
                ""
              ) : (
                <Link className={s.link} to="/about">
                  more
                </Link>
              )}
            </p>
            <ul className={s.sci}>
              <li>
                <a href="/">
                  <FaFacebookF className={s.FaFacebookF} />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiOutlineTwitter className={s.AiOutlineTwitter} />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsInstagram className={s.BsInstagram} />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsTelegram className={s.BsTelegram} />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsYoutube className={s.BsYoutube} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`${s.sec} ${s.contact}`}>
            <h2>Aloqa uchun</h2>
            <ul className={s.info}>
              <li>
                <span>
                  <BiMap />
                </span>
                <span>
                  123-uy, Boburshox ko'cha
                  <br />
                  Namangan shahar, 160100,
                  <br />
                  Uzbekistan
                </span>
              </li>
              <li>
                <span>
                  <BiPhoneCall />{" "}
                </span>
                <span>
                  <a href="tel:901234567">+998-90-123-45-67</a>
                  <br />
                  <a href="tel:901234567">+998-90-123-45-67</a>
                </span>
              </li>
              <li>
                <span>
                  <AiOutlineMail />{" "}
                </span>
                <p>
                  <a href="mailto:someone@gmail.com">someone@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
          <div className={`${s.sec} ${s.map}`}>
            <h2>Xaritada biz</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9782.950250986414!2d71.67283784138014!3d40.99843782546042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4dba0d667c2f%3A0xf12782376ea39733!2sNamangan!5e0!3m2!1suz!2skr!4v1661172157731!5m2!1suz!2skr"
              width="600"
              height="450"
              title="bizning manzil"
              className={s.mapStyle}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
      <div className={s.copyrightText}>
        <p>
          Copyright ©️ {new Date().getFullYear()} The Binary Inc. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
