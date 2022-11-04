import React from 'react'

const Site = props => {
 return (
<div>
  <header className='header'>
      <div className='logo'> <img src="./Imagens/Logo_Azul_1-removebg-preview.png"></img></div>
      <nav className='navbar'>
      <ul className='nav'> 
    <li className='nav-item'><a  className='nav-link' href='PaginaInicial.html'>Página Inicial</a></li>
    <li className='nav-item'><a  className='nav-link' href='Promocoes.html'>Promoções</a></li>
    <li className='nav-item'><a  className='nav-link' href='DestinosNac.html'>Destinos Nacionais</a></li>
    <li className='nav-item'><a  className='nav-link' href='DestinosInter.html'>Destinos Internacionais</a></li>
    <li className='nav-item'><a  className='nav-link' href='Contatos.html'>Fale Conosco</a></li>
    </ul>
      </nav>
  </header>
 
  </div>
 )
}
export default Site