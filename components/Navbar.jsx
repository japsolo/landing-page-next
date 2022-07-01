// Deps.
import { useState } from 'react';

// Assets
import Image from 'next/image';
import Logo from "../public/images/logo-treloo.svg";
import OpenNav from "../public/images/icons/open-nav.png";
import CloseNav from "../public/images/icons/close-nav.png";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const handleNavbar = () => setIsOpen(!isOpen);

   return (
      <nav className="main-navbar">
         <div className="main-logo">
            <Image src={Logo} alt="logo Trello" />
         </div>
         <button className="action-nav" onClick={handleNavbar}>
            <Image
               src={isOpen ? CloseNav : OpenNav}
               alt="open nav icon"
               width="16"
               height="16"
            />
         </button>
         <ul className={`main-links ${isOpen && 'is-open'}`}>
            <li><a href="">Search</a></li>
            <li><a href="">Special offers</a></li>
            <li><a href="">Recommended</a></li>
            <li><a href="">Register</a></li>
         </ul>
      </nav>
   );
}

export default Navbar;
