import { useState } from 'react';
import logo from '../assets/dilogo.png'; // Update path if needed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-2 flex justify-between items-center shadow-sm relative bg-white">
      <a href="/" className="w-32 h-14 overflow-hidden flex items-center" aria-label="Home">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </a>

      <button
        className="md:hidden absolute right-6 top-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-gray-800 rounded-sm"></span>
          <span className="block w-6 h-0.5 bg-gray-800 rounded-sm"></span>
          <span className="block w-6 h-0.5 bg-gray-800 rounded-sm"></span>
        </div>
      </button>

      <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
        <a href="about" className="hover:text-yellow-500 transition">About</a>
        <a href="contact" className="hover:text-yellow-500 transition">Contact</a>
      </nav>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-6 py-6 z-20 text-gray-800 font-medium text-base transition-all duration-300 ease-in-out">
          <a href="about" onClick={() => setIsOpen(false)}>About</a>
          <a href="contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
