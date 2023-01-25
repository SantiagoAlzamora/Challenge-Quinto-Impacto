import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllProfesores, getProfesorByName } from '../../services/ProfesorService';
import "./profesores.scss"

export default function Profesores() {
    const inputNameProfesor = useRef()
    const [profesoresByName, setProfesoresByName] = useState([])

    async function handleClickSearch() {
        const res = await getProfesorByName(inputNameProfesor.current.value)
        setProfesoresByName(res)
    }

    useEffect(()=>{
        getAllProfesores().then(res=>setProfesoresByName(res))
      },[])
    return (
        <div className='profesores'>
            <div className='search'>
                <input type="search" ref={inputNameProfesor} placeholder='Buscar por nombre' />
                <button onClick={handleClickSearch}>Buscar</button>
            </div>
            {profesoresByName.length > 0 &&
                <div className='list'>
                    Profesores
                    {profesoresByName.map((profesor, i) =>
                        <Link key={i} to={`/profesor/${profesor.id}`}>
                            <p >
                                <span>{profesor.nombre}</span> <span>{profesor.email}</span>
                            </p>
                        </Link>
                    )}
                </div>
            }
        </div>
    )
}
