import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCursoById } from '../../services/CursoService';
import "./curso.scss"

export default function Curso() {
  const {id} = useParams();
    const [curso,setCurso] = useState({})

    useEffect(()=>{
        getCursoById(id).then(res => setCurso(res))
    },[id])
    return (
        <div className='curso'>

            <section className='info'>
                <span>Nombre: {curso.nombre}</span>
                <span>Edad: {curso.turno}</span>
                <span>Horario: {curso.horario}</span>
            </section>
            <section className='alumnos'>
              <p>Profesor : {curso.profesor ?  curso.profesor.nombre : "Este curso no tiene profesor"}</p>
                {
                    curso.alumnos.length > 0 ? curso.alumnos.map((alumno,i)=> <p key={i}>{alumno.nombre}</p>)
                    : <p>El curso no tiene alumnos inscriptos</p>
                }
            </section>

        </div>
    )
}
