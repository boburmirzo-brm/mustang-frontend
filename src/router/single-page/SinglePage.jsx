import React,{useState} from 'react'
import s from "./SinglePage.module.css"
import {PRODUCTS} from "../../static/static"
import {IoIosArrowForward} from "react-icons/io"
import { BsCart3 } from "react-icons/bs"
import {AiOutlineHeart,AiOutlineEye,AiFillStar,AiOutlineStar } from "react-icons/ai"
import star3 from "../../assets/star-3.png"
import star4 from "../../assets/star-4.png"
import star5 from "../../assets/star-5.png"
// import blackStar3 from "../../assets/black-star-3.png"
// import blackStar4 from "../../assets/black-star-4.png"
// import blackStar5 from "../../assets/black-star-5.png"

import blackStar3 from "../../assets/black-star-3.png"
import blackStar4 from "../../assets/black-star-4.png"
import blackStar5 from "../../assets/black-star-5.png"
import season from "../../assets/season.png"
import colorIcon from "../../assets/color-icon.png"
import size from "../../assets/size-img.png"
function SinglePage({match}) {
  const singlePro = PRODUCTS.filter(pro=> pro._id === +match.params.id)[0]
  const  [mainImg,setMainImg] = useState(singlePro.urls[0])
  return (
    <div className={s.singlePro_Main}>
      <div className={s.SinglePage}>

        <div className={s.singleProMain}>

           <div  className={s.imgs_container}>
          <div className={s.main_img_container}>
            <img src={mainImg} alt="" />
          </div>
          <div className={s.all_imgs_container}>
            {
              singlePro?.urls?.map((img,inx) =>
                <div key={inx} className={`${s.one_img_container} ${mainImg ===img? s.checked_img_border: ""}`}>
                  <img 
                  onClick={()=>{
                    setMainImg(img)
                  }}
                  src={img} alt="" />
                </div>
              )
            }
          </div>
           </div>


           <div  className={s.info_container}>

            <div className={s.info_title}>
                 <h1>{singlePro.title}</h1>
                 <div className={s.brand}><h3>{singlePro.brand}</h3></div>
            </div>
           <div className={s.price_container}>
             <div className={s.stars}>
             <div className={s.product_stars}> 
                {new Array(singlePro.stars).fill("").map((_, inx)=><AiFillStar key={inx}/>)} 
                {new Array(5 - singlePro.stars).fill("").map((_,inx)=><AiOutlineStar key={inx}/>)}
            </div>
             </div>
             <h1>{singlePro.price} $</h1>
           </div>
            <p className={s.pro_desk}>{singlePro.desc}</p>

            <div className={s.pro_states}>
              <IoIosArrowForward/>  <h3>{  singlePro.type  }  </h3>
            </div>
            <div className={s.pro_states}>
                <img src={season} alt="" />   <h3>{  singlePro.season  }  </h3>
            </div>
            <div className={s.pro_states}>
              <IoIosArrowForward />  <h3>{  singlePro.productId  }  </h3>
            </div>

            <div className={s.pro_states}>
              <img src={colorIcon} alt="" />  <h3>{  singlePro.color  }  </h3>
            </div>
           <div className={s.size_container}>
           <img className={s.size_img} src={size} alt="" />  <div className={s.sizes}><h3>{singlePro.size}</h3></div>

           </div>
            <div className={s.btns_container}>
              <div className={s.add_to_card}> <BsCart3 /> <h3>Add to Cart</h3> </div>
              <div className={s.like}> <AiOutlineHeart /> <h3>Like</h3> </div>
            </div>
           </div>
        </div>
        
        {/* <div className={s.singlePro_extra_pro}>
          <h1 className={s.looklike_pro}>O'xshash mahsulotlar</h1>
          <div className={s.looklike_products}>
            {
              PRODUCTS?.map(pro=> <div className={s.all_pro_card} key={pro._id} > 
                <div className={s.pro_card_main_img}>
                  <img src={pro.urls[0]} alt="" />
                </div>
                <h1>{pro.title}</h1>
                <h1>{pro.price} $</h1>
                <div className={s.stars}>
                <div className={s.product_stars}> 
                  {new Array(pro.stars).fill("").map((_, inx)=><AiFillStar key={inx}/>)} 
                  {new Array(5 - pro.stars).fill("").map((_,inx)=><AiOutlineStar key={inx}/>)}
                </div>

                 </div>

                  <div className={s.looklike_products_buttons}>
                    <div className={s.add_to_card}> <BsCart3 /> <h3>Add to Cart</h3> </div>
                    <div className={s.looklike_pro_like}>
                      <AiOutlineHeart/>
                    </div>
                    <div className={s.views}>
                      <AiOutlineEye/>
                      <span>{pro.view}</span>
                    </div>
                  </div>
              
             </div>)
            }
          </div>
        </div> */}
        
      </div>
    </div>
    
  )
}

export default SinglePage