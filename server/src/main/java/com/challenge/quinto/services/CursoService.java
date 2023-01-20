/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.challenge.quinto.services;

import com.challenge.quinto.entities.Curso;
import com.challenge.quinto.entities.converters.CursoConverter;
import com.challenge.quinto.entities.dtos.CursoDTO;
import com.challenge.quinto.repositories.CursoRepository;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author santi
 */
@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private CursoConverter cursoConverter;
    
    @Transactional
    public List<CursoDTO> getAllCursos() {
        List<Curso> cursos = cursoRepository.findAll();
        return cursoConverter.toDTO(cursos);
    }
    
    @Transactional
    public CursoDTO getCursoById(Integer id) {
        Curso curso = cursoRepository.findById(id).orElse(null);
        return cursoConverter.toDTO(curso);
    }
    
    @Transactional
    public CursoDTO createCurso(CursoDTO cursoDTO) {
        Curso curso = cursoConverter.fromDTO(cursoDTO);
        curso = cursoRepository.save(curso);
        return cursoConverter.toDTO(curso);
    }
    
    @Transactional
    public CursoDTO updateCurso(Integer id, CursoDTO cursoDTO) {
        Curso curso = cursoRepository.findById(id).orElse(null);
        if (curso != null) {
            curso = cursoConverter.fromDTO(cursoDTO);
            curso.setId(id);
            curso = cursoRepository.save(curso);
            return cursoConverter.toDTO(curso);
        }
        return null;
    }
    
    public void deleteCurso(Integer id) {
        cursoRepository.deleteById(id);
    }

}
