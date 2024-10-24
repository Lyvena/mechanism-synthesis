import React from 'react';
import { Rocket } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Rocket className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold text-primary">AI-PGF</span>
    </div>
  );
};

export default Logo;