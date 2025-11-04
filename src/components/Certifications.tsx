import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Harvard CS50's Introduction to Python Programming",
      issuer: "Harvard University",
      type: "Programming",
      color: "red"
    },
    {
      title: "Oracle Cloud Infrastructure 2024 – Generative AI Certified",
      issuer: "Oracle",
      type: "AI/Cloud",
      color: "orange"
    },
    {
      title: "Python Programming, Web Development, Capstone Data Projects",
      issuer: "Coursera",
      type: "Programming",
      color: "blue"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      type: "API",
      color: "orange"
    },
    {
      title: "DBMS Certification (212CSE2305)",
      issuer: "CodeChef",
      type: "Database",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "from-red-500/20 to-pink-500/20 border-red-500/30",
      blue: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
      green: "from-green-500/20 to-emerald-500/20 border-green-500/30",
      orange: "from-orange-500/20 to-yellow-500/20 border-orange-500/30"
    };
    return colors[color as keyof typeof colors];
  };

  const getTypeColor = (type: string) => {
    const colors = {
      Programming: "text-blue-400",
      "AI/Cloud": "text-purple-400",
      API: "text-orange-400",
      Database: "text-green-400"
    };
    return colors[type as keyof typeof colors] || "text-gray-400";
  };

  return (
    <section id="certifications" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Award className="text-blue-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className={`bg-gradient-to-br ${getColorClasses(cert.color)} bg-gray-800 rounded-2xl p-6 shadow-2xl border transition-all duration-300 hover:transform hover:scale-105`}>
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-yellow-400 flex-shrink-0" size={24} />
                  <span className={`text-sm font-medium px-2 py-1 rounded-full bg-gray-700/50 ${getTypeColor(cert.type)}`}>
                    {cert.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;