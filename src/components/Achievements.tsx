import React from 'react';
import { Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "AI-Focused Project Contributions",
      description: "Contributed to AI-focused academic and personal projects solving real-world problems",
      icon: <Star className="text-blue-400" size={20} />
    },
    {
      title: "Industry Certifications",
      description: "Earned industry-recognized certifications in Python, Generative AI, and API development from global platforms",
      icon: <Trophy className="text-yellow-400" size={20} />
    },
    {
      title: "Hackathon Participation",
      description: "Participated in university-level hackathons and project showcases focused on data-driven problem solving",
      icon: <Star className="text-purple-400" size={20} />
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Trophy className="text-blue-400 mr-3" size={32} />
            <h2 className="text-4xl font-bold">Achievements</h2>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:translate-x-2">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Achievements;