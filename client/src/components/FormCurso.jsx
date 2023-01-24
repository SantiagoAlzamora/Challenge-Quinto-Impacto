import React, { useRef } from 'react'
import { saveCurso } from '../services/CursoService';

export default function FormCurso() {
  const inputName = useRef()
  const inputHorario = useRef()
  const inputTurno = useRef()

  async function crearCurso(e){
    e.preventDefault();
    try {
      const curso = {
        nombre:inputName.current.value,
        horario:inputHorario.current.value,
        turno:inputTurno.current.value,
        profesor:null,
        alumnos:[]
      }
      saveCurso(curso)
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <form onSubmit={crearCurso}>
        <input type="text" ref={inputName} placeholder='Nombre del curso'/>
        <input type="text" ref={inputHorario} placeholder='horario '/>
        <select ref={inputTurno}>
            <option value="">Turno</option>
            <option value="MAÑANA">Mañana</option>
            <option value="TARDE">Tarde</option>
            <option value="NOCHE">Noche</option>
        </select>
        <button type="submit">Crear curso</button>
    </form>
  )
}
