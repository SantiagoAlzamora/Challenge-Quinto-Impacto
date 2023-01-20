/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.challenge.quinto.controllers;

import com.challenge.quinto.entities.dtos.ProfesorDTO;
import com.challenge.quinto.services.ProfesorService;
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
@RequestMapping("/profesores")
public class ProfesorController {
    @Autowired
    private ProfesorService profesorService;

    @GetMapping
    public List<ProfesorDTO> getAllProfesores() {
        try {
            return profesorService.getAllProfesores();
        } catch (Exception e) {
            return null;
        }
        
    }

    @GetMapping("/{id}")
    public ProfesorDTO getProfesorById(@PathVariable Integer id) {
        try {
            return profesorService.getProfesorById(id);
        } catch (Exception e) {
            return null;
        }
        
    }

    @PostMapping
    public ProfesorDTO createProfesor(@RequestBody ProfesorDTO profesorDTO) {
        try {
            return profesorService.createProfesor(profesorDTO);
        } catch (Exception e) {
            return null;
        }
        
    }

    @PutMapping("/{id}")
    public ProfesorDTO updateProfesor(@PathVariable Integer id, @RequestBody ProfesorDTO profesorDTO) {
        try {
            return profesorService.updateProfesor(id, profesorDTO);
        } catch (Exception e) {
            return null;
        }
        
    }

    @DeleteMapping("/{id}")
    public String deleteProfesor(@PathVariable Integer id) {
        try {
            profesorService.deleteProfesor(id);
            return "Profesor deleted successfuly";
        } catch (Exception e) {
            return null;
        }
        
    }
}
