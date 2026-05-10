package com.agata.automotivo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import com.agata.automotivo.model.Veiculo;
import com.agata.automotivo.service.VeiculoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoService service;

    // LISTAR TODOS
    @GetMapping
    public List<Veiculo> listar() {

        return service.listarTodos();
    }

    // FILTRAR POR MARCA
    @GetMapping("/marca/{marca}")
    public List<Veiculo> buscarPorMarca(
            @PathVariable String marca) {

        return service.buscarPorMarca(marca);
    }

    // FILTRAR POR ANO
    @GetMapping("/ano/{ano}")
    public List<Veiculo> buscarPorAno(
            @PathVariable int ano) {

        return service.buscarPorAno(ano);
    }

    // FILTRAR POR PREÇO
    @GetMapping("/preco/{preco}")
    public List<Veiculo> buscarPorPreco(
            @PathVariable double preco) {

        return service.buscarPorPreco(preco);
    }

    // BUSCAR POR ID
    @GetMapping("/{id}")
    public Veiculo buscarPorId(
            @PathVariable @NonNull Long id) {

        return service.buscarPorId(id);
    }

    // CADASTRAR
    @PostMapping
    public Veiculo cadastrar(
            @Valid @RequestBody Veiculo veiculo) {

        return service.cadastrar(veiculo);
    }

    // ATUALIZAR
    @PutMapping("/{id}")
    public Veiculo atualizar(
            @PathVariable @NonNull Long id,
            @Valid @RequestBody Veiculo dados) {

        return service.atualizar(id, dados);
    }

    // DELETAR
    @DeleteMapping("/{id}")
    public void deletar(
            @PathVariable @NonNull Long id) {

        service.deletar(id);
    }
}