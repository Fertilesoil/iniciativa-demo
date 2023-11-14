import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';

import './Login.css';

function Login() {

    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );


    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (

        <div className='flex w-[100%] h-[40rem] justify-center items-center'>
            <div className='w-[60rem] h-[38rem] flex justify-between mt-12 bg-white shadow-xl'>
                <div className='imagem fundoLogin w-[30rem] h-[10rem]'>
                </div>
                <div className='flex flex-col justify-center w-[30rem]'>

                    <div className='primeiro-icone flex flex-col items-center gap-3'>
                        <div className='imagem-icone w-[5rem] h-[5rem]'></div>
                        <h6 className='text-[0.8rem] tracking-[0.1rem] mb-8'>Iniciativa Atena</h6>
                    </div>

                    <form className='flex flex-col items-center justify-center p-[1rem] h-[0.5] gap-2' onSubmit={login}>
                        <h2 className='primeiro-icone text-[1.7rem] text-[#515961] mb-[8px]' >Faça seu login</h2>
                        <div className='w-[16.5rem] h-[2rem]'>
                            <hr />
                        </div>

                        <div className='flex flex-col gap-[1.5rem]'>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="text"
                                    id="usuario"
                                    name="usuario"
                                    placeholder="e-mail"
                                    value={usuarioLogin.usuario}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] outline-none rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="Senha"
                                    value={usuarioLogin.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                            <div className='usuario2 flex flex-col justify-center items-center gap-[1.3rem] mt-[0.5rem]'>
                                <button className='flex items-center justify-center w-[8.5rem] h-[3rem] bg-[#D973AB] rounded-md botaouser text-[0.7rem] font-[400] text-[#ffff]' type='submit'>
                                    {isLoading ? <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    /> : <span className='text-[0.85rem]'>Login</span>}
                                </button>
                                <p>
                                    Ainda não tem uma conta?{' '}
                                    <Link to="/cadastro" className="text-[#F2AD94]">
                                        Cadastre-se
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default Login;