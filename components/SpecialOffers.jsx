import { useState, useEffect } from "react";
import Image from "next/image";

// Assets
import SpecialOfferImg01 from "../public/images/special-offers/special-offer_01.jpg";
import SpecialOfferImg02 from "../public/images/special-offers/special-offer_02.jpg";
import SpecialOfferImg03 from "../public/images/special-offers/special-offer_03.jpg";

const SpecialOffers = () => {
   const [buttons, setButtons] = useState([
      { text: "Team", isActive: true },
      { text: "Couple", isActive: false },
      { text: "Family", isActive: false },
   ]);

   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch("https://dummyjson.com/products")
         .then(response => response.json())
         .then(data => console.info(data))
         .catch(error => console.error(error))
   }, []);

   const selectActiveButton = (e) => {
      const activeButtonText = e.target.innerText;
      setButtons(prevState => {
         const newState = prevState.map(button => {
            if (button.text === activeButtonText) {
               return { ...button, isActive: true };
            }
            return { ...button, isActive: false };
         })
         return newState;
      });
   }

   return (
      <>
         <h2 className="mt-16 text-2xl font-semibold text-center">Special Upcoming Offers</h2>

         <div className="text-center">
            <ul className="inline-flex p-2 my-8 bg-white rounded-md shadow-md shadow-gray-200">
               {
                  buttons.map(button => {
                     const cssButton = `text-sm p-2 rounded-md ${button.isActive ? 'bg-light-blue-100 text-white' : 'text-gray-500'} `;
                     return (
                        <li key={button.text}>
                           <button
                              className={cssButton}
                              onClick={selectActiveButton}
                           >
                              {button.text}
                           </button>
                        </li>
                     )
                  })
               }
            </ul>
         </div>

         <section className="lg:flex lg:flex-wrap lg:justify-evenly">
            <article className="p-5 mb-6 bg-white rounded-5xl lg:w-3/12 lg:mb-0">
               <div className="relative mb-3 special-offer">
                  <Image src={SpecialOfferImg01} alt="special offer" />
               </div>
               {/* <span>14 FEB 2022</span> */}
               <span className="inline-block px-3 mr-4 text-xs text-pink-400 bg-pink-200 bg-color rounded-5xl">Relax</span>
               <span className="inline-block text-xs text-slate-400">3 Days, 3 Nights</span>
               <h2 className="mt-6 text-lg font-semibold">Loga Sea</h2>
               <div className="flex justify-between">
                  <p className="mt-2 font-light">700$<span className="text-gray-400">/Person</span></p>
                  <a
                     href="http://booking.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block px-3 py-2 text-sm rounded-md bg-pearl-blue text-light-blue-100"
                  >
                     Book Now
                  </a>
               </div>
            </article>

            <article className="p-5 mb-6 bg-white rounded-5xl lg:w-3/12 lg:mb-0">
               <div className="relative mb-3 special-offer">
                  <Image src={SpecialOfferImg02} alt="special offer" />
               </div>
               {/* <span>14 FEB 2022</span> */}
               <span className="inline-block px-3 mr-4 text-xs text-pink-400 bg-pink-200 bg-color rounded-5xl">Relax</span>
               <span className="inline-block text-xs text-slate-400">3 Days, 3 Nights</span>
               <h2 className="mt-6 text-lg font-semibold">Loga Sea</h2>
               <div className="flex justify-between">
                  <p className="mt-2 font-light">700$<span className="text-gray-400">/Person</span></p>
                  <a
                     href="http://booking.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block px-3 py-2 text-sm rounded-md bg-pearl-blue text-light-blue-100"
                  >
                     Book Now
                  </a>
               </div>
            </article>

            <article className="p-5 mb-6 bg-white rounded-5xl lg:w-3/12 lg:mb-0">
               <div className="relative mb-3 special-offer">
                  <Image src={SpecialOfferImg03} alt="special offer" />
               </div>
               {/* <span>14 FEB 2022</span> */}
               <span className="inline-block px-3 mr-4 text-xs text-pink-400 bg-pink-200 bg-color rounded-5xl">Relax</span>
               <span className="inline-block text-xs text-slate-400">3 Days, 3 Nights</span>
               <h2 className="mt-6 text-lg font-semibold">Loga Sea</h2>
               <div className="flex justify-between">
                  <p className="mt-2 font-light">700$<span className="text-gray-400">/Person</span></p>
                  <a
                     href="http://booking.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block px-3 py-2 text-sm rounded-md bg-pearl-blue text-light-blue-100"
                  >
                     Book Now
                  </a>
               </div>
            </article>
         </section>
      </>
   )
}

export default SpecialOffers;