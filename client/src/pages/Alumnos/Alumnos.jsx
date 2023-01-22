import React, { useRef, useState } from 'react'
import { getAlumnosByName } from '../../services/AlumnoService'

export default function Alumnos() {

  const inputNameAlumno = useRef()
  const [alumnosByName, setAlumnosByName] = useState([])

  async function handleClickSearch() {
    const res = await getAlumnosByName(inputNameAlumno.current.value)
    console.log(res);
  }
  return (
    <>
      <div>
        <input type="text" ref={inputNameAlumno} placeholder='Buscar por nombre' />
        <button onClick={handleClickSearch}>Buscar</button>
      </div>
      <div>
        {alumnosByName.length > 0 && alumnosByName.map((alumno, i) => <span>{alumno.nombre}</span>)}
      </div>
    </>
  )
}
