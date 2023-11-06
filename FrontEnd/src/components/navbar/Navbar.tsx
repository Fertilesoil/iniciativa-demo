import '../navbar/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
   return (
      <header>
         <nav id="nav-flex">

            <Link to="/home">
               <a className="link-nome" href="#">Iniciativa Atena</a> </Link>

            <div id='div-flex'>
               <ul id="ul-links">
                  <li><a className="link-format" href="#">Produtos</a></li>
                  <li><a className="link-format" href="#">Noticias</a></li>
                  <li><Link to="/contato"><a className='link-format' href="#">Quem Somos</a></Link></li>
                  <li><a className="link-format" href="#">Meu Perfil</a></li>
                  <li><a className="link-format" href="#">Carrinho</a></li>
                  <li><Link to="/login"><a className='link-format' href="#">Login</a></Link></li>
               </ul>
            </div>
         </nav>
      </header>
   )
}

export default Navbar

