/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.challenge.quinto.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author santi
 */
@Entity
@Getter
@Setter
public class Alumno extends Usuario{
    
    private String nombre;
    private Integer edad;
    
    @Temporal(TemporalType.DATE)
    private Date fechaDeNacimiento;
    private String historia;
    
    @OneToMany(cascade = CascadeType.ALL)
    private List<Curso> cursos;
    
}
