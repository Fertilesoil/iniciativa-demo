import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"

import Produto from "../models/Produto"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean

    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    comprar: () => void
    posts: Produto[]
    quantidadePosts: number
    postsComprados: Produto[]
    pedido: number
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            alert("Usuário logado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    // CÓDIGO DO CARRINHO
    const [posts, setItens] = useState<Produto[]>([])
    const quantidadePostsNoCarrinho = posts.reduce((total, post) => total + post.id, 0);
    const [postsComprados, setPostsComprados] = useState<Produto[]>([]);
    const [pedido, setPedido] = useState(0);

    function adicionarProduto(produto: Produto) {
        const itemExiste = posts.find((post) => post.id === produto.id);

        if (itemExiste) {
            setItens((state) =>
                state.map((post) =>
                    post.id === produto.id ? { ...post, id: post.id + 1 } : post
                )
            );
        } else {
            setItens((state) => [...state, { ...produto, id: 1 }]);
        }
        alert("Produto adicionado ao carrinho")
    }

    function removerProduto(produtoId: number) {
        let itemRemovido = false; // Variável para controlar se um item foi removido

        const updateItens = posts.map((post) => {
            if (post.id === produtoId) {
                // Verifica se a id é maior que 1 antes de decrementar
                if (post.id > 1) {
                    itemRemovido = true; // Marca que um item foi removido
                    return { ...post, id: post.id - 1 };
                } else {
                    alert("O carrinho está vazio");
                    return post;
                }
            }
            return post;
        });

        try {
            setItens(updateItens);
            alert("Uma unidade do produto foi removida do carrinho");
        } catch (error: any) {
            console.log(error);
            alert('Ocorreu um erro ao remover o produto');
        }
    }

    function comprar() {
        const itensComprados = [...posts];
        setPostsComprados(itensComprados)
        alert("Compra Efetuada com Sucesso")
        setItens([])
        setPedido(pedido + 1)
    }

    function limparCart() {
        alert("O Carrinho está vazio")
        setItens([])
    }

    return (
        <AuthContext.Provider value={{ adicionarProduto, removerProduto, limparCart, comprar, posts, quantidadePosts: quantidadePostsNoCarrinho, usuario, handleLogin, handleLogout, isLoading, postsComprados, pedido }}>
            {children}
        </AuthContext.Provider>
    )
}