import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getAlumnoById } from '../../services/AlumnoService'
import "./perfilAlumno.scss"

export default function PerfilAlumno() {

    const { id } = useParams();
    const [alumno, setAlumno] = useState({})

    useEffect(() => {
        getAlumnoById(id).then(res => setAlumno(res))
    }, [id])


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
                        alumno.cursos?.length > 0 ? alumno.cursos.map((curso, i) => <span className='span' key={i}>{curso.nombre}</span>)
                            : <Link className='add-cursos-link' to={`/alumno/add-cursos/${id}`}>Inscribirse a cursos</Link>
                    }
                </section>
            </div>
            {alumno.cursos?.length > 0 && <Link className='add-cursos-link' to={`/alumno/add-cursos/${id}`}>Inscribirse a cursos</Link>}
        </div>
    )
}
