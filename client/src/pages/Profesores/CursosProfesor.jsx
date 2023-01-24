import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCursosWhereProfesorNotIn } from '../../services/CursoService';
import { addCursosProfesor, getProfesorById } from '../../services/ProfesorService';
import "./perfilProfesor.scss"

export default function CursosProfesor() {
    const { id } = useParams();
    const [profesor, setProfesor] = useState({})
    const [cursosToShow, setCursosToShow] = useState([])
    const [cursosToAdd, setCursosToAdd] = useState([])

    useEffect(() => {
        getProfesorById(id).then(res => setProfesor(res))
        getCursosWhereProfesorNotIn(id).then(res => setCursosToShow(res))
    }, [id])

    function selectCurso(curso) {
        const index = cursosToAdd.indexOf(curso);
        if (index !== -1) {
            setCursosToAdd(cursosToAdd.slice(0, index).concat(cursosToAdd.slice(index + 1)));
        } else {
            setCursosToAdd(cursosToAdd.concat(curso));
        }
    }
    async function enviarCursos(){
        const res = await addCursosProfesor(id,cursosToAdd)
        console.log(res);
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            <div className='perfil-alumno'>

                <section className='info'>
                    <span>Nombre: {profesor.nombre}</span>
                    <span>Edad: {profesor.apellido}</span>
                    <span>Email: {profesor.email}</span>
                </section>
                <section className='cursos'>
                    {
                        cursosToShow.length > 0 && cursosToShow.map((e, i) =>
                            <CursoAux key={i} curso={e} selectCurso={selectCurso} />
                        )}
                    
                </section>
            </div>
            <button onClick={enviarCursos}>Agregar cursos</button>
        </div>
    )
}

function CursoAux({ curso, selectCurso }) {

    const [selected, setSelected] = useState(false)

    return (
        <span className={selected ? "span selected" : "span"} onClick={() => {
            selectCurso(curso)
            setSelected(!selected)
        }}>{curso.nombre}</span>
    )
}
