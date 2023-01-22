import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { getAlumnoById } from '../../services/AlumnoService'

export default function PerfilAlumno() {

    const id = useParams();

    useEffect(()=>{
        getAlumnoById(id).then(res =>{
            console.log(res);
        })
    },[id])
    return (
        <div>

        </div>
    )
}
