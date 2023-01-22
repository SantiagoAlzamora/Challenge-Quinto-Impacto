import React from 'react'

export default function FormCurso() {
  return (
    <form>
        <input type="text" placeholder='Nombre del curso'/>
        <input type="text" placeholder='horario '/>
        <select>
            <option value="">Turno</option>
            <option value="mañana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
        </select>
        <button type="submit">Crear curso</button>
    </form>
  )
}
