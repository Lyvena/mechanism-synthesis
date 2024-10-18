import React from 'react';
import { Activity, Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">AI-PGF Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-800"><Activity size={24} /></a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800"><Settings size={24} /></a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800"><User size={24} /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;