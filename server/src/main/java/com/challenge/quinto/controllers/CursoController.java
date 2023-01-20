/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.challenge.quinto.controllers;

import com.challenge.quinto.entities.dtos.CursoDTO;
import com.challenge.quinto.services.CursoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author santi
 */
@RestController
@RequestMapping("/cursos")
public class CursoController {
    @Autowired
    private CursoService cursoService;

    @GetMapping
    public List<CursoDTO> getAllCursos() {
        try {
            return cursoService.getAllCursos();
        } catch (Exception e) {
            return null;
        }
        
    }

    @GetMapping("/{id}")
    public CursoDTO getCursoById(@PathVariable Integer id) {
        try {
            return cursoService.getCursoById(id);
        } catch (Exception e) {
            return null;
        }
        
    }

    @PostMapping
    public CursoDTO createCurso(@RequestBody CursoDTO cursoDTO) {
        try {
            return cursoService.createCurso(cursoDTO);
        } catch (Exception e) {
            return null;
        }
        
    }

    @PutMapping("/{id}")
    public CursoDTO updateCurso(@PathVariable Integer id, @RequestBody CursoDTO cursoDTO) {
        try {
            return cursoService.updateCurso(id, cursoDTO);
        } catch (Exception e) {
            return null;
        }
        
    }

    @DeleteMapping("/{id}")
    public String deleteCurso(@PathVariable Integer id) {
        try {
            cursoService.deleteCurso(id);
        return "Curso deleted successfuly";
        } catch (Exception e) {
            return null;
        }
        
    }
}
