import React from 'react'
import s from "./Loader.module.css"

function Loader({config}) {
  const {color, size, display} = config ? config : {}
  return (
    <div style={{
        borderColor:`${color ? color : "#72493F"} transparent transparent transparent`,
        width: size,
        height: size,
        display: `${display ? display : "block"}`
    }} className={s.lds_ring}><div></div><div></div><div></div><div></div></div>
  )
}

export default Loader