import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Only if you're using React Router
import logo from '../assets/dilogo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="w-full px-6 py-2 flex justify-between items-center shadow-sm relative bg-white z-30">
      {/* Logo */}
      <a href="/" className="w-32 h-14 overflow-hidden flex items-center" aria-label="Home">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
      </a>

      {/* Hamburger Menu Icon */}
      <button
        className="md:hidden absolute right-6 top-6 z-40"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-gray-800 rounded-sm"></span>
          <span className="block w-6 h-0.5 bg-gray-800 rounded-sm"></span>
          <span className="block w-6 h-0.5 bg-gray-800 rounded-sm"></span>
        </div>
      </button>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-m font-medium text-gray-800">
        <a href="/about" className="hover:text-yellow-500 transition">About</a>
        <a href="/contact" className="hover:text-yellow-500 transition">Contact</a>
      </nav>

      {/* Mobile Dropdown Menu - Half Screen Height */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full h-40 bg-white shadow-md md:hidden flex flex-col items-center justify-center gap-6 z-30 text-gray-800 font-medium text-lg transition-all duration-300 ease-in-out">
          <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
