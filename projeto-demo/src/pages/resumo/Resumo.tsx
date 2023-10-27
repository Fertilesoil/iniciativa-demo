import './Resumo.css'

// para criar a function 'rfce'

function Resumo() {
    return (
        <div id='centralizar'>
            <div id='dentro'>
                <div id='resumotitulo'>Resumo da compra</div>
                <div className='resumovalor'>
                    <div className='textovalor'>Subtotal</div>
                    <div className='textovalor'>R$ 30,00</div>
                </div>

                <div className='resumovalor'>
                    <div className='textovalor'>Entrega</div>
                    <div className='textovalor'>R$ 5,00</div>
                </div>

                <div className='resumovalor'>
                    <div className='textovalorbold'>Total</div>
                    <div className='textovalorbold'>R$ 35,00</div>
                </div>
                <div id='botaocompradiv'>
                    <button id='botaocompra'>
                        <a href="">Seguir para pagamento
                            </a>
                        </button>
                    <img src="src\assets\imgs\icon.png" alt="icone seta" />
                </div>
            </div>
        </div>
    )
}

export default Resumo