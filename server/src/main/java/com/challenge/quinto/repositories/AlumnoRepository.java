/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.challenge.quinto.repositories;

import com.challenge.quinto.entities.Alumno;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author santi
 */
@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Integer> {
    
    @Query("SELECT a FROM Curso c JOIN c.alumnos a WHERE  c.id = :idCurso AND a.nombre LIKE %:word%")
    public List<Alumno> getAlumnosByWordFromCurso(@Param("idCurso") int idCurso, @Param("word") String word);
    
    @Query("SELECT a FROM Alumno a WHERE a.nombre = :nombre")
    public Alumno getAlumnoByNombre(@Param("nombre") String nombre);
    
}
