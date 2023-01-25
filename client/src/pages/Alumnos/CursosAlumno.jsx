import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { addCursosAlumno, getAlumnoById } from '../../services/AlumnoService';
import { getCursosWhereAlumnoNotIn } from '../../services/CursoService';
import "./perfilAlumno.scss"

export default function CursosAlumno() {
    const { id } = useParams();
    const [alumno, setAlumno] = useState({})
    const [cursosToShow, setCursosToShow] = useState([])
    const [cursosToAdd, setCursosToAdd] = useState([])

    useEffect(() => {
        getAlumnoById(id).then(res => setAlumno(res))
        getCursosWhereAlumnoNotIn(id).then(res => setCursosToShow(res))
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
        const res = await addCursosAlumno(id,cursosToAdd)
        setCursosToShow(await getCursosWhereAlumnoNotIn(id))
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            <div className='perfil-alumno'>

                <section className='info'>
                    <span>Nombre: {alumno.nombre}</span>
                    <span>Edad: {alumno.edad}</span>
                    <span>Nacimiento: {new Date(alumno.fechaDeNacimiento + 100000000).toLocaleDateString()}</span>
                    <span>Email: {alumno.email}</span>
                    <span>Historia: {alumno.historia}</span>
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