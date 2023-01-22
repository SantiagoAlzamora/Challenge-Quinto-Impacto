/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.challenge.quinto.controllers;

import com.challenge.quinto.entities.Alumno;
import com.challenge.quinto.entities.Credencial;
import com.challenge.quinto.entities.Profesor;
import com.challenge.quinto.entities.Usuario;
import com.challenge.quinto.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author santi
 */
@RestController
@RequestMapping
@CrossOrigin("*")
public class MainController {
    
    @Autowired
    private UsuarioService usuarioService;
    
    @PostMapping("/login")
    public Object index(@RequestBody Credencial credencial){
        try {
            Usuario usuario = usuarioService.loginUsuario(credencial);
            switch(usuario.getRole().toString()){
                case "ALUMNO":
                    return (Alumno) usuario;
                case "PROFESOR":
                    return (Profesor) usuario;
                default :
                    return usuario;
            }
        } catch (Exception e) {
            return null;
        }
        
    }
    
}
