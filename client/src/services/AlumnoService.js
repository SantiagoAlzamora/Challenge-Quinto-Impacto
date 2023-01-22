import axios from "axios";
import {API_URL, BASE_HEADERS} from "./index"

const API_ALUMNOS = `${API_URL}/alumnos`


export async function saveAlumno(alumno){
    const res = await axios.post(`${API_ALUMNOS}`,alumno,BASE_HEADERS)
    console.log(res);
}

export async function addCursosAlumno(idAlumno,cursos){
    const res = await axios.put(`${API_ALUMNOS}/cursos/${idAlumno}`,cursos,BASE_HEADERS)
    console.log(res);
}

export async function getAlumnosFromCurso(idCurso){
    const res = await axios.get(`${API_URL}/cursos/${idCurso}`)
    console.log(res);
}

export async function getAllAlumnos(){
    const res = await axios.get(API_ALUMNOS)
    console.log(res);
}

export async function getAlumnoById(idAlumno){
    const res = axios.get(`${API_ALUMNOS}/${idAlumno}`)
    console.log(res);
}

export async function updateAlumno(idAlumno,alumno){
    const res = await axios.put(`${API_ALUMNOS}/${idAlumno}`,alumno,BASE_HEADERS)
    console.log(res);
}