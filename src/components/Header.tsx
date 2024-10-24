import React from 'react';
import { Activity, Contact, Home, Settings, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800" title="Home"><Home size={24} /></Link></li>
            <li><Link to="/projects" className="text-gray-600 hover:text-gray-800" title="Projects"><Activity size={24} /></Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800" title="Contact"><Contact size={24} /></Link></li>
            <li><Link to="/settings" className="text-gray-600 hover:text-gray-800" title="Settings"><Settings size={24} /></Link></li>
            <li><Link to="/auth" className="text-gray-600 hover:text-gray-800" title="Login/Signup"><UserPlus size={24} /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;