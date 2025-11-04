import React from 'react';
import { Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Target className="text-blue-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Objective</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              AI and ML enthusiast with a strong academic foundation and hands-on project experience in machine learning, 
              Python development, and data analysis. Currently in the final year of a B.Tech in Computer Science (AI & ML). 
              Actively seeking AI/ML-related roles such as <span className="text-blue-400 font-semibold">AI Developer</span>, 
              <span className="text-purple-400 font-semibold"> Machine Learning Engineer</span>, or 
              <span className="text-green-400 font-semibold"> Research Assistant</span>, where I can contribute to solving 
              real-world problems through data-driven and intelligent solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;