import React from 'react';
import footerImage from '../assets/footer.png'; // Replace with your image path

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F6F6F6]">
      <img
        src={footerImage}
        alt="Footer"
        className="w-full h-auto object-contain mt-[-66px]"
      />
    </footer>
  );
};

export default Footer;
