import React, { useState } from 'react'
import Alumnos from '../Alumnos/Alumnos'
import Profesores from '../Profesores/Profesores'
import Cursos from '../Cursos/Cursos'
import FormCurso from '../../components/FormCurso'
import './admin.scss'

export default function Admin() {

  const [show, setShow] = useState({
    alumnos:true,
    profesores:false,
    cursos:false,
    addCurso:false
  })

  

  return (
    <div className='admin'>
        <nav className='navbar'>
          <span onClick={()=>setShow({
            alumnos:true,
            profesores:false,
            cursos:false,
            addCurso:false
          })}>Alumnos</span>
          <span
          onClick={()=>setShow({
            alumnos:false,
            profesores:true,
            cursos:false,
            addCurso:false
          })}>Profesores</span>
          <span
          onClick={()=>setShow({
            alumnos:false,
            profesores:false,
            cursos:true,
            addCurso:false
          })}>Cursos</span>
          <span onClick={()=>setShow({
            alumnos:false,
            profesores:false,
            cursos:false,
            addCurso:true
          })}>Add curso</span>
        </nav>

        {show.alumnos && <Alumnos />}
        {show.profesores && <Profesores />}
        {show.cursos && <Cursos />}
        {show.addCurso && <FormCurso />}
    </div>
  )
}
