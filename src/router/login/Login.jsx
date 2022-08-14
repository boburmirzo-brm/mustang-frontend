import React, { useState } from 'react'
import s from './Login.module.css'
import { Link } from 'react-router-dom'

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  // console.log(user);
  return (
    <div className={s.login}>
      <div className={s.card}>
        <h1 className={s.title}>login</h1>
        <div className={[s.modal, s.suc].join(' ')}>
          <p className={s.modal_text}>Lorem, ipsum.</p>
        </div>
        <form className={s.form}>
          <label htmlFor="inp_name" className={s.input_text}>Sizning usernamingiz:</label>
          <input 
          value={user.username}
          onChange={({target}) => setUser({...user, username: target.value})}
          type="text" 
          id='inp_name' 
          className={s.inp} 
          />
          <label htmlFor="inp_pw" className={s.input_text}>Sizning parolingiz:</label>
          <input 
          value={user.password}
          onChange={({target}) => setUser({...user, password: target.value})}
          type="password" 
          id='inp_pw' 
          className={s.inp} 
          />
          <button className={s.submit_btn}>Login</button>
        </form>
        <div className={s.border}></div>
        <Link to='/' className={s.backhome_btn}>Asosiy sahifaga qaytish</Link>
      </div>
    </div>
  )
}

export default Login