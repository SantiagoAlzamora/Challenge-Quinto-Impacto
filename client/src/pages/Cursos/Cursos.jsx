import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { getCursosByName } from '../../services/CursoService';
import "./cursos.scss"
export default function Cursos() {
    const inputNameCurso = useRef()
    const [cursosByName, setCursosByName] = useState([])
  
    async function handleClickSearch() {
      const res = await getCursosByName(inputNameCurso.current.value)
      setCursosByName(res)
    }
    return (
      <div className='cursos'>
        <div className='search'>
          <input type="search" ref={inputNameCurso} placeholder='Buscar por nombre' />
          <button onClick={handleClickSearch}>Buscar</button>
        </div>
        {cursosByName.length > 0 &&
          <div className='list'>
            Cursos
            {cursosByName.map((curso, i) =>
              <Link to={`/curso/${curso.id}`} key={i}>
                <p >
                  <span>{curso.nombre}</span> <span>Alumnos: {curso.alumnos.length}</span>
                </p>
              </Link>
            )}
          </div>
        }
        
      </div>
    )
}
