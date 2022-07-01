import Image from 'next/image';
import Airplane from "../public/images/icons/airplane.svg";
import Hotel from "../public/images/icons/hotel.svg";
import SearchIcon from "../public/images/icons/search.svg";
import PlaneDashed from "../public/images/icons/plane-dashed.svg";
import CalendarDashed from "../public/images/icons/calendar-dashed.svg";

const Search = () => {
   return (
      <>
         <div className="relative p-4 -mt-20 bg-white rounded-t-4xl sm:w-3/6">
            <button className="inline-flex items-center px-5 py-6 bg-light-blue-20 rounded-4xl">
               <Image
                  src={Airplane}
                  alt="airplane icon"
               />
               <span className="ml-1">Flight</span>
            </button>
            <button className="inline-flex items-center px-5 py-6">
               <Image
                  src={Hotel}
                  alt="hotel icon"
               />
               <span className="ml-1">Hotel</span>
            </button>
         </div>
         <div className="p-4 bg-white rounded-b-4xl rounded-tr-4xl sm:py-6">
            <form action="/" className="flex flex-col sm:flex-row sm:justify-between">
               <div className="flex items-center justify-between px-4 py-3 border-2 border-slate-300 rounded-2xl">
                  <div>
                     <span className="text-sm text-slate-400">Living From</span>
                     <p className="text-lg">Dubai</p>
                  </div>
                  <div>
                     <Image src={PlaneDashed} width="35" height="35" alt="plane icon circle dashed" />
                  </div>
                  <div>
                     <span className="text-sm text-slate-400">Going To</span>
                     <p className="text-lg">New York</p>
                  </div>
               </div>
               <div className="flex items-center justify-between px-4 py-3 mt-4 border-2 sm:mt-0 border-slate-300 rounded-2xl">
                  <div>
                     <span className="text-sm text-slate-400">Leave</span>
                     <p className="text-lg">23 Jan, Sat</p>
                  </div>
                  <div>
                     <Image src={CalendarDashed} width="35" height="35" alt="calendar icon circle dashe" />
                  </div>
                  <div>
                     <span className="text-sm text-slate-400">Return</span>
                     <p className="text-lg">14 Jan, Thu</p>
                  </div>
               </div>
               <button className="p-2 mt-4 bg-light-blue-80 rounded-2xl sm:mt-0">
                  <Image src={SearchIcon} alt="logo Trello" width="35" height="35" />
               </button>
            </form>
         </div>
      </>
   );
}

export default Search;
