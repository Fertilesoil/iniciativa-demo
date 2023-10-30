import './Grid.css'
import Body from '../body/Body'
import Resumo from '../resumo/Resumo'

function Grid() {

   return (
      <div>
         <div className='grid'>
            <div className="titulo">
               Carrinho
            </div>

            <div className="resumo">
               <Resumo />
            </div>

            <div className='card1'><Body /></div>
            <div className='card2'><Body /></div>
            <div className='card3'><Body /></div>
         </div>
      </div>
   )
}

export default Grid