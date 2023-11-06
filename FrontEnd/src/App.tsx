import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Contato from './pages/contato/Contato'
import Cadastro from './pages/cadastro/Cadastro';

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
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>

  );
}
export default App;

