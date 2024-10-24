import React from 'react';
import { Activity, Settings, UserPlus } from 'lucide-react';
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
            <li><Link to="/" className="text-gray-600 hover:text-gray-800"><Activity size={24} /></Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-gray-800"><Settings size={24} /></Link></li>
            <li><Link to="/auth" className="text-gray-600 hover:text-gray-800"><UserPlus size={24} /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;