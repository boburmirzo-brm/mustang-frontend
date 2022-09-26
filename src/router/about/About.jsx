import React from 'react'
import img6 from "../../assets/img6.jpg"
import img5 from "../../assets/img5.jpg"
import img4 from "../../assets/img4.jpg"
import img3 from "../../assets/img3.jpg"
import s from "./About.module.css"
import {useTranslation} from "react-i18next"

function About() {
   let title = "Biz haqimizda";
   document.title = title;

  const {t} = useTranslation()

  return (
    <div className={s.about}>
       <div className={s.about_start}>
        <div className={s.about_page_blur}>
          <h1  className='about_text'>{t("about.bannerLogo")}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laborum assumenda vitae, obcaecati nihil quasi beatae placeat magnam quas quod, voluptates corrupti, accusantium adipisci quia atque numquam enim saepe voluptatem quae non? Ratione voluptas sapiente, ipsam suscipit quibusdam optio natus numquam itaque iusto laudantium eaque! Repudiandae corporis facere quo recusandae?</p>
        </div>
       </div>
       <h1 className={s.about_logo}>{t("about.historyMustang")}</h1>
       <div className={s.about_box_wrapper}>
          <div className={s.about_box}><img src={img6} alt="" /></div>
          <div className={s.about_box2}><h1 className='about_text'>{t("about.ourFounding")}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur doloribus delectus itaque ipsa commodi saepe dignissimos facilis, a perferendis quasi aliquid illo esse nostrum aperiam, veniam nesciunt exercitationem aliquam nihil. Nesciunt quia ea minus error at modi dolores nostrum. Rerum doloribus, quos repellendus magnam eum excepturi sunt tempore vel saepe maiores voluptatibus illum quis eos doloremque optio architecto molestiae.</p>
          </div>
       </div>
       <div className={s.about_box_wrapper}>
       <div className={[s.about_box, s.about_socond].join(" ") }><h1 className='about_text'>{t("about.ourWork")}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur doloribus delectus itaque ipsa commodi saepe dignissimos facilis, a perferendis quasi aliquid illo esse nostrum aperiam, veniam nesciunt exercitationem aliquam nihil. Nesciunt quia ea minus error at modi dolores nostrum. Rerum doloribus, quos repellendus magnam eum excepturi sunt tempore vel saepe maiores voluptatibus illum quis eos doloremque optio architecto molestiae.</p>
          </div>
          <div className={[s.about_box, s.about_first].join(" ")}><img src={img3} alt="" /></div>
       </div>
       <div className={s.about_box_wrapper}>
          <div className={s.about_box}><img src={img4} alt="" /></div>
          <div className={s.about_box2}><h1>{t("about.ourProducts")}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur doloribus delectus itaque ipsa commodi saepe dignissimos facilis, a perferendis quasi aliquid illo esse nostrum aperiam, veniam nesciunt exercitationem aliquam nihil. Nesciunt quia ea minus error at modi dolores nostrum. Rerum doloribus, quos repellendus magnam eum excepturi sunt tempore vel saepe maiores voluptatibus illum quis eos doloremque optio architecto molestiae.</p>
          </div>
       </div>
       <div className={s.about_box_wrapper}>
       <div className={[s.about_box, s.about_socond].join(" ") }><h1>{t("about.ourFounding")}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur doloribus delectus itaque ipsa commodi saepe dignissimos facilis, a perferendis quasi aliquid illo esse nostrum aperiam, veniam nesciunt exercitationem aliquam nihil. Nesciunt quia ea minus error at modi dolores nostrum. Rerum doloribus, quos repellendus magnam eum excepturi sunt tempore vel saepe maiores voluptatibus illum quis eos doloremque optio architecto molestiae.</p>
          </div>
          <div className={[s.about_box, s.about_first].join(" ")}><img src={img5} alt="" /></div>
       </div>
         <div className={s.about_name}>
            <h1 className='about_text'>{t("about.mustangName")}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos commodi ipsa quam repellat error sed quisquam, unde aliquid reprehenderit! Mollitia assumenda molestiae excepturi cumque. Architecto nostrum minus perspiciatis perferendis reiciendis necessitatibus quaerat vero, fugiat consequuntur est explicabo et harum a incidunt accusamus porro ad amet? Nesciunt neque ad atque magnam.</p>
         </div>
    </div>
  )
}

export default About