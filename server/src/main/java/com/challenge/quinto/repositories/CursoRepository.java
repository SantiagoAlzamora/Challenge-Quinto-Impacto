/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.challenge.quinto.repositories;

import com.challenge.quinto.entities.Curso;
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
public interface CursoRepository extends JpaRepository<Curso, Integer>{
    
    @Query("SELECT c FROM Curso c WHERE c.nombre LIKE :nombre%")
    public List<Curso> getCursosByNombre(@Param("nombre") String nombre);
}
