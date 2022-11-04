import React from 'react'

const Rodape = props => {
 return (
<div>
<section className='section'>
    <div><h6 className='margem'><b>Formas de Pagamento</b></h6><p className='margem1'>Cartão de crédito em até 10x sem juros, boleto, transferência bancária ou pix.</p><img src='./Imagens/Formas de Pagamento.jpg'/></div>
    <div><h6 className='margem2'><b>Siga Nossas Redes Sociais</b></h6>
        <ul >
            <li><img src='./Imagens/Facebook.jpg'/> Gambbu Turismo</li>
            <li><img src='./Imagens/Instagram.jpg'/> @gambbu.turismo</li>
            <li><img src='./Imagens/Twitter.jpg'/> @gambbu.turismo</li>
        </ul></div>
 </section>
 <hr/>
 <footer className='center'>
    <p className='footer'> &copy 2022 -2022 Gambbu Turismo - Tarcio Azevedo S.A - CNPJ: 10.100.100/0001-11  | Rua Thompsom Bulcão, 111, Loja 11, Bairro: Luciano Cavalcante  | Fortaleza- CE, CEP: 01010-111</p>
 </footer>
 
  </div>
 )
}
export default Rodape