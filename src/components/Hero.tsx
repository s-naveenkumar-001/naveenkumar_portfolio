import React from 'react';
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react';
import profilePhoto from '../assets/Profile.jpeg'; // ✅ make sure your image is in src/assets/

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* ✅ Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-lg border-4 border-blue-500/30">
            <img
              src={profilePhoto}
              alt="Naveenkumar S"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Naveenkumar S
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            AI & ML Enthusiast | Machine Learning Engineer | Data Scientist
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>nk0232997@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 97516 46688</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Abiramam, Tamil Nadu</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://linkedin.com/in/naveenkumar-s-a905472bb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/s-naveenkumar-001"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              GitHub
            </a>
            <a
              href="https://hackerrank.com/profile/nk0232997"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              HackerRank
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce hover:text-blue-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
