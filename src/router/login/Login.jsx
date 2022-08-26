import React, { useState } from 'react'
import s from './Login.module.css'
import { Link } from 'react-router-dom'
import axios from "../../api/axios"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import {SIGN_IN} from "../../context/action/actionTypes"

function Login() {
  const [admin, setAdmin] = useState({
    username: "",
    password: ""
  })
  const [result, setResult] = useState({msg:"", state: false, user: {}})
  const [loading, setLoading] = useState(false)
  const [anime, setAnime] = useState(false)

  const history = useHistory()

  const dispatch = useDispatch()

  const signIn = (e)=>{
    e.preventDefault()
    setLoading(true)
    setAnime(true)
    setTimeout(()=>{
        setAnime(false)
    },1000)

    axios.post("/sign-in", admin)
      .then(res=> {
        setResult(res.data)
        setLoading(false)
        if(res.data.state){
          setAdmin({
            username: "",
            password: ""
          })
          if(res.data.user.token){
            dispatch({type:SIGN_IN, payload: res.data.user })
            history.push("/admin")
          }
      }
      })
      .catch(err=> console.log(err))
  }
  return (
    <div className={s.login}>
      <div className={s.card}>
        <h1 className={s.title}>login</h1>
        <div className={result.msg ? result.state ? [s.modal, s.suc,  anime ? s.anime : ""].join(' '): [s.modal, s.err,  anime ? s.anime : ""].join(' '): s.modal} >
            <p>{result.msg}</p>
        </div>
        <form onSubmit={signIn} className={s.form}>
          <label htmlFor="inp_name" className={s.input_text}>Sizning usernamingiz:</label>
          <input 
          value={admin.username}
          onChange={({target}) => setAdmin({...admin, username: target.value})}
          type="text" 
          id='inp_name' 
          className={s.inp} 
          />
          <label htmlFor="inp_pw" className={s.input_text}>Sizning parolingiz:</label>
          <input 
          value={admin.password}
          onChange={({target}) => setAdmin({...admin, password: target.value})}
          type="password" 
          id='inp_pw' 
          className={s.inp} 
          />
          <button disabled={loading} className={s.submit_btn}>{loading ? "Loading...": "Login"}</button>
        </form>
        <div className={s.border}></div>
        <Link to='/' className={s.backhome_btn}>Asosiy sahifaga qaytish</Link>
      </div>
    </div>
  )
}

export default Login