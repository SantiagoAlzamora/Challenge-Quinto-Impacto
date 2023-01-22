import React from 'react'

export default function FormAlumno() {
  return (
    <form className='form-alumno'>
      <input type="email" placeholder='example@example.com'/>
      <input type="password" placeholder='Password'/>
      <input type="text" placeholder='Name'/>
      <input type="number" placeholder='Age'/>
      <input type="date"/>
      <textarea placeholder='Description...'></textarea>
      <button type='submit'>Register</button>
    </form>
  )
}
