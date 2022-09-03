import React from 'react'
import s from "./MainLoader.module.css"

function MainLoader() {
  return (
    <div className={s.main_loader}>
      <div className={s.lds_grid}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default MainLoader