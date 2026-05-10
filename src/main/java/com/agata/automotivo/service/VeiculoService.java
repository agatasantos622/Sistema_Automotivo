package com.agata.automotivo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.agata.automotivo.exception.ResourceNotFoundException;
import com.agata.automotivo.model.Veiculo;
import com.agata.automotivo.repository.VeiculoRepository;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository repository;

    // LISTAR TODOS
    public List<Veiculo> listarTodos() {
        return repository.findAll();
    }

    // FILTRAR POR MARCA
    public List<Veiculo> buscarPorMarca(String marca) {
        return repository.findByMarca(marca);
    }

    // FILTRAR POR ANO
    public List<Veiculo> buscarPorAno(int ano) {
        return repository.findByAno(ano);
    }

    // FILTRAR POR PREÇO
    public List<Veiculo> buscarPorPreco(double preco) {
        return repository.findByPrecoLessThanEqual(preco);
    }

    // BUSCAR POR ID
    public Veiculo buscarPorId(@NonNull Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Veículo não encontrado"));
    }

    // CADASTRAR
    public Veiculo cadastrar(Veiculo veiculo) {

        if (veiculo != null) {
            return repository.save(veiculo);
        }

        return null;
    }

    // ATUALIZAR
    public Veiculo atualizar(@NonNull Long id, Veiculo dados) {

        Veiculo veiculo = buscarPorId(id);

        veiculo.setModelo(dados.getModelo());
        veiculo.setMarca(dados.getMarca());
        veiculo.setAno(dados.getAno());
        veiculo.setCor(dados.getCor());
        veiculo.setPreco(dados.getPreco());
        veiculo.setQuilometragem(dados.getQuilometragem());
        veiculo.setStatus(dados.getStatus());

        return repository.save(veiculo);
    }

    // DELETAR
    @SuppressWarnings("null")
    public void deletar(Long id) {

        Veiculo veiculo = buscarPorId(id);

        repository.delete(veiculo);
    }
}