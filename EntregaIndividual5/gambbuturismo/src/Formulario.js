function Formulario({eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return (
        <form>
            <input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' placeholder='Nome' className='form-control' />
            <input type='text' value={obj.cpf} onChange={eventoTeclado} name='cpf' placeholder='CPF' className='form-control'/>
            <input type='text' value={obj.nascimento} onChange={eventoTeclado} name='nascimento' placeholder='Nascimento' className='form-control'/>
            <input type='text' value={obj.endereco} onChange={eventoTeclado} name='endereco' placeholder='Endereço' className='form-control'/>
            <input type='text' value={obj.telefone} onChange={eventoTeclado} name='telefone' placeholder='Telefone' className='form-control'/>
            <input type='text' value={obj.email} onChange={eventoTeclado} name='email' placeholder='Email' className='form-control'/>
            <input type='text' value={obj.senha} onChange={eventoTeclado} name='senha' placeholder='Senha' className='form-control'/>

            <input type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-primary'/>
            <input type='button' value='Alterar' onClick={alterar} className='btn btn-primary'/>
            <input type='button' value='Remover' onClick={remover} className='btn btn-primary'/>
            <input type='button' value='Cancelar' onClick={cancelar} className='btn btn-secondary'/>
        </form>
    )
}
export default Formulario;