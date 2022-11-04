import { useEffect, useState} from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import Site from './Site';
import Rodape from './Rodape';

function App() {

   //Objeto Cliente

   const cliente = {
    codigo: 0,
    nome:'',
    cpf:'',
    nascimento:'',
    endereco:'',
    telefone:'',
    email:'',
    senha:''

   }

  //UseState
  const [clientes, setClientes] = useState([]);
  const[objCliente, setObjCliente] = useState(cliente);

  //UseEffect
  useEffect(()=>{
   fetch("http://localhost:8080/listar")
   .then(retorno => retorno.json())
   .then(retorno_convertido => setClientes(retorno_convertido));

  },[]);

//Obtendo dados do formulário
const aoDigitar = (e) => {
  setObjCliente({...objCliente,[e.target.name]:e.target.value});
}
//Cadastro de clientes
const cadastrar = () => {
  fetch('http://localhost:8080/cadastrar',{
    method:'post',
    body:JSON.stringify(objCliente),
    headers:{
      'Content-type':'application/json',
      'Accept': 'application/json'
    }
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido =>{
    if(retorno_convertido.mensagem !== undefined){
      alert(retorno_convertido.mensagem);
    }else{
      setClientes([...clientes, retorno_convertido]);
      alert('Cliente cadastrado com sucesso!');
      limparFormulario();
    }
  })
}


//Alterar de clientes
const alterar = () => {
  fetch('http://localhost:8080/alterar',{
    method:'put',
    body:JSON.stringify(objCliente),
    headers:{
      'Content-type':'application/json',
      'Accept': 'application/json'
    }
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido =>{
    if(retorno_convertido.mensagem !== undefined){
      alert(retorno_convertido.mensagem);
    }else{
      alert('Cliente alterado com sucesso!');
      let vetorTemp = [...clientes];

    let indice = vetorTemp.findIndex((p) =>{
     return p.codigo === objCliente.codigo;
    });

    vetorTemp[indice] = objCliente;

    setClientes(vetorTemp);
      limparFormulario();
    }
  })
}


//Remover de clientes
const remover = () => {
  fetch('http://localhost:8080/remover/'+objCliente.codigo,{
    method:'delete',
    headers:{
      'Content-type':'application/json',
      'Accept': 'application/json'
    }
  })
  .then(retorno => retorno.json())
  .then(retorno_convertido =>{
    
    alert(retorno_convertido.mensagem);

    let vetorTemp = [...clientes];

    let indice = vetorTemp.findIndex((p) =>{
     return p.codigo === objCliente.codigo;
    });

    vetorTemp.splice(indice,1);

    setClientes(vetorTemp);

    limparFormulario();
  })
}
//Limpeza dos campos do formulário

const limparFormulario = () =>{
  setObjCliente(cliente);
}
//Selecionar Cliente

const selecionarCliente = (indice) =>{
setObjCliente(clientes[indice]);
}
//Retorno
  return (
    <div>
      <Site />
      <Formulario eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objCliente} cancelar={limparFormulario} remover={remover} alterar={alterar}/>
      <Tabela vetor={clientes} selecionar={selecionarCliente}/>
      <Rodape />
    </div>
  );
}

export default App;
