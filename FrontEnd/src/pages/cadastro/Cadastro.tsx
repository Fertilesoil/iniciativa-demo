import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { cadastrarUsuario } from '../../services/Service'
import Usuario from '../../models/Usuario'

import './Cadastro.css'

function Cadastro() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        admin: 0
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar()
        }
    }, [usuario])

    function retornar() {
        navigate('/login')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true)

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
                alert('Usuário cadastrado com sucesso')

            } catch (error) {
                alert('Erro ao cadastrar o Usuário')
            }

        } else {
            alert('Dados inconsistentes. Verifique as informações de cadastro.')
            setUsuario({ ...usuario, senha: "" })
            setConfirmaSenha("")
        }

        setIsLoading(false)
    }

    return (
        <>
            <div className='flex w-[100%] h-[40rem] justify-center items-center'>
                <div className='w-[60rem] h-[35rem] flex justify-between bg-white shadow-xl'>

                    <div className='w-[30rem]'>
                        <form className='flex flex-col items-center justify-center p-[1rem] h-[0.5]' onSubmit={cadastrarNovoUsuario}>
                            <div className='flex flex-col items-center'><div className='imagem-icone w-[5rem] h-[5rem]'></div>
                                <h6>Iniciativa Atena</h6></div>
                            <h2>Criar Conta</h2>
                            <div className='w-[9rem] h-[2rem]'>
                                <hr />
                            </div>

                            <div className='flex flex-col gap-[0.5rem]'>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] outline-none rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="Entre com seu nome"
                                    value={usuario.nome}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="text"
                                    id="usuario"
                                    name="usuario"
                                    placeholder="e-mail"
                                    value={usuario.usuario}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] outline-none rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="text"
                                    id="foto"
                                    name="foto"
                                    placeholder="foto"
                                    value={usuario.foto}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] outline-none rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    placeholder="senha"
                                    value={usuario.senha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                />
                            </div>
                            <div>
                                <input className='usuario w-[17rem] h-[2.5rem] outline-none rounded-md border-2 placeholder:text-[0.8rem] p-[0.5rem]'
                                    type="password"
                                    id="confirmarSenha"
                                    name="confirmarSenha"
                                    placeholder="confirmar senha"
                                    value={confirmaSenha}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                                />
                            </div>
                            <div>
                                <button
                                    onClick={retornar}>
                                    Já possui uma conta?
                                </button>
                                <button type='submit'>
                                    {isLoading ? <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="24"
                                        visible={true}
                                    /> : <span>Cadastrar</span>}
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                    <div className='imagem w-[30rem] h-[10rem]'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastro