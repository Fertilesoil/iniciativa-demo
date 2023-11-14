import '../home/Home.css'
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos'
import ModalProdutos from '../../components/produtos/modalProdutos/ModalProdutos'

function Home() {
    return (
        <section className='flex flex-col'>
            <div id='caixahome'>
                <div id='conteudohome'>
                    <h1>
                        O Projeto Iniciativa Atena Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text:
                    </h1>
                    <ul>
                        <li>Lorem ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                        <li>Lorem ipsum dolor </li>
                    </ul>
                    <div className="flex justify-around gap-4">
                        <div className="flex justify-around gap-4">
                            <ModalProdutos />
                        </div>
                    </div>
                </div>
                <div id='atena'>
                    <img src="./src/assets/img/atena.png" alt="" />
                </div>
            </div>
            <ListaProdutos />
        </section>
    )
}

export default Home;
