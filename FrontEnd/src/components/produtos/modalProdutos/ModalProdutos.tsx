import Popup from 'reactjs-popup';
import FormularioProdutos from '../formularioProdutos/FormularioProdutos';
import { useContext } from 'react';
import 'reactjs-popup/dist/index.css';
import './ModalProdutos.css'
import { AuthContext } from '../../../contexts/AuthContext';

function ModalProdutos() {

    const { usuario } = useContext(AuthContext);

    return (
        <>
            {
                usuario.usuario === 'root@root.com.br' ? (
                    <Popup
                        trigger={
                            <button
                                className='w-[8.5rem] h-[3rem] bg-[#D973AB] rounded-md botaouser text-[0.85rem] font-[400] text-[#ffff]'>
                                Novo Produto
                            </button>
                        }
                        modal
                    >
                        <FormularioProdutos />
                    </Popup>) : ('')
            }
        </>
    );
}

export default ModalProdutos;