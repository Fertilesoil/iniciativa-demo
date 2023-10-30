import './Template.css'
import Body from '../body/Body'
import Resumo from '../resumo/Resumo'

function Template() {
   return (
      <>
         <div className="grid">
            <div className="titulo">
               <h1>
                  Carrinho
               </h1>
               <span>3 Items</span>
            </div>


            <div className="resumo">
               <Resumo />
            </div>


            <div className="card1">
               <Body />
            </div>
            <div className="card2">
               <Body />
            </div>
            <div className="card3">
               <Body />
            </div>

         </div>
      </>
   )
}

export default Template