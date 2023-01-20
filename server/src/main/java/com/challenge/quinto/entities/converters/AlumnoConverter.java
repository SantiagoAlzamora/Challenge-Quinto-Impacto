/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.challenge.quinto.entities.converters;

import com.challenge.quinto.entities.Alumno;
import com.challenge.quinto.entities.dtos.AlumnoDTO;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author santi
 */
public class AlumnoConverter {
    
    @Autowired
    private CursoConverter cursoConverter;
    
    public AlumnoDTO toDTO(Alumno alumno) {
        AlumnoDTO alumnoDTO = new AlumnoDTO();
        alumnoDTO.setId(alumno.getId());
        alumnoDTO.setEmail(alumno.getEmail());
        alumnoDTO.setPassword(alumno.getPassword());
        alumnoDTO.setRole(alumno.getRole());
        alumnoDTO.setNombre(alumno.getNombre());
        alumnoDTO.setEdad(alumno.getEdad());
        alumnoDTO.setFechaDeNacimiento(alumno.getFechaDeNacimiento());
        alumnoDTO.setHistoria(alumno.getHistoria());
        alumnoDTO.setCursos(cursoConverter.toDTO(alumno.getCursos()));
        return alumnoDTO;
    }
    public Alumno fromDTO(AlumnoDTO alumnoDTO) {
        Alumno alumno = new Alumno();
        alumno.setId(alumnoDTO.getId());
        alumno.setEmail(alumnoDTO.getEmail());
        alumno.setPassword(alumnoDTO.getPassword());
        alumno.setRole(alumnoDTO.getRole());
        alumno.setNombre(alumnoDTO.getNombre());
        alumno.setEdad(alumnoDTO.getEdad());
        alumno.setFechaDeNacimiento(alumnoDTO.getFechaDeNacimiento());
        alumno.setHistoria(alumnoDTO.getHistoria());
        alumno.setCursos(cursoConverter.fromDTO(alumnoDTO.getCursos()));
        return alumno;
    }
    
    public List<AlumnoDTO> toDTO(List<Alumno> alumnos) {
        List<AlumnoDTO> alumnosDTO = new ArrayList<>();
        for (Alumno alumno : alumnos) {
            alumnosDTO.add(toDTO(alumno));
        }
        return alumnosDTO;
    }
    public List<Alumno> fromDTO(List<AlumnoDTO> alumnosDTO) {
        List<Alumno> alumnos = new ArrayList<>();
        for (AlumnoDTO alumnoDTO : alumnosDTO) {
            alumnos.add(fromDTO(alumnoDTO));
        }
        return alumnos;
    }
    
}
