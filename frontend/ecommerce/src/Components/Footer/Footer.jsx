import React from 'react';
import footer_logo from "../Assets/logo_big.png";
import insta from "../Assets/instagram_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Footer Logo and Brand Name */}
        <div className="flex items-center mb-8 lg:mb-0">
          <img src={footer_logo} alt="Footer Logo" className="w-20 h-20 mr-2" />
          <p className="text-xl font-semibold">SHOPPER</p>
        </div>

        {/* Footer Links */}
        <ul className="footer-links flex flex-wrap mb-8 lg:mb-0">
          <li className="mr-6 mb-2 text-sm font-medium">Company</li>
          <li className="mr-6 mb-2 text-sm font-medium">Products</li>
          <li className="mr-6 mb-2 text-sm font-medium">Offices</li>
          <li className="mr-6 mb-2 text-sm font-medium">About</li>
          <li className="mr-6 mb-2 text-sm font-medium">Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="footer-social-icons flex flex-wrap ">
          <a href="#" className="footer-icons-container flex flex-wrap  mr-4">
            <img src={insta} alt="Instagram Icon" className="w-8 h-8" />
          </a>
          <a href="#" className="footer-icons-container">
            <img src={whatsapp} alt="WhatsApp Icon" className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">© 2023 SHOPPER. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
