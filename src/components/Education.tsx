import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering (AI & ML)",
      institution: "Kalasalingam Academy of Research and Education, Krishnankoil",
      period: "2022 – Present",
      grade: "CGPA: 6.8/10",
      type: "current"
    },
    {
      degree: "HSC and SSLC",
      institution: "Muslim Higher Secondary School, Abiramam",
      period: "2016 – 2022",
      grade: "",
      type: "completed"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="text-blue-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:translate-y-[-4px]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-300 mb-2">{edu.institution}</p>
                    {edu.grade && (
                      <p className="text-green-400 font-medium">{edu.grade}</p>
                    )}
                  </div>
                  <div className="flex items-center text-gray-400 mt-4 md:mt-0">
                    <Calendar size={18} className="mr-2" />
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      edu.type === 'current' 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;