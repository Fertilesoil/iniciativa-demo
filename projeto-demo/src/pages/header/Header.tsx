import { } from './Header.css'

function Header() {
   return (
      <header>
         <nav id="nav-flex">
            <a className="link-nome" href="#">Iniciativa Atena</a>
            <div id='div-flex'>
               <ul id="ul-links">
                  <li><a className="link-format" href="#">Produtos</a></li>
                  <li><a className="link-format" href="#">Noticias</a></li>
                  <li><a className="link-format" href="#">Quem Somos</a></li>
                  <li><a className="link-format" href="#">Meu Perfil</a></li>
                  <li><a className="link-format" href="#">Carrinho</a></li>
               </ul>
            </div>
         </nav>
      </header>
   )
}

export default Header