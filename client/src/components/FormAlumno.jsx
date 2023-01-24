import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { saveAlumno } from '../services/AlumnoService'

export default function FormAlumno() {

  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()
  const nameRef = useRef()
  const ageRef = useRef()
  const dateRef = useRef()
  const descriptionRef = useRef()

  async function handleSaveAlumno(e) {
    e.preventDefault()
    const alumno = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      nombre: nameRef.current.value,
      edad: ageRef.current.value,
      fechaDeNacimiento: dateRef.current.value,
      historia: descriptionRef.current.value,
      cursos: []
    }
    console.log(alumno);
    const res = await saveAlumno(alumno)
    if (res) {
      navigate("/login")
    } else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 5000)

    }
  }

  return (
    <div className='registro'>
      <h3>Registro Alumno</h3>
      <form className='form-alumno' onSubmit={(e) => handleSaveAlumno(e)}>
        <input type="email" ref={emailRef} placeholder='example@example.com' />
        <input type="password" ref={passwordRef} placeholder='Password' />
        <input type="text" ref={nameRef} placeholder='Name' />
        <input type="number" ref={ageRef} placeholder='Age' />
        <input type="date" ref={dateRef} />
        <textarea placeholder='Description...' ref={descriptionRef}></textarea>
        <button type='submit'>Register</button>
      </form>
      {error && <span>Hubo un error al registrarse</span>}
      <span>Tenes una cuenta <Link to={"/login"}>Login</Link></span>
    </div>
  )
}
