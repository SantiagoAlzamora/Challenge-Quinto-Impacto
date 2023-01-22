import React, { useRef } from 'react'

export default function FormAlumno() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const nameRef = useRef()
  const ageRef = useRef()
  const dateRef = useRef()
  const descriptionRef = useRef()

  async function saveAlumno(e) {
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
    const res = await saveAlumno(alumno)
    // console.log(res); 
  }

  return (
    <form className='form-alumno'>
      <input type="email" placeholder='example@example.com' />
      <input type="password" placeholder='Password' />
      <input type="text" placeholder='Name' />
      <input type="number" placeholder='Age' />
      <input type="date" />
      <textarea placeholder='Description...'></textarea>
      <button type='submit' onClick={saveAlumno}>Register</button>
    </form>
  )
}
