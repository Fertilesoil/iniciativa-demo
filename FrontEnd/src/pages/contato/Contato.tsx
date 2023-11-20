import '../contato/Contato.css'

function Contato() {
   return (
      <>
         <div className=' divtime w-[100%] flex justify-center items-center'>
            <div id='caixahome2'>
               <h1 className='text-[#515961] '>Iniciativa Atena</h1>

               <p className='text-[#515961]'>Com sua inspiração atemporal, Atena emerge como o símbolo perfeito para representar este e-commerce, cujo propósito é promover produtos e serviços dedicados ao empoderamento feminino.
                  Esse compromisso visa abordar questões de vulnerabilidade de gênero, como a desigualdade no mercado de trabalho e situações de assédio/violência.</p>

               <p className='text-[#515961]'>
                  Atena é uma das principais deidades da mitologia grega, associada a diversas áreas como a sabedoria, estratégia, justiça, habilidade, inspiração, artes, guerra e civilização. É conhecida pela sua inteligência estratégica e sabedoria. Ela é uma figura complexa que representa não apenas a guerra, mas também a civilização e o intelecto, refletindo o equilíbrio entre a força e a sabedoria.
                  Com sua inspiração atemporal, Atena emerge como o símbolo perfeito para representar este e-commerce, cujo propósito é promover produtos e serviços dedicados ao empoderamento feminino. Esse compromisso visa abordar questões de vulnerabilidade de gênero, como a desigualdade no mercado de trabalho e situações de assédio/violência.
               </p>

               <div className="atenafoto">
               <img src="src/assets/img/atena.png" alt="Imagem da Atena" />
               </div>
            </div>
         </div>

         <section className=" #f5f5f5 dark:#f5f5f5 mb-10">
            {/* Div sobre equipe */}

            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6 md:grid-cols-1 lg:grid-cols-2 ">
               
               <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">

                  <h2 className="mb-4 text-3xl tracking-tight font-bold text-[#515961] dark:text-white font-[Inter]">Nosso Time</h2>
                  <p className="font-[Inter] text-[#515961] lg:mb-16 sm:text-xl dark:text-gray-400">
                     Frase bonita
                  </p>
               

               
               {/* Div Nosso time */}
               <div className="flex flex-wrap justify-center mt-10 gap-4">
               
                  {/* Card - Anderson */}
                  <div className="flex items-center rounded-lg shadow dark:border-gray-800 max-w-xl m-2">

                     <div className="flex rounded-lg h-full dark:bg-gray-800 p-2">

                        <img
                           className="rounded-lg w-52"
                           src="https://static.vecteezy.com/ti/vetor-gratis/p1/7319933-black-avatar-person-icons-user-profile-icon-vetor.jpg" alt=" Anderson Foto" />

                        <div className="flex flex-col items-center p-2">
                           <h2 className="text-[#515961] dark:text-white text-lg font-bold font-[Inter]">ANDERSON ALVES</h2>
                           <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                           <p className="mt-3 mb-4 font-lighttext-[#515961] dark:text-gray-400"></p>


                           <div className="flex flex-col justify-between flex-grow">
                              <p className="leading-relaxed text-base text-[#515961] dark:text-gray-300 text-center">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsa magni cupiditate! Voluptatum, atque. Exercitationem debitis omnis voluptatem illum repudiandae, fugiat, dolor deserunt nam blanditiis veniam eaque dolorem necessitatibus aut?
                              </p>
                           </div>

                           <ul className="display: inline-flex space-x-4">
                              <li>
                                 <a target='_blank' href="https://www.linkedin.com/in/anderson-alves/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                       <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                       <path d="M3 5.012H0V15h3V5.012Z" />
                                    </svg>
                                 </a>
                              </li>
                              <li>
                                 <a target='_blank' href="https://github.com/ander-alves" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                       <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* Card - Fernando*/}
                  <div className="flex items-center rounded-lg shadow dark:border-gray-800 max-w-xl m-2">

                     <div className="flex rounded-lg h-full dark:bg-gray-800 p-2">

                        <img
                           className="rounded-lg w-52"
                           src="https://static.vecteezy.com/ti/vetor-gratis/p1/7319933-black-avatar-person-icons-user-profile-icon-vetor.jpg" alt=" Fernando Foto" />

                        <div className="flex flex-col items-center p-2">
                           <h2 className="text-[#515961] dark:text-white text-lg font-bold font-[Inter] ">FERNANDO DIAS</h2>
                           <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                           <p className="mt-3 mb-4 font-lighttext-[#515961] dark:text-gray-400"></p>


                           <div className="flex flex-col justify-between flex-grow">
                              <p className="leading-relaxed text-base text-[#515961] dark:text-gray-300 text-center">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsa magni cupiditate! Voluptatum, atque. Exercitationem debitis omnis voluptatem illum repudiandae, fugiat, dolor deserunt nam blanditiis veniam eaque dolorem necessitatibus aut?
                              </p>
                           </div>

                           <ul className="display: inline-flex space-x-4">
                              <li>
                                 <a target='_blank' href="https://www.linkedin.com/in/fernandodiascosta-dotnet/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                       <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                       <path d="M3 5.012H0V15h3V5.012Z" />
                                    </svg>
                                 </a>
                              </li>
                              <li>
                                 <a target='_blank' href="https://github.com/Fertilesoil" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                       <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* Card - Gaspar */}
                  <div className="flex items-center rounded-lg shadow dark:border-gray-800 max-w-xl m-2">

                     <div className="flex rounded-lg h-full dark:bg-gray-800 p-2">

                        <img
                           className="rounded-lg w-52"
                           src="https://static.vecteezy.com/ti/vetor-gratis/p1/7319933-black-avatar-person-icons-user-profile-icon-vetor.jpg" alt=" Gaspar Foto" />

                        <div className="flex flex-col items-center p-2">
                           <h2 className="text-[#515961] dark:text-white text-lg font-bold font-[Inter]">GASPAR LEONARDI</h2>
                           <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                           <p className="mt-3 mb-4 font-lighttext-[#515961] dark:text-gray-400"></p>


                           <div className="flex flex-col justify-between flex-grow">
                              <p className="leading-relaxed text-base text-[#515961] dark:text-gray-300 text-center">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsa magni cupiditate! Voluptatum, atque. Exercitationem debitis omnis voluptatem illum repudiandae, fugiat, dolor deserunt nam blanditiis veniam eaque dolorem necessitatibus aut?
                              </p>
                           </div>

                           <ul className="display: inline-flex space-x-4">
                              <li>
                                 <a target='_blank' href="https://www.linkedin.com/in/gasparleonardi/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                       <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                       <path d="M3 5.012H0V15h3V5.012Z" />
                                    </svg>
                                 </a>
                              </li>
                              <li>
                                 <a target='_blank' href="https://github.com/GasparLeonardi" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                       <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* Card - Karina */}
                  <div className="flex items-center rounded-lg shadow dark:border-gray-800 max-w-xl m-2">

                     <div className="flex rounded-lg h-full dark:bg-gray-800 p-2">

                        <img
                           className="rounded-lg w-52"
                           src="https://static.vecteezy.com/ti/vetor-gratis/p1/7319933-black-avatar-person-icons-user-profile-icon-vetor.jpg" alt=" Karina Foto" />

                        <div className="flex flex-col items-center p-2">
                           <h2 className="text-[#515961] dark:text-white text-lg font-bold font-[Inter]">KARINA AKINA</h2>
                           <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                           <p className="mt-3 mb-4 font-lighttext-[#515961] dark:text-gray-400"></p>


                           <div className="flex flex-col justify-between flex-grow">
                              <p className="leading-relaxed text-base text-[#515961] dark:text-gray-300 text-center">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsa magni cupiditate! Voluptatum, atque. Exercitationem debitis omnis voluptatem illum repudiandae, fugiat, dolor deserunt nam blanditiis veniam eaque dolorem necessitatibus aut?
                              </p>
                           </div>

                           <ul className="display: inline-flex space-x-4">
                              <li>
                                 <a target='_blank' href="https://www.linkedin.com/in/karinamiyazaki//" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                       <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                       <path d="M3 5.012H0V15h3V5.012Z" />
                                    </svg>
                                 </a>
                              </li>
                              <li>
                                 <a target='_blank' href="https://github.com/karinamzk" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                       <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* Card - Samantha */}
                  <div className="flex items-center rounded-lg shadow dark:border-gray-800 max-w-xl m-2">

                     <div className="flex rounded-lg h-full dark:bg-gray-800 p-2">

                        <img
                           className="rounded-lg w-52"
                           src="https://static.vecteezy.com/ti/vetor-gratis/p1/7319933-black-avatar-person-icons-user-profile-icon-vetor.jpg" alt=" Samantha Foto" />

                        <div className="flex flex-col items-center p-2">
                           <h2 className="text-[#515961] dark:text-white text-lg font-bold font-[Inter]">SAMANTHA BLAZIZZA</h2>
                           <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                           <p className="mt-3 mb-4 font-lighttext-[#515961] dark:text-gray-400"></p>


                           <div className="flex flex-col justify-between flex-grow">
                              <p className="leading-relaxed text-base text-[#515961] dark:text-gray-300 text-center">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsa magni cupiditate! Voluptatum, atque. Exercitationem debitis omnis voluptatem illum repudiandae, fugiat, dolor deserunt nam blanditiis veniam eaque dolorem necessitatibus aut?
                              </p>
                           </div>

                           <ul className="display: inline-flex space-x-4">
                              <li>
                                 <a target='_blank' href="https://www.linkedin.com/in/samanthablazizza/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                       <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                       <path d="M3 5.012H0V15h3V5.012Z" />
                                    </svg>
                                 </a>
                              </li>
                              <li>
                                 <a target='_blank' href="https://github.com/samanthablazizza" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                       <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* Card - Valéria */}
                  <div className="flex items-center rounded-lg shadow dark:border-gray-800 max-w-xl m-2">

                     <div className="flex rounded-lg h-full dark:bg-gray-800 p-2">

                        <img
                           className="rounded-lg w-52"
                           src="https://static.vecteezy.com/ti/vetor-gratis/p1/7319933-black-avatar-person-icons-user-profile-icon-vetor.jpgg" alt=" Valéria Foto" />

                        <div className="flex flex-col items-center p-2">
                           <h2 className="text-[#515961] dark:text-white text-lg font-bold font-[Inter]">VALÉRIA CARVALHO</h2>
                           <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                           <p className="mt-3 mb-4 font-lighttext-[#515961] dark:text-gray-400"></p>


                           <div className="flex flex-col justify-between flex-grow">
                              <p className="leading-relaxed text-base text-[#515961] dark:text-gray-300 text-center">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsa magni cupiditate! Voluptatum, atque. Exercitationem debitis omnis voluptatem illum repudiandae, fugiat, dolor deserunt nam blanditiis veniam eaque dolorem necessitatibus aut?
                              </p>
                           </div>

                           <ul className="display: inline-flex space-x-4">
                              <li>
                                 <a target='_blank' href="https://www.linkedin.com/in/val%C3%A9ria-carvalho/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                       <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                       <path d="M3 5.012H0V15h3V5.012Z" />
                                    </svg>
                                 </a>
                              </li>
                              <li>
                                 <a target='_blank' href="https://github.com/dValsc" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                       <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

            </div>


                  
                  {/* Div Anderson */}
                  {/* <div className="flex items-center bg-gray-50 rounded-lg shadow dark:border-gray-800">
                     <img className="ml-4 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/cffb/live/f5d7e3a0-b770-11ed-89f4-f3657d2bfa3b.jpg" alt=" Anderson Foto" />
                     <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-[#515961] dark:text-white">
                           <a>ANDERSON ALVES</a>
                        </h3>
                        <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                        <p className="mt-3 mb-4 font-lighttext-[#515961] dark:text-gray-400">Frase Bonita</p>
                        <ul className="display: inline-flex space-x-4 sm:mt-0">
                           <li>
                              <a target='_blank' href="https://www.linkedin.com/in/anderson-alves/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                    <path d="M3 5.012H0V15h3V5.012Z" />
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a target='_blank' href="https://github.com/ander-alves" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                 </svg>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div> */}

                  {/* Div Fernando */}
                  {/* <div className="flex items-center bg-gray-50 rounded-lg shadow dark:border-gray-800">
                  <img className="m-4 rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/cffb/live/f5d7e3a0-b770-11ed-89f4-f3657d2bfa3b.jpg" alt=" Fernando Foto" />
                     <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-[#515961] dark:text-white">
                           <a>FERNANDO DIAS 1</a>
                        </h3>
                        <span className="text-gray-800 dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                        <p className="mt-3 mb-4 font-light text-[#515961] dark:text-gray-400">Frase Bonita</p>
                        <ul className="display: inline-flex space-x-4 sm:mt-0">
                           <li>
                              <a target='_blank' href="https://www.linkedin.com/in/fernandodiascosta-dotnet/" className="text-[#515961] hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                    <path d="M3 5.012H0V15h3V5.012Z" />
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a target='_blank' href="https://github.com/Fertilesoil" className="text-[#515961] hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                 </svg>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div> */}



                  {/* Div Gaspar */}
                  {/*                   
                  <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow dark:border-gray-800 sm:grid sm:grid-cols-1 md:grid-cols-2">
                     <img className="w-full  sm:h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src=" " alt=" Gaspar Foto" />
                     <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-[#515961] dark:text-white">
                           <a>GASPAR LEONARDI</a>
                        </h3>
                        <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                        <p className="mt-3 mb-4 font-light text-[#515961] dark:text-gray-400">Frase Bonita</p>
                        <ul className="display: inline-flex space-x-4 sm:mt-0">
                           <li>
                              <a target='_blank' href="https://www.linkedin.com/in/gasparleonardi/" className="text-[#515961] hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                    <path d="M3 5.012H0V15h3V5.012Z" />
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a target='_blank' href="https://github.com/GasparLeonardi" className="text-[#515961] hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                 </svg>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>


                  <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow dark:border-gray-800 sm:grid sm:grid-cols-1 md:grid-cols-2">
                     <img className="w-full  sm:h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src=" " alt=" Karina Foto" />
                     <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-[#515961] dark:text-white">
                           <a>KARINA AKINA</a>
                        </h3>
                        <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                        <p className="mt-3 mb-4 font-light text-[#515961] dark:text-gray-400">Frase Bonita</p>
                        <ul className="display: inline-flex space-x-4 sm:mt-0">
                           <li>
                              <a target='_blank' href="https://www.linkedin.com/in/karinamiyazaki/" className="text-[#515961] hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                    <path d="M3 5.012H0V15h3V5.012Z" />
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a target='_blank' href="https://github.com/karinamzk" className="text-[#515961] hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                 </svg>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>


                  <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow dark:border-gray-800 sm:grid sm:grid-cols-1 md:grid-cols-2">
                     <img className="w-full  sm:h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src=" " alt=" Samantha Foto" />
                     <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-[#515961] dark:text-white">
                           <a>SAMANTHA BLAZIZZA</a>
                        </h3>
                        <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                        <p className="mt-3 mb-4 font-light text-[#515961] dark:text-gray-400">Frase Bonita</p>
                        <ul className="display: inline-flex space-x-4 sm:mt-0">
                           <li>
                              <a target='_blank' href="https://www.linkedin.com/in/samanthablazizza/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                    <path d="M3 5.012H0V15h3V5.012Z" />
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a target='_blank' href="https://github.com/samanthablazizza" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                 </svg>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>


                  <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow dark:border-gray-800 sm:grid sm:grid-cols-1 md:grid-cols-2">
                     <img className="w-full  sm:h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src=" " alt=" Valéria Foto" />
                     <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-[#515961] dark:text-white">
                           <a>VALÉRIA CARVALHO</a>
                        </h3>
                        <span className="text-[#515961] dark:text-gray-400">Desenvolvedor Fullstack C#</span>
                        <p className="mt-3 mb-4 font-light text-[#515961] dark:text-gray-400">Frase Bonita</p>
                        <ul className="display: inline-flex space-x-4 sm:mt-0">
                           <li>
                              <a target='_blank' href="https://www.linkedin.com/in/val%C3%A9ria-carvalho/" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                                    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd" />
                                    <path d="M3 5.012H0V15h3V5.012Z" />
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a target='_blank' href="https://github.com/dValsc" className="text-gray-800 hover:text-gray-900 dark:hover:text-white">
                                 <svg className="w-6 h-6 text-[#515961] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                 </svg>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div> */}

               </div>
            </div>
         </section>
      </>
   );
}
export default Contato;