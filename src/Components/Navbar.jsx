import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const   
 menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(()   => {
    document.addEventListener('hamburger', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <nav   
 className="nav relative container mx-auto p-6">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2 cursor-pointer">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* Menu items */}
          <div className="hidden space-x-6 md:flex font-bold">
            <Link to="/hero">Pricing</Link>
            <Link to="/features">Product</Link>
            <Link to="/testimonials">About</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/testimonials">Community</Link>
          </div>

          {/* Button */}
          <a href="#" className="hidden p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-gray-900 md:block">
            Get Started
          </a>

          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
            onClick={handleMenuClick}   

            

            aria-label="Open Menu"
            aria-expanded={isOpen}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>   

        </div>
        {/* Mobile Menu */}
        <div
          id="menu"
          className={`md:hidden   
 absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md   
 ${
            isOpen ? 'block' : 'hidden'
          }`}
          ref={menuRef}
        >
           <Link to="/hero">Pricing</Link>
            <Link to="/features">Product</Link>
            <Link to="/testimonials">About</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/testimonials">Community</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;