import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAlumnosByName } from '../../services/AlumnoService'
import "./alumnos.scss"

export default function Alumnos() {

  const inputNameAlumno = useRef()
  const [alumnosByName, setAlumnosByName] = useState([])

  async function handleClickSearch() {
    const res = await getAlumnosByName(inputNameAlumno.current.value)
    console.log(res);
    setAlumnosByName(res)
  }
  return (
    <div className='alumnos'>
      <div className='search'>
        <input type="search" ref={inputNameAlumno} placeholder='Buscar por nombre' />
        <button onClick={handleClickSearch}>Buscar</button>
      </div>
      {alumnosByName.length > 0 &&
        <div className='list'>
          Alumnos
          {alumnosByName.map((alumno, i) =>
            <Link to={`/alumno/${alumno.id}`}>
              <p key={i}>
                <span>{alumno.nombre}</span> <span>{alumno.email}</span>
              </p>
            </Link>
          )}
        </div>
      }
      
    </div>
  )
}
