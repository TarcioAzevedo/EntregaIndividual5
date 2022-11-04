package br.com.api.produtos.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table (name = "clientes")
@Getter
@Setter

public class ProdutoModelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    private String nome;
    private String cpf;
    private String nascimento;
    private String endereco;
    private String telefone;
    private String email;
    private String senha;
    
    
    
    
    
}
