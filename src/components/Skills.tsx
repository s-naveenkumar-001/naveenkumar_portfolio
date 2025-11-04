import React from 'react';
import { Code, Database, Wrench, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["Python", "HTML", "CSS", "JavaScript"],
      color: "blue"
    },
    {
      category: "ML/AI",
      icon: <Zap className="text-purple-400" size={24} />,
      skills: ["Random Forest", "Data Analysis", "Feature Engineering"],
      color: "purple"
    },
    {
      category: "Libraries",
      icon: <Database className="text-green-400" size={24} />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      color: "green"
    },
    {
      category: "Tools & APIs",
      icon: <Wrench className="text-orange-400" size={24} />,
      skills: ["Git", "GitHub", "Postman", "OpenWeatherMap API"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500/30 hover:border-blue-400",
      purple: "border-purple-500/30 hover:border-purple-400",
      green: "border-green-500/30 hover:border-green-400",
      orange: "border-orange-500/30 hover:border-orange-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Code className="text-blue-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`bg-gray-800 rounded-2xl p-6 shadow-2xl border ${getColorClasses(category.color)} transition-all duration-300 hover:transform hover:scale-105`}>
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3">{category.category}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-700 rounded-lg px-3 py-2 text-sm hover:bg-gray-600 transition-colors duration-200">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-center">Other Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Problem Solving", "Team Collaboration"].map((skill, index) => (
                <span key={index} className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;