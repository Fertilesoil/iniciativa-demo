import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Plus, ShoppingCart } from "@phosphor-icons/react"
import './CardProduto.css'


interface CardProdutosProps {
    post: Produto
}

function CardProdutos({ post }: Readonly<CardProdutosProps>) {

    const { usuario } = useContext(AuthContext);

    const formattedNumber = post.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log(formattedNumber)

    const { adicionarProduto, removerProduto } = useContext(AuthContext)

    return (
        <div className='fonte'>


            <div className='borda flex h-[11rem]'>

                <div className='esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[9rem]' style={{
                    backgroundImage: `url(${post.foto})`
                }}>

                </div>

                <div className=' flex flex-col w-full'>

                    <div className='flex flex-col gap-1 div-cima h-[5rem] px-[1.5rem]'>
                        <div className='flex items-center justify-between mt-3'>
                            <h2 className='text-[#515961] font-[600] text-[1.5rem]'>{post.nome}</h2>
                            <span className='font-[400] text-[0.75rem] text-[#515961]'>{post.duracao}</span>
                        </div>
                        <span className='font-[650] text-[#515961]'>Categoria: {post.categoria?.nome}</span>
                    </div>

                    <div className='div-baixo flex items-end justify-between h-[5rem] px-[1.5rem]'>

                        <div className='flex flex-col gap-3'>

                            <select name="" id=""
                                className='fonte input placeholder:text-[0.65rem] placeholder:tracking-[0.03rem] placeholder:text-center placeholder:font-[500]
                                text-[0.65rem] tracking-[0.03rem] text-center font-[400] border-none outline-none focus:border-none focus:outline-none overflow-scroll'
                            >
                                <option value="" selected disabled>Quantidade</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                                <option value="">7</option>
                                <option value="">8</option>
                                <option value="">9</option>
                                <option value="">10</option>
                            </select>
                            <button className='flex justify-center items-center text-center border-none outline-none p-[0.30rem]  bg-[#D973AB] rounded-md' onClick={() => adicionarProduto(post)}>
                                <i><ShoppingCart size={24} weight="fill" color="#f5f5f5" /></i>
                                <i><Plus size={14} weight="bold" color="#f5f5f5" /></i>
                            </button>

                            <button className='flex justify-center items-center text-center border-none outline-none p-[0.30rem]  bg-[#7397d9] rounded-md' onClick={() => removerProduto(post.id)}>
                                <i><ShoppingCart size={24} weight="fill" color="#f5f5f5" /></i>
                                <i><Plus size={14} weight="bold" color="#f5f5f5" /></i>
                            </button>

                        </div>

                        <span className='text-[#515961] font-[500]'>{formattedNumber}</span>

                    </div>
                </div>

                {
                    usuario.usuario === 'root@root.com.br' ? (<div className="flex">
                        <Link to={`/editarProdutos/${post.id}`} className='w-full text-white bg-indigo-400 
                        hover:bg-indigo-800 flex items-center justify-center py-2'>
                            <button>Editar</button>
                        </Link>
                        <Link to={`/deletarProdutos/${post.id}`} className='text-white bg-red-400 
                        hover:bg-red-700 w-full flex items-center justify-center rounded-r-[1.8rem]'>
                            <button>Deletar</button>
                        </Link>
                    </div>)
                        : ('')
                }
            </div>


        </div>
    )
}

export default CardProdutos