import React, { useState, useEffect } from 'react';
import './Nav.css'

function Nav() {
   const [show, handleShow] = useState(false);

  useEffect(() => {
    const cb = () => {
      if(window.scrollY > 100) {
        handleShow(true);
      }
      else {
        handleShow(false);
      }
    }
    window.addEventListener('scroll', cb);
    return () => {
      window.removeEventListener('scroll', cb);
    };
  }, []);
   

  return (
    <div className={`nav ${show && 'nav_black'}`}>
       <img 
         className='nav_logo'
         src='https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png'
         alt='Netflix Logo'
       />

       <img 
         className='nav_avatar'
         src='https://www.seekpng.com/ipng/u2e6r5u2q8e6r5t4_avatar-generic-person-icon/'
         alt='Netflix Logo'
       />
    </div>
  )
}

export default Nav

