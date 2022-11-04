package br.com.api.produtos.Serviço;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.produtos.Repositorio.ClienteRepositorio;
import br.com.api.produtos.modelo.ProdutoModelo;

import br.com.api.produtos.modelo.RespostaModelo;


@Service
public class ClienteServico {
    
    @Autowired
    private ClienteRepositorio pr;

    @Autowired
    private RespostaModelo rm;

    
    

    // Método para listar os clientes

    public Iterable<ProdutoModelo> listar(){
        return pr.findAll();
    }

    // Método para cadastrar clientes
    public ResponseEntity<?> cadastrarAlterar(ProdutoModelo pm, String acao){
       
        if(acao.equals("cadastrar")){
            return new ResponseEntity<ProdutoModelo>(pr.save(pm),HttpStatus.CREATED);
        }else{
            return new ResponseEntity<ProdutoModelo>(pr.save(pm),HttpStatus.OK);
        }
        
        }
        //Método para remover clientes
        public ResponseEntity<RespostaModelo> remover(long codigo){
            pr.deleteById(codigo);
            rm.setMensagem("Cliente removido com sucesso.");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
        }
           
        
    }  


