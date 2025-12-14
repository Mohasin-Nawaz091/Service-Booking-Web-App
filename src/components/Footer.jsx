import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ServicesWalay</h2>
          <p className="text-sm">
            Your one-stop solution for home services. reliable, fast, and professional.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-400">My Bookings</Link></li>
            <li><Link to="/" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Categories */}
      <div>
          <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {/* Note: The 'to' prop sets the URL parameter */}
            <li><Link to="/?category=Cleaning" className="hover:text-blue-400">Cleaning</Link></li>
            <li><Link to="/?category=Repair" className="hover:text-blue-400">Repair</Link></li>
            <li><Link to="/?category=Tech" className="hover:text-blue-400">Tech Support</Link></li>
            <li><Link to="/?category=Automotive" className="hover:text-blue-400">Automotive</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaLinkedin /></a>
          </div>
        </div>

      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} ServicesWalay. All rights reserved.</p>
        <h3 className="font-extrabold">Developed BY MNA</h3>
      </div>
    </footer>
  );
};

export default Footer;