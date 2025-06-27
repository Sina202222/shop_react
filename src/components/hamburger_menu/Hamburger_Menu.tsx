import React, { useRef } from 'react';

import './HamburgerMenu.css';


function Hamburger_Menu() {

    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        
        hamburgerRef.current?.classList.toggle('active');
        menuRef.current?.classList.toggle('show');
        
    };
  
    

  return (
    
    <>
      <button 
        className="hamburger-menu" 
        ref={hamburgerRef}
        onClick={handleClick}
      >
        <span className="line top"></span>
        <span className="line middle"></span>
        <span className="line bottom"></span>
      </button>
      
      {/* Example menu - you can customize this */}
      <nav className="nav-menu" ref={menuRef}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
    
  )
}

export default Hamburger_Menu