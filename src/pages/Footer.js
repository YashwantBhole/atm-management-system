import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
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
        <div className="mt-4 md:mt-0">
          <Link to="/technical-support" className="text-white hover:text-blue-500 transition duration-300">
            Technical Support
          </Link>
        </div>

        {/* Footer Text */}
        <p className="text-gray-400 text-sm mt-4 md:mt-0">&copy; 2024 @ All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
