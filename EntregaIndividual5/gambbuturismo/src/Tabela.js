function Tabela({vetor, selecionar}){
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Nascimento</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Senha</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice) =>(
                <tr key={indice}>
                    <td>{indice+1}</td>
                    <td>{obj.nome}</td>
                    <td>{obj.cpf}</td>
                    <td>{obj.nascimento}</td>
                    <td>{obj.endereco}</td>
                    <td>{obj.telefone}</td>
                    <td>{obj.email}</td>
                    <td>{obj.senha}</td>
                    <td><button onClick={() => {selecionar(indice)}} className="btn btn-primary">Selecionar</button></td>
                </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Tabela;