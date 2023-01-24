import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProfesorById } from '../../services/ProfesorService';
import "./perfilProfesor.scss"

export default function PerfilProfesor() {
    const {id} = useParams();
    const [profesor,setProfesor] = useState({})

    useEffect(()=>{
        getProfesorById(id).then(res => setProfesor(res))
    },[id])
    return (
        <div className='perfil-profesor'>

            <section className='info'>
                <span>Nombre: {profesor.nombre}</span>
                <span>Apellido: {profesor.apellido}</span>
                <span>Email: {profesor.email}</span>
            </section>
            <section className='cursos'>
                {
                    profesor.cursos?.length > 0 ? profesor.cursos.map((curso,i)=> <p key={i}>{curso.nombre}</p>)
                    : <Link className='add-cursos-link' to={`/profesor/add-cursos/${id}`}>Inscribirse a cursos</Link>
                }
            </section>

            {profesor.cursos?.length > 0 && <Link className='add-cursos-link' to={`/profesor/add-cursos/${id}`}>Inscribirse a cursos</Link>}

        </div>
    )
}
