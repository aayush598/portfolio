import React from 'react';
import { Heart, Code, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-lg">Built with</span>
            <Heart className="text-red-500" size={20} />
            <span className="text-lg">using</span>
            <Code className="text-blue-400" size={20} />
            <span className="text-lg">React & TypeScript</span>
          </div>
          
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-300">
              <Cpu size={16} />
              <span className="text-sm">Hardware Engineer</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center gap-2 text-gray-300">
              <Code size={16} />
              <span className="text-sm">AI Developer</span>
            </div>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="text-gray-300 text-sm">Problem Solver</div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm mb-2">
              © 2025 Aayush Gid. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Passionate about creating intelligent systems that bridge AI and hardware engineering.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;