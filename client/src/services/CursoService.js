import axios from "axios";
import {API_URL, BASE_HEADERS} from "./index"

const API_CURSOS = `${API_URL}/profesores`


export async function saveProfesor(curso){
    const res = await axios.post(`${API_CURSOS}`,curso,BASE_HEADERS)
    console.log(res);
}

export async function deleteProfesorFromCurso(idCurso){
    await axios.patch(`${API_CURSOS}/delete-profesor/${idCurso}`)
}

export async function getAllCursos(){
    const res = await axios.get(API_CURSOS)
    console.log(res);
}

export async function getCursoById(idCurso){
    const res = axios.get(`${API_CURSOS}/${idCurso}`)
    console.log(res);
}

export async function updateCurso(idCurso,curso){
    const res = await axios.put(`${API_CURSOS}/${idCurso}`,curso,BASE_HEADERS)
    console.log(res);
}