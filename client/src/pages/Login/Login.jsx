import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../context/AuthContext'
import { loginUser } from '../../services/UserService'

export default function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()
  const {data}=useContext(AuthContext)
  useEffect(()=>{
    if(data.user){
      navigate("/")
    }
  })

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const email = emailRef.current.value
      const password = passwordRef.current.value
      const user = await loginUser(email, password)
      dispatch({
        type: "LOGIN",
        payload: user
      })
      navigate("/")
    } catch (error) {
      console.log(error);
    }

  }

  return (

    <form onSubmit={handleLogin}>
      <input type="email" ref={emailRef} placeholder='email' />
      <input type="password" ref={passwordRef} placeholder='password' />
      <button type='submit'>Login</button>
    </form>

  )
}
