import axios from "axios";
import {API_URL, BASE_HEADERS} from "./index"

const API_PROFESORES = `${API_URL}/profesores`


export async function saveProfesor(profesor){
    const res = await axios.post(`${API_PROFESORES}`,profesor,BASE_HEADERS)
    console.log(res);
}

export async function addCursosProfesor(idProfesor,cursos){
    const res = await axios.patch(`${API_PROFESORES}/${idProfesor}`,cursos,BASE_HEADERS)
    console.log(res);
}

export async function getProfesorFromCurso(idCurso){
    const res = await axios.get(`${API_URL}/cursos/${idCurso}`)
    console.log(res);
}

export async function getAllProfesores(){
    const res = await axios.get(API_PROFESORES)
    console.log(res);
}

export async function getProfesorById(idProfesor){
    const res = axios.get(`${API_PROFESORES}/${idProfesor}`)
    console.log(res);
}

export async function updateProfesor(idProfesor,profesor){
    const res = await axios.put(`${API_PROFESORES}/${idProfesor}`,profesor,BASE_HEADERS)
    console.log(res);
}