import React from 'react'
import s from "../SinglePage.module.css"

function SingeleSkeleton() {
  return (
    <>
        <div className={s.skeleton_image}></div>
        <div className={s.skeleton_bady}>
            <div className={s.skeleton_item}></div>
            <div style={{width:"60%", height: "30px"}} className={s.skeleton_item}></div>
            <div style={{width:"50%", height: "24px"}} className={s.skeleton_item}></div>
            <div style={{width:"40%", height: "24px"}} className={s.skeleton_item}></div>
            <div style={{width:"40%", height: "24px"}} className={s.skeleton_item}></div>
        </div>
    </>
  )
}

export default SingeleSkeleton