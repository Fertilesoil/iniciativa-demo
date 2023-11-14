import Carrinho from "../cart/Carrinho"
import CardProdutos from "../../components/produtos/cardProdutos/CardProdutos"

import './Grid.css'
import Produto from "../../models/Produto"
import { useContext, useEffect, useState } from "react"
import { buscar } from "../../services/Service"
import { AuthContext } from "../../contexts/AuthContext"

function Grid() {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const { postsComprados } = useContext(AuthContext)

    useEffect(() => {
        buscarPorProduto()
    }, [produtos.length])

    async function buscarPorProduto() {
        try {
            await buscar('/produtos', setProdutos, {})
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Houve um erro inesperado')
            }
        }
    }

    const { posts, limparCart, comprar } = useContext(AuthContext)

    return (
        <div>
            <div className='grid'>
                {/*<div className="titulo">
               Carrinho
            </div> */}

                <div className="resumo">
                    <Carrinho />
                </div>

                <div id='resumotitulo'>Resumo da compra</div>
                <div className='resumovalor'>
                {posts.map((post: Produto) => (
                        (
                            <div className=''>
                                <p className='dark:text-white bg-lime-300 mb-3 border-2 rounded-2xl font-bold '>
                                    {post.nome}:
                                    R$ {new Intl.NumberFormat('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    }).format(post.valor)}
                                </p>
                            </div>
                        )
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Grid
