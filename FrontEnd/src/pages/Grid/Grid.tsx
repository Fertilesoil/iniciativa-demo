import Carrinho from "../cart/Carrinho"
import Produto from "../../models/Produto"
import { useContext, useEffect, useState } from "react"
import { buscar } from "../../services/Service"
import { AuthContext } from "../../contexts/AuthContext"

import './Grid.css'


function Grid() {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    /* const { postsComprados } = useContext(AuthContext) */

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

    const { posts } = useContext(AuthContext)

    const subtotal = posts.reduce((total, post) => {
        return total + (post.valor * post.id);
    }, 0)


    return (
        <>
            <div className="flex justify-center items-center min-h-[40vh] w-[100%]">
                <div className="w-[85%]">
                    <h1 className="padrao text-[3rem] text-[#515961]">Resumo da compra</h1>
                    <hr className="separador w-full border-[0.15rem] rounded-sm" />
                </div>
            </div>

            <div className="flex justify-evenly min-h-[100vh]">

                <div className="flex items-start justify-center min-h-[100vh] w-[45%]">



                    <div className='padrao flex flex-col w-full borda-compra gap-10'>

                        <div>
                            {posts.map((post: Produto) => (
                                (
                                    <div className=" flex justify-between px-5 items-center rounded-2xl font-bold h-[3rem]" key={post.id}>

                                        <div>
                                            <p>{post.nome}</p>
                                        </div>

                                        <div>
                                            <p>R$ {new Intl.NumberFormat('pt-BR', {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            }).format(post.valor)}</p>
                                        </div>

                                    </div>
                                )
                            ))}
                        </div>
                        <div className=" flex justify-between px-5 items-center rounded-2xl font-bold h-[3rem]">
                            <div><h3 className='place-self-center font-bold text-xl p-2'>Subtotal:</h3></div>

                            <div>
                                <p>R$ {new Intl.NumberFormat('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                }).format(subtotal)}</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="w-[30rem] min-h-[100vh] flex justify-center items-start">

                    <div className="">
                        <Carrinho />
                    </div>

                </div>



                {/* <div className='grid'>
            
            <div className="titulo">
                Carrinho
            </div> 

            </div>*/ }

            </div>
        </>
    )
}

export default Grid
