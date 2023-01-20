/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.challenge.quinto.controllers;

import com.challenge.quinto.entities.dtos.AlumnoDTO;
import com.challenge.quinto.services.AlumnoService;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author santi
 */
@RestController
@RequestMapping("/alumnos")
public class AlumnoController {
    @Autowired
    private AlumnoService alumnoService;
    
    @Autowired
    private CursoService cursoService;

    @GetMapping
    public List<AlumnoDTO> getAllAlumnos() {
        try {
            return alumnoService.getAllAlumnos();
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }  
    }
    
    @GetMapping("/search")
    public AlumnoDTO getAlumnoByNombre(@RequestParam String nombre) {
        try {
            return alumnoService.getAlumnoByNombre(nombre);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }  
    }
    
    @GetMapping("/search/{idCurso}")
    public List<AlumnoDTO> getAlumnosFromCursoById(@PathVariable Integer idCurso){
        try {
            return cursoService.getCursoById(idCurso).getAlumnos();
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping("/{id}")
    public AlumnoDTO getAlumnoById(@PathVariable Integer id) {
        try {
            return alumnoService.getAlumnoById(id);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }
        
    }

    @PostMapping
    public AlumnoDTO createAlumno(@RequestBody AlumnoDTO alumnoDTO) {
        try {
            return alumnoService.createAlumno(alumnoDTO);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }
        
    }

    @PutMapping("/{id}")
    public AlumnoDTO updateAlumno(@PathVariable Integer id, @RequestBody AlumnoDTO alumnoDTO) {
        try {
            return alumnoService.updateAlumno(id, alumnoDTO);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }
        
    }

    @DeleteMapping("/{id}")
    public String deleteAlumno(@PathVariable Integer id) {
        try {
            alumnoService.deleteAlumno(id);
            return "Alumno deleted successfuly";
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return null;
        }
        
    }
}
