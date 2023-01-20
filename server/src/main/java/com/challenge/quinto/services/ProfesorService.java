/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.challenge.quinto.services;

import com.challenge.quinto.entities.Profesor;
import com.challenge.quinto.entities.converters.ProfesorConverter;
import com.challenge.quinto.entities.dtos.ProfesorDTO;
import com.challenge.quinto.repositories.ProfesorRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author santi
 */
@Service
public class ProfesorService {

    @Autowired
    private ProfesorRepository profesorRepository;

    @Autowired
    private ProfesorConverter profesorConverter;
    
    @Transactional
    public List<ProfesorDTO> getAllProfesores() {
        List<Profesor> profesores = profesorRepository.findAll();
        return profesorConverter.toDTO(profesores);
    }
    
    @Transactional
    public ProfesorDTO getProfesorById(Integer id) {
        Profesor profesor = profesorRepository.findById(id).orElse(null);
        return profesorConverter.toDTO(profesor);
    }
    
    @Transactional
    public ProfesorDTO createProfesor(ProfesorDTO profesorDTO) {
        Profesor profesor = profesorConverter.fromDTO(profesorDTO);
        profesor = profesorRepository.save(profesor);
        return profesorConverter.toDTO(profesor);
    }
    
    @Transactional
    public ProfesorDTO updateProfesor(Integer id, ProfesorDTO profesorDTO) {
        Profesor profesor = profesorRepository.findById(id).orElse(null);
        if (profesor != null) {
            profesor = profesorConverter.fromDTO(profesorDTO);
            profesor.setId(id);
            profesor = profesorRepository.save(profesor);
            return profesorConverter.toDTO(profesor);
        }
        return null;
    }
    
    @Transactional
    public void deleteProfesor(Integer id) {
        profesorRepository.deleteById(id);
    }

}
