import { FaGithub, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <a href="https://wa.me/919579888901" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-white hover:text-blue-500 transition duration-300" size={24} />
          </a>
          <a href="tel:+919579888901" target="_blank" rel="noopener noreferrer">
            <FaPhone className="text-white hover:text-blue-400 transition duration-300" size={24} />
          </a>
          <a href="https://www.instagram.com/i_am_omkar_888" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-500 transition duration-300" size={24} />
          </a>
        </div>

        {/* Technical Support Link */}
        <div className="flex justify-center">
          <Link to="/technical-support" className="text-blue-400 hover:text-blue-800 transition duration-300">
            Technical Support
          </Link>
        </div>

        {/* Footer Text */}
        <div className="flex justify-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 <a href='https://github.com/YashwantBhole/atm-management-system'><FaGithub className="inline-block " size={26} /></a> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
