import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Contato from './pages/contato/Contato'
import Cadastro from './pages/cadastro/Cadastro';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProdutos from './components/produtos/formularioProdutos/FormularioProdutos';
import DeletarProduto from './components/produtos/deletarProdutos/DeletarProdutos';
import Carrinho from './pages/cart/Carrinho';
import Grid from './pages/Grid/Grid'

function App() {

  return (

    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastrocategoria" element={<FormularioCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastroProdutos" element={<FormularioProdutos />} />
            <Route path="/editarProdutos/:id" element={<FormularioProdutos />} />
            <Route path='/deletarProdutos/:id' element={<DeletarProduto />} />
            <Route path='/carrinho' element={<Grid />} />

          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>

  );
}
export default App;


