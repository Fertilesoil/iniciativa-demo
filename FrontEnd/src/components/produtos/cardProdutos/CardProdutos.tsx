import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import './CardProduto.css'


interface CardProdutosProps {
    post: Produto
}

function CardProdutos({ post }: Readonly<CardProdutosProps>) {

    const { usuario } = useContext(AuthContext);

    const formattedNumber = post.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log(formattedNumber); // R$ 1.234.567,89

    return (
        <div>


            <div className='borda flex h-[11rem]'>

                <div className='esquerda-imagem rounded-l-[1.8rem] bg-cover bg-no-repeat bg-center w-[9rem]' style={{
                    backgroundImage: `url(${post.foto})`
                }}>

                </div>

                <div className='flex flex-col justify-between w-full'>

                    <div className='div-cima h-[5rem]'>
                        <h2>{post.nome}</h2>
                        <span>{post.duracao}</span>
                        <span>Categoria: {post.categoria?.nome}</span>
                    </div>

                    <div className='div-baixo flex items-end justify-between h-[5rem]'>
                        <div>
                            <input type="text" placeholder='Quantidade' />
                            <button className='text-center text-white'>Adicionar ao carrinho</button>
                        </div>

                        <span>{formattedNumber}</span>
                        
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