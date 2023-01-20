/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.challenge.quinto.entities.converters;

import com.challenge.quinto.entities.Curso;
import com.challenge.quinto.entities.dtos.CursoDTO;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author santi
 */
public class CursoConverter {
    
    @Autowired
    private ProfesorConverter profesorConverter;
    
    @Autowired
    private AlumnoConverter alumnoConverter;
    
    public CursoDTO toDTO(Curso curso) {
        CursoDTO cursoDTO = new CursoDTO();
        cursoDTO.setId(curso.getId());
        cursoDTO.setNombre(curso.getNombre());
        cursoDTO.setProfesor(profesorConverter.toDTO(curso.getProfesor()));
        cursoDTO.setTurno(curso.getTurno());
        cursoDTO.setHorario(curso.getHorario());
        cursoDTO.setAlumnos(alumnoConverter.toDTO(curso.getAlumnos()));
        return cursoDTO;
    }
    public Curso fromDTO(CursoDTO cursoDTO) {
        Curso curso = new Curso();
        curso.setId(cursoDTO.getId());
        curso.setNombre(cursoDTO.getNombre());
        curso.setProfesor(profesorConverter.fromDTO(cursoDTO.getProfesor()));
        curso.setTurno(cursoDTO.getTurno());
        curso.setHorario(cursoDTO.getHorario());
        curso.setAlumnos(alumnoConverter.fromDTO(cursoDTO.getAlumnos()));
        return curso;
    }
    
    public List<CursoDTO> toDTO(List<Curso> cursos) {
        List<CursoDTO> cursosDTO = new ArrayList<>();
        for (Curso curso : cursos) {
            cursosDTO.add(toDTO(curso));
        }
        return cursosDTO;
    }
    public List<Curso> fromDTO(List<CursoDTO> cursosDTO) {
        List<Curso> cursos = new ArrayList<>();
        for (CursoDTO cursoDTO : cursosDTO) {
            cursos.add(fromDTO(cursoDTO));
        }
        return cursos;
    }
}
