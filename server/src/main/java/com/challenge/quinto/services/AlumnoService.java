/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.challenge.quinto.services;

import com.challenge.quinto.entities.Alumno;
import com.challenge.quinto.entities.converters.AlumnoConverter;
import com.challenge.quinto.entities.dtos.AlumnoDTO;
import com.challenge.quinto.repositories.AlumnoRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author santi
 */
@Service
public class AlumnoService {
    
    @Autowired
    private AlumnoRepository alumnoRepository;

    @Autowired
    private AlumnoConverter alumnoConverter;

    @Transactional
    public List<AlumnoDTO> getAllAlumnos() {
        List<Alumno> alumnos = alumnoRepository.findAll();
        return alumnoConverter.toDTO(alumnos);
    }
    
    @Transactional
    public List<AlumnoDTO> getByCursoIdAndNameContaining(Integer idCurso, String nombre){
        List<Alumno> alumnos = alumnoRepository.findByCursoIdAndNameContaining(idCurso, nombre);
        return alumnoConverter.toDTO(alumnos);
    }

    @Transactional
    public AlumnoDTO getAlumnoById(Integer id) {
        Alumno alumno = alumnoRepository.findById(id).orElse(null);
        return alumnoConverter.toDTO(alumno);
    }
    
    @Transactional
    public AlumnoDTO getAlumnoByNombre(String nombre){
        Alumno alumno = alumnoRepository.getAlumnoByNombre(nombre);
        if (alumno != null) {
            return alumnoConverter.toDTO(alumno);
        }
        return null;
    }

    @Transactional
    public AlumnoDTO createAlumno(AlumnoDTO alumnoDTO) {
        Alumno alumno = alumnoConverter.fromDTO(alumnoDTO);
        alumno = alumnoRepository.save(alumno);
        return alumnoConverter.toDTO(alumno);
    }

    @Transactional
    public AlumnoDTO updateAlumno(Integer id, AlumnoDTO alumnoDTO) {
        Alumno alumno = alumnoRepository.findById(id).orElse(null);
        if (alumno != null) {
            alumno = alumnoConverter.fromDTO(alumnoDTO);
            alumno.setId(id);
            alumno = alumnoRepository.save(alumno);
            return alumnoConverter.toDTO(alumno);
        }
        return null;
    }

    @Transactional
    public void deleteAlumno(Integer id) {
        alumnoRepository.deleteById(id);
    }
}
