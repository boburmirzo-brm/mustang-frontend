import React from 'react'
import s from "../Product.module.css"

function Skeleton({count}) {
  return (
        new Array(count).fill("").map((_, inx)=> <div key={inx} className={s.product}>
            <div className={s.skeleton_image}></div>
            <div className={s.skeleton_title}></div>
            <div className={s.skeleton_desc}></div>
        </div>)
  )
}

export default Skeleton