import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import '../navbar/Navbar.css'


function Navbar() {
   const { usuario } = useContext(AuthContext);

   return (
      <header>
         <nav id="nav-flex">

            <Link to="/home">
               <a className="link-nome" href="#">Iniciativa Atena</a> </Link>

            {
               usuario.usuario === 'root@root.com.br' ? (
                  <div id='div-flex'>
                     <ul id="ul-links">
                        <Link to="/cadastrocategoria"><li className='link-format text-[white]'>Cadastro Categorias</li></Link>
                     </ul>
                  </div>
               ) : ('')
            }


            <div id='div-flex'>
               <ul id="ul-links">
                  <Link to="/produtos"><li className='link-format'>Produtos</li></Link>
                  <Link to="/categorias"><li className='link-format'>Categorias</li></Link>
                  <Link to="/"><li className='link-format'>Noticias</li></Link>
                  <Link to="/contato"><li className='link-format'>Quem Somos</li></Link>
                  <Link to="/"><li className='link-format'>Meu Perfil</li></Link>
                  <Link to="/carrinho"><li className='link-format'>Carrinho</li></Link>
                  <Link to="/login"><li className='link-format'>Login</li></Link>
               </ul>
            </div>
         </nav>
      </header>
   )
}

export default Navbar

