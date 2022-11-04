package br.com.api.produtos.Repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.produtos.modelo.ProdutoModelo;

@Repository
public interface ClienteRepositorio extends CrudRepository<ProdutoModelo, Long> {
    
}
