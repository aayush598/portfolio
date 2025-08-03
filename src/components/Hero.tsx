import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-8">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-800">AG</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Aayush Gid
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI & Hardware Engineer passionate about creating intelligent systems, RISC-V processors, 
            and cutting-edge machine learning solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              <span>Indore, MP, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={18} />
              <span>+91 6260712882</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={18} />
              <span>aayushgid598@gmail.com</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/aayush598"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-gid-3767a2221/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://aayushgid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200"
            >
              <ExternalLink size={20} />
              Portfolio
            </a>
            <a
              href="mailto:aayushgid598@gmail.com"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;