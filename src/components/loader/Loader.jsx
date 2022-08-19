import React from 'react'
import s from "./Loader.module.css"

function Loader({config}) {
  const {color, size} = config ? config : {}
  return (
    <div style={{
        borderColor:`${color ? color : "#72493F"} transparent transparent transparent`,
        width: size,
        height: size,
    }} className={s.lds_ring}><div></div><div></div><div></div><div></div></div>
  )
}

export default Loader