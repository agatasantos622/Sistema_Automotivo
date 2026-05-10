package com.agata.automotivo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agata.automotivo.model.Veiculo;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {

    // FILTRAR POR MARCA
    List<Veiculo> findByMarca(String marca);

    // FILTRAR POR ANO
    List<Veiculo> findByAno(int ano);

    // FILTRAR POR PREÇO MENOR QUE
    List<Veiculo> findByPrecoLessThanEqual(double preco);

}